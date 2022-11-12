import React from "react";
import { BsCart4 } from "react-icons/bs";
import styles from "../css/Budget.module.css"
import Modal from 'react-modal';
import { useState } from "react";

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
        const [buyValue, setBuyValue] = useState("");
        
        const onSellChange = (e) => {
            setSellValue(e.target.value);
        }

        const onBuyChange = (e) => {
            setBuyValue(e.target.value);
        }

        // 매도 매수 버튼 클릭 시 호출되는 함수
        // 여기 함수 내에 DB에 저장 요청 보내야 함
        // DB에 저장하면 stockHold도 변하므로 reload 해서 화면 갱신하기
        const setSellMemberStock = () => {
            console.log(sellValue);
            setSellPopIsOpen(false);
            // window.location.reload(); <- 화면 갱신 부분, 현재는 주석 처리
        }

        const setBuyMemberStock = () => {
            console.log(buyValue);
            setBuyPopIsOpen(false);
            // window.location.reload(); <- 화면 갱신 부분, 현재는 주석 처리
        }


        return (
            <div style={{marginTop: '40px', marginBotton: '20px'}}>

                <div style={{display: 'flex', marginLeft: '30px'}}>
                    <BsCart4 size='20px' style={{color: '#D9D9D9', display: 'block', paddingTop: '12px'}}></BsCart4>
                    <span style={{color: 'white', paddingLeft: '30px', display: 'block', width: '150px', paddingTop: '10px'}}>{stockName}</span>
                    <span style={{color: 'white', paddingLeft: '100px', display: 'block', paddingTop: '10px'}}>{(Math.ceil(stockAvgPrice/stockValue)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</span>
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
                                        <input type="number" style={{width: '40px'}} onChange={onSellChange}></input>
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
                                        <input type="number" style={{width: '40px'}} onChange={onBuyChange}></input>
                                    </div>
                                    <button onClick={setBuyMemberStock} className={styles.buyButton} style={{marginTop:'15px', marginLeft: '75px'}}>매수</button>
                        
                    </Modal>
                </div>
             </div>


        );
    }
