import React from "react";
import styles from "./css/InfoContent.module.css"
import Modal from 'react-modal';
import { useState } from "react";

    export default function InfoContent  ({stockInfo})  {

            // 매도 버튼 모달 관리
            const [SellPopIsOpen, setSellPopIsOpen] = useState(false);

            // 매수 버튼 모달 관리
            const [BuyPopIsOpen, setBuyPopIsOpen] = useState(false);
    
    
            // 매도 매수 수량 관리 state
            const [sellValue, setSellValue] = useState("");
            const [buyValue, setBuyValue] = useState("");
            
            const onSellChange = (e) => {
                setSellValue(e.target.value);
            }
    
            const onBuyChange = (e) => {
                setBuyValue(e.target.value);
            }
    
            // 매도 매수 버튼 클릭 시 호출되는 함수
            // 여기 함수 내에 DB에 저장 요청 보내야 함
            const setSellMemberStock = () => {
                console.log(sellValue);
                setSellPopIsOpen(false);
              
            }
    
            const setBuyMemberStock = () => {
                console.log(buyValue);
                setBuyPopIsOpen(false);
               
            }

        // 현재가
        const currentPrice = stockInfo.tradePrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        
        var c = Number(stockInfo.tradePrice);
        var o = Number(stockInfo.prevClosingPrice); 

        return (
            <div style={{display: 'flex', marginLeft: '50px'}}>
                <p style={{color: 'white', fontSize: '35px'}}>{currentPrice}원</p>
                <div style={{ marginLeft: '20px', marginTop: '40px', marginRight: '80px'}}>
                    <span style={{color: 'white', paddingLeft: '20px', display: 'block', fontSize: '15px'}}>전일 대비</span>
                    <span style={{color: '#FF5981', paddingLeft: '20px', display: 'block',fontSize: '18px'}}>{(c-o).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원 
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
                                        <p style={{color:'white'}}>매도 수량</p>
                                        <input type="number" style={{width: '40px'}} onChange={onSellChange}></input>
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
                                        <p style={{color:'white'}}>매수 수량</p>
                                        <input type="number" style={{width: '40px'}} onChange={onBuyChange}></input>
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