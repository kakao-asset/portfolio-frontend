import React from "react";
import styles from "./css/InfoContent.module.css"
import Modal from 'react-modal';
import { useState, useEffect } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import { ko } from 'date-fns/esm/locale';
import Swal from "sweetalert2";


    export default function InfoContent  ({budget, stockInfo})  {
        var now = new Date();

        const stockName = stockInfo.name;
        const stockSymbolCode = stockInfo.symbolCode;
        const stockSectorCode = stockInfo.sectorCode;
        const stockSectorName = stockInfo.sectorName;

        var stockValue = 0;

        if (budget.length > 0) {
            for (var i=0;i<budget.length;i++){
                if (stockSymbolCode == budget[i].symbolCode){
                    stockValue = budget[i].value;
                }
            }
        }

        console.log("stockInfo:::", stockInfo);
        
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

        const [sellName, setSellName] = useState("");

        // const [sellDate, setSellDate] = useState(now);
        // const [buyDate, setBuyDate] = useState(now);

        const onSellChange = (e) => {
            setSellValue(e.target.value);
        }
        const onBuyChange = (e) => {
            setBuyValue(e.target.value);
        }
        const onBuyPriceChange = (e) => {
            setBuyPrice(e.target.value);
        }

        const onSellPriceChange = (e) => {
            setSellPrice(e.target.value);
        }

        // 매도 매수 버튼 클릭 시 호출되는 함수
        // 여기 함수 내에 DB에 저장 요청 보내야 함
        // DB에 저장하면 stockHold도 변하므로 reload 해서 화면 갱신하기
        const setSellMemberStock = () => {
            var userId = JSON.parse(localStorage.getItem("userData")).userId;
            var sellTime = document.getElementById("sellTime").value;
            console.log("sellValue ==== ", sellValue);
            console.log("stockName ==== ", stockName);
        
            if(sellPrice < 0 || sellValue < 0 || sellPrice == "" || sellValue == "" || isNaN(sellPrice) || isNaN(sellValue)) {
                Swal.fire({
                    icon: "warning",
                    text: "삭제 수량과 금액을 확인해주세요",
                    showConfirmButton: false,
                    timer: '1000'
                });
                // window.alert("삭제 수량과 금액을 확인해주세요");
            } else if (sellDate == "" || document.getElementById("sellTime").value == "" ){
                Swal.fire({
                    icon: "warning",
                    text: "삭제 일자와 시간을 확인해주세요",
                    showConfirmButton: false,
                    timer: '1000'
                });
                // window.alert("삭제 일자와 시간을 확인해주세요");
            }
            else {
                axios({
                    method: "POST",
                    url: `/api/stock/sell/${userId}`,
                    data: {"price" : sellPrice, "quantity": sellValue, "stockName": stockName, "stockCode": stockSymbolCode, "sectorCode": stockSectorCode,"sectorName": stockSectorName,
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
                    Swal.fire({
                        icon: "success",
                        title: "삭제 완료",
                        showConfirmButton: false,
                        timer: '1000'
                    });

                    window.location.reload();
                    // window.alert(res.data.message);
                }).catch((err, res) => {
                    console.log(res.data.message)
                    console.log("삭제 실패", err);
                    console.log("삭제 실패", res);
                    Swal.fire({
                        icon: "error",
                        title: "삭제 실패",
                        text: "잠시 후 다시 시도해주세요.",
                        showConfirmButton: false,
                        timer: '1000'
                    });
                })
            }
            
            setSellPopIsOpen(false);
            
        }

        const setBuyMemberStock = () => {
            //buyValue = buyValue == ""? 100 : buyValue;
            console.log(buyPrice, buyValue );
            if(buyPrice < 0 || buyValue < 0 || buyPrice == "" || buyValue == "" || isNaN(buyPrice) || isNaN(buyValue)) {
                Swal.fire({
                    icon: "warning",
                    text: "추가 수량과 금액을 확인해주세요",
                    showConfirmButton: false,
                    timer: '1000'
                });
            } else if (buyDate == "" || document.getElementById("buyTime").value == "" ){
                Swal.fire({
                    icon: "warning",
                    text: "추가 일자와 시간을 확인해주세요",
                    showConfirmButton: false,
                    timer: '1000'
                });
            }
             else if ( buyPrice*buyValue > cash){
                Swal.fire({
                    icon: "warning",
                    text: "보유 현금 잔액이 부족합니다",
                    showConfirmButton: false,
                    timer: '1000'
                });
            } else if (cash ==null || cash == [] || cash == "" || cash == undefined){
                Swal.fire({
                    icon: "warning",
                    text: "보유 현금이 없습니다",
                    showConfirmButton: false,
                    timer: '1000'
                });
            }
            else {
                var userId = JSON.parse(localStorage.getItem("userData")).userId;
                var buyTime = document.getElementById("buyTime").value;
                axios({
                    method: "POST",
                    url: `/api/stock/buy/${userId}`,
                    data: {"price" : buyPrice, "quantity": buyValue, "stockName": stockName, "stockCode": stockSymbolCode, "sectorCode": stockSectorCode, "sectorName": stockSectorName,
                    "tradeDate": buyDate, "tradeTime": buyTime},
                    headers: {
                        "Content-Type" : "application/json; charset=utf-8"
                    }, 
                    timeout: 5000,
                    responseType: "json" // [응답 데이터 : stream , json]
                })
                .then((res) => {
                    console.log(res.data.data); 
                    // {avgPrice: 554, quantity: 40, stockCode: '뉴트리'}
                    Swal.fire({
                        icon: "success",
                        title: "추가 성공",
                        showConfirmButton: false,
                        timer: '1000'
                    });

                    window.location.reload();
                }).catch((err, res) => {
                    console.log("추가 실패", err);
                    console.log("추가 실패", res);
                    Swal.fire({
                        icon: "error",
                        title: "추가 실패",
                        text: "잠시 후 다시 시도해주세요.",
                        showConfirmButton: false,
                        timer: '1000'
                    });
                })
                setBuyPopIsOpen(false);
            }
        }

        // 현재가
        // const stockInfoPrice = stockInfo.tradePrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        // console.log("stockInfo: ",stockInfo);

        var c = Number(stockInfo.tradePrice);
        var o = Number(stockInfo.prevClosingPrice); 


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
        }, [cash]);
    

        return (
            <div style={{display: 'flex', marginLeft: '50px'}}>
                <p style={{color: 'white', fontSize: '33px'}}>{c.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</p>
                <div style={{ marginLeft: '20px', marginTop: '40px', marginRight: '80px'}}>
                    <span style={{color: 'white', paddingLeft: '20px', display: 'block', fontSize: '12px'}}>전일 대비</span>
                    <span style={{color: (c-o)>0? '#57C083':'#FF5981', paddingLeft: '20px', display: 'block',fontSize: '15px'}}>{(c-o).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원 
                    ({(Math.ceil(((c-o)/o)*10000))/100}%)
                    </span>
                </div>
                <button className={styles.buyButton} onClick={()=>setBuyPopIsOpen(true)}>자산 추가</button>
                <button className={styles.sellButton} onClick={()=>setSellPopIsOpen(true)}>자산 삭제</button>
                <span style={{color: 'white', paddingLeft: '28.5rem', display: 'block', width: '200px', opacity: '0.7', fontSize: '17px', paddingTop: '50px'}}>
                    {stockInfo.datetime} 기준</span>
                
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
                                        <span style={{color: 'white' , display: 'block', width: 'fit-content', opacity: '0.7', fontSize: '20px'}}>(*현재가: {c.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원)</span>
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
                                            <DatePicker maxDate={now} locale={ko} selected={sellDate} onChange={date => setSellDate(date)} ></DatePicker>
                                        </ul>
                                        <ul>
                                            <input id='sellTime' type="time" style={{marginLeft: '40px'}}></input>
                                        </ul>
                                        
                                        
                       
                                    </div>
                                    <button onClick={setSellMemberStock} className={styles.sellSmallButton} style={{marginTop:'30px', marginLeft: '110px'}}>삭제</button>
                        
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
                                        <span style={{color: 'white' , display: 'block', width: 'fit-content', opacity: '0.7', fontSize: '20px'}}>(*현재가: {c.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원)</span>
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
                                            <DatePicker maxDate={now} locale={ko} selected={buyDate} onChange={date => setBuyDate(date)} ></DatePicker>
                                        </ul>
                                        <ul>
                                            <input id='buyTime' type="time" style={{marginLeft: '40px'}}></input>
                                        </ul>
                                        
                                        
                       
                                    </div>
                                    <button onClick={setBuyMemberStock} className={styles.buySmallButton} style={{marginTop:'30px', marginLeft: '110px'}}>추가</button>
                        
                    </Modal>

            </div>
        );
    }