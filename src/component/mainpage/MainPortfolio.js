import Portfolio from "./maincomponent/Portfolio"
import Budget from "./maincomponent/Budget"
import ProfitLoss from "./maincomponent/ProfitLoss";
import News from "./maincomponent/News";
import Ranking from "./maincomponent/Ranking";
import Modal from 'react-modal';
import { useState, useEffect } from "react";
import MyBudgetRow from "./maincomponent/row/MyBudgetRow";
import axios from "axios";
import StockHistory from "./maincomponent/StockHistory";


export default function MainPortfolio({stockHold, budgetData, profit, stockHistory}) {

    // 업종별 랭킹 란 보유 주식 선택 모달 state
    const [modalIsOpen, setModalIsOpen] = useState(false);

    // 업종별 랭킹 란 선택 주식 데이터 가져오는 부분
    // var rankingStock = localStorage.getItem('rankingStock');
    // const rankingSeletedStock = JSON.parse(rankingStock);

    // 업종별 랭킹 란 선택 주식
    var selectedRankingStock = "";
    var newsStockCode = "";

    // 보유 주식 중 가장 많이 가지고 있는 주식 찾는 부분
    var maxIndex = 0;

    if (stockHold.length > 0) {
        var maxValue = stockHold[0].value;
        for(var i=1; i<stockHold.length; i++){
            if(maxValue<stockHold[i].value){
                maxValue=stockHold[i].value;
                maxIndex=i;
            }
        }

        selectedRankingStock = stockHold[maxIndex];
        newsStockCode = stockHold[maxIndex].symbolCode
    }

    for(var i=0;i<localStorage.length;i++){
        const key = localStorage.key(i);

        if (key == 'rankingStock') {
            var rankingStock = localStorage.getItem('rankingStock');
            const rankingSeletedStock = JSON.parse(rankingStock);

            for (var i=0; i<stockHold.length; i++) {
                if (rankingSeletedStock.rankingTarget.name == stockHold[i].name) {
                    selectedRankingStock = rankingSeletedStock.rankingTarget;
                    newsStockCode = rankingSeletedStock.rankingTarget.symbolCode;
                }
            }
           
        }
    }

    var userId = JSON.parse(localStorage.getItem("userData")).userId;
    
    const [cash, setCash] = useState("");

    const getUserCash = async () => await axios({
        method: "GET",
        url: `/api/cash/${userId}`
    })
    .then((res) => {
        var resData = res.data.data;
        console.log(resData.cash);
        setCash(resData.cash);

        console.log(cash);

        
    }).catch((err) => {
        console.log("user_cash 데이터 에러", err);
    })

useEffect(() => {
    getUserCash();
}, []);


    return (
        <div text-align="center">
            <div style={{display: 'inline-block'}}>
        <div style={{marginLeft: '2rem', marginRight: '2rem', textAlign: 'left', }}>
            <div style={{marginTop: '1rem', display: 'flex'}}>
                <h3 style={{color: 'white', paddingTop: '1rem', marginLeft:'2rem'}}> 내 자산</h3>
            </div>
        <div style={{display: "flex"}}>
            {/* 포트폴리오(차트 및 보유 주식, 자산) 영역 */}
            {<Portfolio stockHold={stockHold} budget={budgetData} cash={cash}></Portfolio>}

            {/* 보유 주식 관리 영역 */}
            {<Budget stockHold={stockHold} budgetData={budgetData}></Budget>}
        </div>
        <div style={{marginTop: '1rem', display: 'flex'}}>
            <h3 style={{color: 'white', paddingTop: '1rem', marginLeft:'2rem'}}>내 자산 보유 동향</h3>
            <h3 style={{color: 'white', paddingTop: '1rem', marginLeft:'51rem'}}>내 자산 변동 내역</h3>
        </div>
        <div style={{display: "flex"}}>
         
            <ProfitLoss stockHold={stockHold} profit={profit}></ProfitLoss>
            <StockHistory></StockHistory>
        
        </div>
            <div style={{display: 'flex'}}>
                {/* 업종별 랭킹 관련 선택 주식이 없을 시 보유 주식 수가 가장 많은 주식과 관련된 업종을 디폴트로 보여줌 */}
                <button id="rankingButton" onClick={()=>setModalIsOpen(!modalIsOpen)}style={
                    {color: 'white', 
                    backgroundColor: '#1F1F1F',  
                    marginLeft: '2rem', 
                    marginTop: '3rem',
                    borderColor: '#1F1F1F',
                    border: '0px',
                    fontSize: '20px',
                    borderBottom: '0.5px solid', 
                    color: "#d2d2d2"  
                    }}>{selectedRankingStock.name}</button>
                <h3 style={{color: 'white', paddingTop: '1rem', marginLeft:'1rem', marginTop: '3rem'}}>관련된 업종</h3>

                {/* 업종별 랭킹 란 보유 주식 선택 모달 */}
                <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} ariaHideApp={false}
                style={{
                    overlay: {
                        position: 'absolute',
                        backgroundColor: 'rgba(255, 255, 255, 0)',
                        left: '0',
                        top: '0'
                    },
                    content: {
                        position: 'relative',
                        top: '94rem',
                        left: '-44rem',
                        margin: 'auto',
                        overflow: 'auto',
                        borderRadius: '4px',
                        width: 'fit-content',
                        height: 'fit-content',
                        background: '#1F1F1F',
                        borderColor: '#000'
                        
                        

                    }
                }}
                >
                    {stockHold.map(rankingTarget => (
                        <MyBudgetRow key={rankingTarget.name} rankingTarget={rankingTarget}></MyBudgetRow>
                    ))}
                </Modal>
            </div>
                
            {/* 업종별 랭킹 영역 */}
            {/* Ranking 컴포넌트에 업종별 랭킹 란 현재 선택된 주식 이름 props로 넘겨주기 */}
            <div style={{}}>
                            {/* 보유 주식 관련 뉴스 영역 */}
                {<News stockCode={newsStockCode}></News>}
                <Ranking selectedRankingStock={selectedRankingStock}></Ranking>       
            </div>
        </div>
        </div>
        </div>
    );
}