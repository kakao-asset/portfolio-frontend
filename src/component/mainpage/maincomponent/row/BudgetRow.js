import React, { useCallback,useState, useEffect } from "react";
import { BsCart4 } from "react-icons/bs";
import styles from "../css/Budget.module.css"
import Modal from 'react-modal';
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from 'date-fns/esm/locale';
import { VscNoNewline } from "react-icons/vsc";


    export default function BudgetRow  ({budget, cash})  {


        console.log(budget);

        let now = new Date();

        // 지금은 보유 주식 정보로 띄우는데 보유 주식 이름(코드?)으로 쿼리 날려서 실시간 가격 가져와야함 
        const stockName = budget.name;
        const stockAvgPrice = budget.avgPrice;
        const stockValue = budget.value;
        const stockSymbolCode = budget.symbolCode;
        const stockSectorCode = budget.sectorCode;
        const stockSectorName = budget.sectorName;
        const stockCurrentPrice = budget.currentPrice;

        const [,updateState] = useState()
        const forceUpdate = useCallback(()=> updateState({}), []);

        useEffect(()=>{
            forceUpdate()
            setInterval(()=>{
                forceUpdate()
            },1000)
        },[])

        // 매도 버튼 모달 관리
        const [SellPopIsOpen, setSellPopIsOpen] = useState(false);

        // 매수 버튼 모달 관리
        const [BuyPopIsOpen, setBuyPopIsOpen] = useState(false);


        // 매도 매수 수량 관리 state
        const [sellValue, setSellValue] = useState("");
        const [sellPrice, setSellPrice] = useState("");
        const [buyValue, setBuyValue] = useState("");
        const [buyPrice, setBuyPrice] = useState("");
        const [sellDate, setSellDate] = useState(now);
        const [buyDate, setBuyDate] = useState(now);
        // const [sellTime, setSellTime] = useState();
        // const [buyTime, setBuyTime] = useState();
        
        
        const onSellChange = (e) => {
            setSellValue(e.target.value);
        }
        const onSellPriceChange = (e) => {
            setSellPrice(e.target.value);
        }
        const onBuyChange = (e) => {
            setBuyValue(e.target.value);
        }
        const onBuyPriceChange = (e) => {
            setBuyPrice(e.target.value);
        }

        // 매도 매수 버튼 클릭 시 호출되는 함수
        // 여기 함수 내에 DB에 저장 요청 보내야 함
        // DB에 저장하면 stockHold도 변하므로 reload 해서 화면 갱신하기
        const setSellMemberStock = () => {
            var userId = JSON.parse(localStorage.getItem("userData")).userId;
            var sellTime = document.getElementById("sellTime").value;
            console.log("sellValue ==== ", sellValue);
            console.log("stockName ==== ", stockName);
    
            if(sellPrice < 0 || sellValue < 0 || sellPrice == "" || sellValue == "") {
                window.alert("삭제 수량과 금액을 확인해주세요");
            } else if (sellDate == "" || document.getElementById("sellTime").value == "" ){
                window.alert("삭제 일자와 시간을 확인해주세요");
            }
            else {
                axios({
                    method: "POST",
                    url: `/api/stock/sell/${userId}`,
                    data: {"price" : sellPrice, "quantity": sellValue, "stockName": stockName, "stockCode": stockSymbolCode, "sectorCode": stockSectorCode, "sectorName": stockSectorName,
                "tradeDate": sellDate, "tradeTime": sellTime},
                    headers: {
                        "Content-Type" : "application/json; charset=utf-8"
                    }, 
                    timeout: 5000,
                    responseType: "json" // [응답 데이터 : stream , json]
                })
                .then((res) => {
                    console.log(res); 
                    console.log(res);
                    window.alert(res.data.message);
                }).catch((err, res) => {
                    console.log(res.data.message)
                    console.log("매도 실패", err);
                    console.log("매도 실패", res);
                    window.alert("매도 실패");
                })
            }
            
            setSellPopIsOpen(false);
            window.location.reload();
        }

        const setBuyMemberStock = () => {
           
            console.log(stockName , "stockName  : : :: ")
            
            if(buyPrice < 0 || buyValue < 0 || buyPrice == "" || buyValue == "") {
                window.alert("추가 수량과 금액을 확인해주세요");
            } else if (buyDate == "" || document.getElementById("buyTime").value == "" ){
                window.alert("추가 일자와 시간을 확인해주세요");
            } else if ( buyPrice*buyValue > cash){
                window.alert("보유 현금 잔액이 부족합니다");
            }
            else {
                var userId = JSON.parse(localStorage.getItem("userData")).userId;
                var buyTime = document.getElementById("buyTime").value;

                axios({
                    
                    method: "POST",
                    url: `/api/stock/buy/${userId}`,
                    data: {"price" : buyPrice, "quantity": buyValue, "stockName": stockName, "stockCode": stockSymbolCode, "sectorCode": stockSectorCode, "sectorName": stockSectorName,
                    "tradeDate": buyDate, "tradeTime":  buyTime},
                    headers: {
                        "Content-Type" : "application/json; charset=utf-8"
                    }, 
                    timeout: 5000,
                    responseType: "json" // [응답 데이터 : stream , json]
                })
                .then((res) => {
                    console.log(res.data.data); 
                    // {avgPrice: 554, quantity: 40, stockCode: '뉴트리'}
                    window.alert(res.data.message);
                }).catch((err, res) => {
                    console.log("추가 실패", err);
                    console.log("매수 실패", res);
                    window.alert("추가 실패");
                })
                setBuyPopIsOpen(false);
                window.location.reload(); 
            }
        }


        return (
            <div style={{marginTop: '2rem', marginBotton: '20px'}}>

                <div style={{display: 'flex', marginLeft: '1.5rem', position: 'relative'}}>
                    <BsCart4 size='20px' style={{color: '#D9D9D9', display: 'block', paddingTop: '12px'}}></BsCart4>
                    <span id='stockName' style={{color: 'white', paddingLeft: '30px', display: 'block', width: '100px', paddingTop: '10px'}}>{stockName}</span>
                    <span id='stockCurrentPrice' style={{color: 'white', paddingLeft: '4rem', display: 'block', paddingTop: '10px', width: '90px', textAlign: 'right'}}>{stockCurrentPrice !== undefined? (stockCurrentPrice).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : 0}원</span>
                    
                    <button id="buyButton" className={styles.buyButton} onClick={()=>setBuyPopIsOpen(true)}>추가</button>
                    <button id="sellButton" className={styles.sellButton} onClick={()=>setSellPopIsOpen(true)}>삭제</button>


                    <Modal isOpen={SellPopIsOpen} onRequestClose={()=>setSellPopIsOpen(false)} ariaHideApp={false}
                                                        style={{
                                                            overlay: {
                                                                position: 'absolute',
                                                                backgroundColor: 'rgba(31, 31, 31, 0)',
                                                                top: '0',
                                                                left: '0',
                                            
                                                                
                                                            },
                                                            content: {
                                                                top: '0',
                                                                bottom: '0',
                                                                left: '0',
                                                                right: '0',
                                                                margin: 'auto',
                                                                marginTop: '15rem',
                                                                position: 'relative',
                                                                overflow: 'auto',
                                                                width: 'fit-content',
                                                                height: 'fit-content',
                                                                background: '#1F1F1F',
                                                                paddingRight: '50px',
                                                                paddingBottom: '30px',
                                                                borderColor: '#000',
                                                                borderWidth: '2px'
                                                                
                                        
                                                            }
                                                        }}>
                        <div style={{}}>
                                        <ul>
                                        <span style={{color: 'white', display: 'block', fontSize: '30px'}}>{stockName}</span>
                                        <span style={{color: 'white' , display: 'block', width: 'fit-content', opacity: '0.7', fontSize: '20px'}}>(*현재가: {stockCurrentPrice !== undefined? (stockCurrentPrice).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : 0}원)</span>
                                        </ul>
                                        <ul>
                                            <div style={{display: 'flex',}}>
                                            <p style={{color:'white', marginRight: '10px', marginBottom: '10px'}}>수량</p>
                                            <input type="number" min="0" max={stockValue} style={{width: '40px',marginRight: '30px', marginTop:'8px', height: '30px', fontSize: '20px'}} onChange={onSellChange}></input> 
                                            </div>
                                    
                                        </ul>
                                        <ul>
                                        <div style={{display: 'flex'}}>
                                            <p style={{color:'white', marginRight: '10px', marginTop: '10px'}}>금액</p>
                                        <input id='price' type="text" style={{width: '150px', height: '30px', fontSize: '20px'}} onChange={onSellPriceChange}></input>   
                                            </div>
                                        </ul>
                                        <ul>
                                            <DatePicker locale={ko} selected={sellDate} onChange={date => setSellDate(date)} ></DatePicker>
                                        </ul>
                                        <ul>
                                            <input id='sellTime' type="time" style={{marginLeft: '40px'}}></input>
                                        </ul>
                                        
                                        
                       
                                    </div>
                                    <button onClick={setSellMemberStock} className={styles.sellButton} style={{marginTop:'30px', marginLeft: '110px'}}>매도</button>
                        
                    </Modal>
                    <Modal isOpen={BuyPopIsOpen} onRequestClose={()=>setBuyPopIsOpen(false)} ariaHideApp={false}
                                                        style={{
                                                            overlay: {
                                                                position: 'absolute',
                                                                backgroundColor: 'rgba(31, 31, 31, 0)',
                                                                top: '0',
                                                                left: '0',
                                            
                                                                
                                                            },
                                                            content: {
                                                                top: '0',
                                                                bottom: '0',
                                                                left: '0',
                                                                right: '0',
                                                                margin: 'auto',
                                                                marginTop: '15rem',
                                                                position: 'relative',
                                                                overflow: 'auto',
                                                                width: 'fit-content',
                                                                height: 'fit-content',
                                                                background: '#1F1F1F',
                                                                paddingRight: '50px',
                                                                paddingBottom: '30px',
                                                                borderColor: '#000',
                                                                borderWidth: '2px'
                                                                
                                        
                                                            }
                                                        }}>
                        <div style={{}}>
                                        <ul>
                                        <span style={{color: 'white', display: 'block', fontSize: '30px'}}>{stockName}</span>
                                        <span style={{color: 'white' , display: 'block', width: 'fit-content', opacity: '0.7', fontSize: '20px'}}>(*현재가: {stockCurrentPrice !== undefined? (stockCurrentPrice).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : 0}원)</span>
                                        </ul>
                                        <ul>
                                            <div style={{display: 'flex',}}>
                                            <p style={{color:'white', marginRight: '10px', marginBottom: '10px'}}>수량</p>
                                            <input type="number" min="1" style={{width: '40px',marginRight: '30px', marginTop:'8px', height: '30px', fontSize: '20px'}} onChange={onBuyChange}></input> 
                                            </div>
                                    
                                        </ul>
                                        <ul>
                                        <div style={{display: 'flex'}}>
                                            <p style={{color:'white', marginRight: '10px', marginTop: '10px'}}>금액</p>
                                        <input id='price' type="text" style={{width: '150px', height: '30px', fontSize: '20px'}} onChange={onBuyPriceChange}></input>   
                                            </div>
                                        </ul>
                                        <ul>
                                            <DatePicker locale={ko} selected={buyDate} onChange={date => setBuyDate(date)} ></DatePicker>
                                        </ul>
                                        <ul>
                                            <input id='buyTime' type="time" style={{marginLeft: '40px'}}></input>
                                        </ul>
                                        
                                        
                       
                                    </div>
                                    <button onClick={setBuyMemberStock} className={styles.buyButton} style={{marginTop:'30px', marginLeft: '110px'}}>추가</button>
                        
                    </Modal>

                    
                </div>
             </div>


        );
    }

