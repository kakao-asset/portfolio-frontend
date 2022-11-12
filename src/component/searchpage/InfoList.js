import React from "react";

export default function InfoList  ({stockInfo})  {
        // 천 원 단위 점 찍어주는 거 
        // toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") 
        const oldPrice = stockInfo.prevClosingPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        const startPrice = stockInfo.openingPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        const stockQuantity = stockInfo.accTradeVolume.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        const highPrice = stockInfo.highPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        const lowPrice = stockInfo.lowPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        return (
            <div style={{marginTop: '40px', marginBotton: '20px', display: 'flex'}}>
                <div style={{marginLeft: '30px'}}>
                    <span style={{color: 'white', paddingLeft: '20px', display: 'block', width: '100px', opacity: '0.7'}}>전일 종가</span>
                    <span style={{color: 'white', paddingLeft: '20px', display: 'block', fontSize: '20px'}}>{oldPrice}원</span>
                </div>
                <div style={{marginLeft: '30px'}}>
                    <span style={{color: 'white', paddingLeft: '20px', display: 'block', width: '100px', opacity: '0.7'}}>개장가</span>
                    <span style={{color: 'white', paddingLeft: '20px', display: 'block', fontSize: '20px'}}>{startPrice}원</span>
                </div>
                <div style={{marginLeft: '30px'}}>
                    <span style={{color: 'white', paddingLeft: '20px', display: 'block', width: '100px', opacity: '0.7'}}>거래량</span>
                    <span style={{color: 'white', paddingLeft: '20px', display: 'block', fontSize: '20px'}}>{stockQuantity}원</span>
                </div>
                <div style={{marginLeft: '30px'}}>
                    <span style={{color: 'white', paddingLeft: '20px', display: 'block', width: '100px', opacity: '0.7'}}>최고가</span>
                    <span style={{paddingLeft: '20px', display: 'block', fontSize: '20px', color: '#57C083'}}>{highPrice}원</span>
                </div>
                <div style={{marginLeft: '30px'}}>
                    <span style={{color: 'white', paddingLeft: '20px', display: 'block', width: '100px', opacity: '0.7'}}>최저가</span>
                    <span style={{paddingLeft: '20px', display: 'block', fontSize: '20px', color: '#E35277'}}>{lowPrice}원</span>
                </div>
             </div>


        );
}
