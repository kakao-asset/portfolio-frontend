import React from "react";
import styles from "./css/InfoContent.module.css"

    export default function InfoContent  ({stockInfo})  {

        // 현재가
        console.log(stockInfo.tradePrice);
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
                <button className={styles.sellButton}>매도</button>
                <button className={styles.buyButton}>매수</button>

            </div>

        );
    }