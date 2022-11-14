import React from "react";
import { BsCart4 } from "react-icons/bs";
import styles from "../css/Budget.module.css"
import Modal from 'react-modal';
import { useState } from "react";
import axios from "axios";

    export default function BudgetRow  ({budget})  {
        // 지금은 보유 주식 정보로 띄우는데 보유 주식 이름(코드?)으로 쿼리 날려서 실시간 가격 가져와야함 
        const stockName = budget.name;
        const stockAvgPrice = budget.avgPrice;
        const stockValue = budget.value;

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
            var userId = localStorage.getItem("userId");
            console.log("sellValue ==== ", sellValue);
            console.log("stockName ==== ", stockName);
    
            if(sellPrice < 0 || sellValue < 0) {
                window.alert("양수 값을 입력해주세요");
            } else {
                axios({
                    method: "POST",
                    url: `http://localhost:8080/api/stock/sell/${userId}`,
                    data: {"price" : sellPrice, "quantity": sellValue, "stockCode": stockName},
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
            // window.location.reload(); <- 화면 갱신 부분, 현재는 주석 처리
        }

        const setBuyMemberStock = () => {
            //buyValue = buyValue == ""? 100 : buyValue;
            console.log(buyPrice, buyValue );
            if(buyPrice < 0 || buyValue < 0) {
                window.alert("양수 값을 입력해주세요");
            } else {
                var userId = localStorage.getItem("userId");
                axios({
                    method: "POST",
                    url: `http://localhost:8080/api/stock/buy/${userId}`,
                    data: {"price" : buyPrice, "quantity": buyValue, "stockCode": stockName},
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
                // window.location.reload(); <- 화면 갱신 부분, 현재는 주석 처리
            }
        }


        return (
            <div style={{marginTop: '40px', marginBotton: '20px'}}>

                <div style={{display: 'flex', marginLeft: '30px'}}>
                    <BsCart4 size='20px' style={{color: '#D9D9D9', display: 'block', paddingTop: '12px'}}></BsCart4>
                    <span style={{color: 'white', paddingLeft: '30px', display: 'block', width: '150px', paddingTop: '10px'}}>{stockName}</span>
                    <span style={{color: 'white', paddingLeft: '100px', display: 'block', paddingTop: '10px'}}>{stockAvgPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</span>
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
                                            top: '35%',
                                            left: '75%',
                                            overflow: 'auto',
                                            borderRadius: '4px',
                                            width: '200px',
                                            height: 'fit-content',
                                            background: '#1F1F1F'
                    
                                        }
                                    }}>
                                    <div style={{textAlign: 'center'}}>
                                        <p style={{color:'white'}}>매도 수량</p>
                                        <input id='num' type="number" min="1" max={stockValue} style={{width: '40px', marginRight: '10px'}} onChange={onSellChange}></input>
                                    </div>
                                    <button onClick={setSellMemberStock} className={styles.sellButton} style={{marginTop:'15px', marginLeft: '75px'}}>매도</button>

                    </Modal>

                    <Modal isOpen={BuyPopIsOpen} onRequestClose={()=>setBuyPopIsOpen(false)} ariaHideApp={false}
                                                        style={{
                                                            overlay: {
                                                                position: 'absolute',
                                                                backgroundColor: 'rgba(255, 255, 255, 0)'
                                                            },
                                                            content: {
                                                                position: 'relative',
                                                                top: '35%',
                                                                left: '80%',
                                                                overflow: 'auto',
                                                                borderRadius: '4px',
                                                                width: '200px',
                                                                height: 'fit-content',
                                                                background: '#1F1F1F'
                                        
                                                            }
                                                        }}>
                        <div style={{textAlign: 'center'}}>
                                        <p style={{color:'white'}}>매수 수량</p>
                                        <input type="number" min="1" style={{width: '40px', marginRight: '10px'}} onChange={onBuyChange}></input> 
                                        <input id='price' type="text" style={{width: '40px'}} onChange={onBuyPriceChange}></input>
                                    </div>
                                    <button onClick={setBuyMemberStock} className={styles.buyButton} style={{marginTop:'15px', marginLeft: '75px'}}>매수</button>
                        
                    </Modal>
                </div>
             </div>


        );
    }
