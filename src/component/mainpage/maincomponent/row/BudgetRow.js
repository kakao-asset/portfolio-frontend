import React from "react";
import { BsFillCircleFill } from "react-icons/bs";
import styles from "../css/Budget.module.css"
import Modal from 'react-modal';
import { useState } from "react";

    export default function BudgetRow  ({budget})  {
        const stockName = budget.stockName;
        const stockValue = budget.stockValue;

        const [SellPopIsOpen, setSellPopIsOpen] = useState(false);

        const [BuyPopIsOpen, setBuyPopIsOpen] = useState(false);

        return (
            <div style={{marginTop: '40px', marginBotton: '20px'}}>

                <div style={{display: 'flex', marginLeft: '30px'}}>
                    <BsFillCircleFill size='20px' style={{color: '#D9D9D9', display: 'block', paddingTop: '12px'}}></BsFillCircleFill>
                    <span style={{color: 'white', paddingLeft: '20px', display: 'block', width: '100px', paddingTop: '10px'}}>{stockName}</span>
                    <span style={{color: 'white', paddingLeft: '100px', display: 'block', paddingTop: '10px'}}>{stockValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</span>
                    <button className={styles.sellButton} onClick={()=>setSellPopIsOpen(true)}>매도</button>
                    <button className={styles.buyButton} onClick={()=>setBuyPopIsOpen(true)}>매수</button>

                    <Modal isOpen={SellPopIsOpen} onRequestClose={()=>setSellPopIsOpen(false)}
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
                                        <input type="tell" style={{width: '40px'}}></input>
                                    </div>
                                    <button className={styles.sellButton} style={{marginTop:'15px', marginLeft: '75px'}}>매도</button>

                    </Modal>

                    <Modal isOpen={BuyPopIsOpen} onRequestClose={()=>setBuyPopIsOpen(false)}
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
                                        <input type="tell" style={{width: '40px'}}></input>
                                    </div>
                                    <button className={styles.buyButton} style={{marginTop:'15px', marginLeft: '75px'}}>매수</button>
                        
                    </Modal>
                </div>
             </div>


        );
    }
