import Portfolio from "./maincomponent/Portfolio"
import Budget from "./maincomponent/Budget"
import ProfitLoss from "./maincomponent/ProfitLoss";
import News from "./maincomponent/News";
import Ranking from "./maincomponent/Ranking";
import Modal from 'react-modal';
import { useState } from "react";
import MyBudgetRow from "./maincomponent/row/MyBudgetRow";

export default function MainPortfolio({stockHold}) {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    var rankingStock = localStorage.getItem('rankingStock');
    const rankingSeletedStock = JSON.parse(rankingStock);

    var selectedRankingStockName;

    var maxIndex = 0;
    var maxValue = stockHold[0].value;
    for(var i=1; i<stockHold.length; i++){
        if(maxValue<stockHold[i].value){
            maxValue=stockHold[i].value;
            maxIndex=i;
        }
    }

    
    console.log(rankingSeletedStock.rankingTarget.name);
    if (rankingSeletedStock.rankingTarget.name===''){
        selectedRankingStockName = stockHold[maxIndex].name;
    } else {
        selectedRankingStockName = rankingSeletedStock.rankingTarget.name;
    }
    console.log(selectedRankingStockName);
    

    return (
        <div style={{marginLeft: '2%', marginRight: '2%', textAlign: 'left', }}>
            <div style={{marginTop: '10px'}}>
                <h3 style={{color: 'white', paddingTop: '10px', marginLeft:'20px'}}>자산</h3>
            </div>
        <div style={{display: "flex"}}>
            {/* 포트폴리오(차트 및 보유 주식, 자산) 영역 */}
            {<Portfolio stockHold={stockHold}></Portfolio>}

            {/* 보유 주식 관리 영역 */}
            {<Budget stockHold={stockHold}></Budget>}
        </div>
        <div style={{marginTop: '10px', display: 'flex'}}>
            <h3 style={{color: 'white', paddingTop: '10px', marginLeft:'20px'}}>손익(타임라인)</h3>
            <h3 style={{color: 'white', paddingTop: '10px', marginLeft:'910px'}}>뉴스</h3>
        </div>
        <div style={{display: "flex"}}>
            {/* 실시간 손익 타임라인 그래프 영역 */}
            {<ProfitLoss></ProfitLoss>}

            {/* 보유 주식 관련 뉴스 영역 */}
            {<News stockHold={stockHold}></News>}
        </div>
            <div style={{display: 'flex'}}>
                {/* 업종별 랭킹 관련 선택 주식이 없을 시 보유 주식 수가 가장 많은 주식과 관련된 업종을 디폴트로 보여줌 */}
                <button onClick={()=>setModalIsOpen(!modalIsOpen)}style={
                    {color: 'white', 
                    backgroundColor: '#1F1F1F',  
                    marginLeft: '20px', 
                    marginTop: '50px',
                    paddingBottom: '10px',
                    borderColor: '#1F1F1F',
                    border: '0px',
                    fontSize: '20px'   
                    }}>{selectedRankingStockName}</button>
                <h3 style={{color: 'white', paddingTop: '10px', marginLeft:'10px', marginTop: '50px'}}>관련된 업종</h3>

                <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} ariaHideApp={false}
                style={{
                    overlay: {
                        position: 'absolute',
                        backgroundColor: 'rgba(255, 255, 255, 0)'
                    },
                    content: {
                        position: 'relative',
                        top: '1350px',
                        left: '30px',
                        overflow: 'auto',
                        borderRadius: '4px',
                        width: 'fit-content',
                        height: 'fit-content',
                        background: '#1F1F1F'

                    }
                }}
                >
                    {stockHold.map(rankingTarget => (
                        <MyBudgetRow key={rankingTarget.name} rankingTarget={rankingTarget}></MyBudgetRow>
                    ))}
                </Modal>
            </div>
            {/* 업종별 랭킹 영역 */}
            <Ranking></Ranking>
        </div>
    );
}