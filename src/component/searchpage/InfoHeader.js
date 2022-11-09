import React from "react";
    export default function InfoHeader  ({stockInfo})  {

        const stockCode = stockInfo.stockCode;
        const stockName = stockInfo.stockName;
    

        return (
            <div style={{ marginLeft: '10px', marginTop: '70px'}}>
            <span style={{color: 'white', paddingLeft: '20px', display: 'block', fontSize: '20px'}}>{stockName}</span>
            <span style={{color: 'white', paddingLeft: '20px', display: 'block', width: '100px', opacity: '0.7'}}>{stockCode}</span>
            </div>


        );
    }
