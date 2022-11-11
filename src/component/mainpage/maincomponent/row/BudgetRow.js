import React from "react";
import { BsFillCircleFill } from "react-icons/bs";
import styles from "../css/Budget.module.css"

    export default function BudgetRow  ({budget})  {
        const stockName = budget.stockName;
        const stockValue = budget.stockValue;

        return (
            <div style={{marginTop: '40px', marginBotton: '20px'}}>

                <div style={{display: 'flex', marginLeft: '30px'}}>
                    <BsFillCircleFill size='20px' style={{color: '#D9D9D9', display: 'block', paddingTop: '12px'}}></BsFillCircleFill>
                    <span style={{color: 'white', paddingLeft: '20px', display: 'block', width: '100px', paddingTop: '10px'}}>{stockName}</span>
                    <span style={{color: 'white', paddingLeft: '100px', display: 'block', paddingTop: '10px'}}>{stockValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</span>
                    <button className={styles.sellButton}>매도</button>
                    <button className={styles.buyButton}>매수</button>
                </div>
             </div>


        );
    }
