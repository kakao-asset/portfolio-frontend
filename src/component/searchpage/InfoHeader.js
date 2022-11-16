import React from "react";
    export default function InfoHeader  ({stockInfo})  {

        const stockCode = String(stockInfo.symbolCode).replace(/A/ig,"");
        const stockName = stockInfo.name;

        return (
            <div style={{ marginLeft: '10px', marginTop: '60px'}}>
                <span style={{color: 'white', paddingLeft: '40px', display: 'block', fontSize: '35px'}}>{stockName}</span>
                <span style={{color: 'white', paddingLeft: '48px', display: 'block', width: '100px', opacity: '0.7', fontSize: '20px'}}>{stockCode}</span>
            </div>


        );
    }
