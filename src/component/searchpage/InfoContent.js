import React from "react";
import styles from "./css/InfoContent.module.css"
import Modal from 'react-modal';
import { useState, useEffect } from "react";
import axios from "axios";

    export default function InfoContent  ({budget, stockInfo})  {
        const stockName = stockInfo.name;
        const stockSymbolCode = stockInfo.symbolCode;
        const stockSectorCode = stockInfo.sectorCode;
        const stockSectorName = stockInfo.sectorName;

        var stockValue = "";

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

        const [sellName, setSellName] = useState("");

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
            console.log("sellValue ==== ", sellValue);
            console.log("stockName ==== ", stockName);
        
            if(sellPrice < 0 || sellValue < 0 || sellPrice == "" || sellValue == "") {
                window.alert("양수 값을 입력해주세요");
            } else {
                axios({
                    method: "POST",
                    url: `/api/stock/sell/${userId}`,
                    data: {"price" : sellPrice, "quantity": sellValue, "stockName": stockName, "stockCode": stockSymbolCode, "sectorCode": stockSectorCode,"sectorName": stockSectorName},
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
            //buyValue = buyValue == ""? 100 : buyValue;
            console.log(buyPrice, buyValue );
            if(buyPrice < 0 || buyValue < 0 || buyPrice == "" || buyValue == "") {
                window.alert("양수 값을 입력해주세요");
            } else {
                var userId = JSON.parse(localStorage.getItem("userData")).userId;
                axios({
                    method: "POST",
                    url: `/api/stock/buy/${userId}`,
                    data: {"price" : buyPrice, "quantity": buyValue, "stockName": stockName, "stockCode": stockSymbolCode, "sectorCode": stockSectorCode, "sectorName": stockSectorName},
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
                    console.log("매수 실패", err);
                    console.log("매수 실패", res);
                    window.alert("매수 실패");
                })
                setBuyPopIsOpen(false);
                window.location.reload(); 
            }
        }

        // 현재가
        // const stockInfoPrice = stockInfo.tradePrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        // console.log("stockInfo: ",stockInfo);

        var c = Number(stockInfo.tradePrice);
        var o = Number(stockInfo.prevClosingPrice); 

        return (
            <div style={{display: 'flex', marginLeft: '50px'}}>
                <p style={{color: 'white', fontSize: '35px'}}>{c.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</p>
                <div style={{ marginLeft: '20px', marginTop: '40px', marginRight: '80px'}}>
                    <span style={{color: 'white', paddingLeft: '20px', display: 'block', fontSize: '15px'}}>전일 대비</span>
                    <span style={{color: (c-o)>0? '#57C083':'#FF5981', paddingLeft: '20px', display: 'block',fontSize: '18px'}}>{(c-o).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원 
                    ({(Math.ceil(((c-o)/o)*10000))/100}%)
                    </span>
                </div>
                <button className={styles.sellButton} onClick={()=>setSellPopIsOpen(true)}>매도</button>
                <button className={styles.buyButton} onClick={()=>setBuyPopIsOpen(true)}>매수</button>

                <Modal isOpen={SellPopIsOpen} onRequestClose={()=>setSellPopIsOpen(false)} ariaHideApp={false}
                                    style={{
                                        overlay: {
                                            position: 'absolute',
                                            backgroundColor: 'rgba(255, 255, 255, 0)'
                                        },
                                        content: {
                                            position: 'relative',
                                            top: '25%',
                                            left: '22%',
                                            overflow: 'auto',
                                            borderRadius: '4px',
                                            width: '200px',
                                            height: 'fit-content',
                                            background: '#1F1F1F'
                    
                                        }
                                    }}>
                                    <div style={{textAlign: 'center'}}>
                                    <ul>
                                        <div style={{display: 'flex'}}>
                                        <p style={{color:'white', marginRight: '10px', marginBottom: '10px'}}>매도 수량</p>
                                        <input id='num' type="number" min="1" max={stockValue} style={{width: '40px', marginRight: '30px',marginTop:'8px', height: '30px', fontSize: '20px'}} onChange={onSellChange}></input>
                                        </div>
                                        </ul>
                                        <p style={{color:'white'}}>매도 금액</p>
                                        <input id='price' type="text" style={{width: '150px', height: '30px', fontSize: '20px'}} onChange={onSellPriceChange}></input> 
                                    </div>
                                    <button onClick={setSellMemberStock} style={{    
                                        backgroundColor: '#57C083',
                                        borderColor: '#57C083',
                                        width: 'fit-content',
                                        height: '40px',
                                        borderRadius: '4px',
                                        marginRight: '30px',
                                        paddingLeft: '10px',
                                        paddingRight: '10px',
                                        textAlign: 'center',
                                        paddingTop: '5px',
                                        paddingBottom: '10px',
                                        color: 'white',
                                        marginLeft: '75px',
                                        marginTop: '10px'
                                    
                                        }}>매도</button>

                    </Modal>

                    <Modal isOpen={BuyPopIsOpen} onRequestClose={()=>setBuyPopIsOpen(false)} ariaHideApp={false}
                                                        style={{
                                                            overlay: {
                                                                position: 'absolute',
                                                                backgroundColor: 'rgba(255, 255, 255, 0)'
                                                            },
                                                            content: {
                                                                position: 'relative',
                                                                top: '25%',
                                                                left: '35%',
                                                                overflow: 'auto',
                                                                borderRadius: '4px',
                                                                width: '200px',
                                                                height: 'fit-content',
                                                                background: '#1F1F1F'
                                        
                                                            }
                                                        }}>
                        <div style={{textAlign: 'center'}}>
                                    <ul>
                                            <div style={{display: 'flex'}}>
                                            <p style={{color:'white', marginRight: '10px', marginBottom: '10px'}}>매수 수량</p>
                                            <input type="number" min="1" style={{width: '40px',marginRight: '30px', marginTop:'8px', height: '30px', fontSize: '20px'}} onChange={onBuyChange}></input> 
                                            </div>
                                    
                                        </ul>
                        
                                        <p style={{color:'white'}}>매수 금액</p>
                                        <input id='price' type="text" style={{width: '150px', height: '30px', fontSize: '20px'}} onChange={onBuyPriceChange}></input>   
                       
                                    </div>
                                    <button onClick={setBuyMemberStock} className={styles.buySmallButton} 
                                    style={{    
                                        backgroundColor: '#DD6C87',
                                        borderColor: '#DD6C87',
                                        width: 'fit-content',
                                        height: '40px',
                                        borderRadius: '4px',
                                        marginRight: '30px',
                                        paddingLeft: '10px',
                                        paddingRight: '10px',
                                        textAlign: 'center',
                                        paddingTop: '5px',
                                        paddingBottom: '10px',
                                        color: 'white',
                                        marginLeft: '75px',
                                        marginTop: '10px'
                                    
                                        }}>매수</button>
                        
                    </Modal>
            </div>
        );
    }