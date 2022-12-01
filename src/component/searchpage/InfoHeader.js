import React from "react";
    export default function InfoHeader  ({stockInfo})  {

        const stockCode = String(stockInfo.symbolCode).replace(/A/ig,"");
        const stockName = stockInfo.name;
        
        return (
            <div style={{ marginLeft: '10px', marginTop: '60px'}}>
                <span style={{color: 'white', paddingLeft: '40px', display: 'block', fontSize: '30px'}}>{stockName}</span>
                <span style={{color: 'white', paddingLeft: '40px', display: 'block', width: '300px', opacity: '0.7', fontSize: '15px'}}>{stockCode} / {stockInfo.sectorName}</span>
            </div>
        );
    }
