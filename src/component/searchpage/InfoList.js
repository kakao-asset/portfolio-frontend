import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function InfoList  ({stockInfo}) {
        // 천 원 단위 점 찍어주는 거 
        // toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") 
        // console.log(typeof(stockInfo.prevClosingPrice)) > number

        // var c = Number(stockInfo.tradePrice);
        // var o = Number(stockInfo.prevClosingPrice); 
        var oldPrice = String(stockInfo.prevClosingPrice);
        var startPrice = String(stockInfo.openingPrice);
        var stockQuantity = String(stockInfo.accTradeVolume);
        var highPrice = String(stockInfo.highPrice);
        var lowPrice = String(stockInfo.lowPrice);
        var accTradeVolume = String(stockInfo.accTradeVolume);
        var upperLimitPrice = String(stockInfo.upperLimitPrice);
        var lowerLimitPrice = String(stockInfo.lowerLimitPrice);
        var high52wPrice = String(stockInfo.high52wPrice);
        var low52wPrice = String(stockInfo.low52wPrice);
        var foreignRatio = stockInfo.foreignRatio;
        var marketCap = String(stockInfo.marketCap);
        var eps = stockInfo.eps;
        var per = stockInfo.per;
        var bps = stockInfo.bps;
        var pbr = stockInfo.pbr;
        var sectorName = stockInfo.sectorName;

        return (
            <div style={{paddingBottom: '100px'}}>
            <div style={{marginTop: '40px', marginBotton: '20px', display: 'flex'}}>
                <div style={{marginLeft: '30px'}}>
                    <span style={{color: 'white', paddingLeft: '20px', display: 'block', width: '100px', opacity: '0.7'}}>전일 종가</span>
                    <span style={{color: 'white', paddingLeft: '20px', display: 'block', fontSize: '20px'}}>{oldPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</span>
                </div>
                <div style={{marginLeft: '30px'}}>
                    <span style={{color: 'white', paddingLeft: '20px', display: 'block', width: '100px', opacity: '0.7'}}>개장가</span>
                    <span style={{color: 'white', paddingLeft: '20px', display: 'block', fontSize: '20px'}}>{startPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</span>
                </div>
                <div style={{marginLeft: '30px'}}>
                    <span style={{color: 'white', paddingLeft: '20px', display: 'block', width: '100px', opacity: '0.7'}}>거래량</span>
                    <span style={{color: 'white', paddingLeft: '20px', display: 'block', fontSize: '20px'}}>{stockQuantity.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</span>
                </div>
                <div style={{marginLeft: '30px'}}>
                    <span style={{color: 'white', paddingLeft: '20px', display: 'block', width: '100px', opacity: '0.7'}}>최고가</span>
                    <span style={{paddingLeft: '20px', display: 'block', fontSize: '20px', color: '#57C083'}}>{highPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</span>
                </div>
                <div style={{marginLeft: '30px'}}>
                    <span style={{color: 'white', paddingLeft: '20px', display: 'block', width: '100px', opacity: '0.7'}}>최저가</span>
                    <span style={{paddingLeft: '20px', display: 'block', fontSize: '20px', color: '#E35277'}}>{lowPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</span>
                </div>
             </div>
             <div style={{marginTop: '40px', marginBotton: '20px', display: 'flex'}}>
                <div style={{marginLeft: '30px'}}>
                    <span style={{color: 'white', paddingLeft: '20px', display: 'block', width: '100px', opacity: '0.7'}}>거래대금</span>
                    <span style={{color: 'white', paddingLeft: '20px', display: 'block', fontSize: '20px'}}>{accTradeVolume.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</span>
                </div>
                <div style={{marginLeft: '30px'}}>
                    <span style={{color: 'white', paddingLeft: '20px', display: 'block', width: '100px', opacity: '0.7'}}>상한가</span>
                    <span style={{color: 'white', paddingLeft: '20px', display: 'block', fontSize: '20px'}}>{upperLimitPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</span>
                </div>
                <div style={{marginLeft: '30px'}}>
                    <span style={{color: 'white', paddingLeft: '20px', display: 'block', width: '100px', opacity: '0.7'}}>하한가</span>
                    <span style={{color: 'white', paddingLeft: '20px', display: 'block', fontSize: '20px'}}>{lowerLimitPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</span>
                </div>
                <div style={{marginLeft: '30px'}}>
                    <span style={{color: 'white', paddingLeft: '20px', display: 'block', width: '100px', opacity: '0.7'}}>52주 최고가</span>
                    <span style={{paddingLeft: '20px', display: 'block', fontSize: '20px', color: 'white'}}>{high52wPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</span>
                </div>
                <div style={{marginLeft: '30px'}}>
                    <span style={{color: 'white', paddingLeft: '20px', display: 'block', width: '100px', opacity: '0.7'}}>52주 최저가</span>
                    <span style={{paddingLeft: '20px', display: 'block', fontSize: '20px', color: 'white'}}>{low52wPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</span>
                </div>
                <div style={{marginLeft: '30px'}}>
                    <span style={{color: 'white', paddingLeft: '20px', display: 'block', width: '100px', opacity: '0.7'}}>외국인 비율</span>
                    <span style={{color: 'white', paddingLeft: '20px', display: 'block', fontSize: '20px'}}>{foreignRatio}%</span>
                </div>
                <div style={{marginLeft: '30px'}}>
                    <span style={{color: 'white', paddingLeft: '20px', display: 'block', width: '100px', opacity: '0.7'}}>시가총액</span>
                    <span style={{color: 'white', paddingLeft: '20px', display: 'block', fontSize: '20px'}}>{marketCap.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</span>
                </div>
                <div style={{marginLeft: '30px'}}>
                    <span style={{color: 'white', paddingLeft: '20px', display: 'block', width: '100px', opacity: '0.7'}}>EPS/PER</span>
                    <span style={{paddingLeft: '20px', display: 'block', fontSize: '20px', color: 'white'}}>{eps}/{per}</span>
                </div>
                <div style={{marginLeft: '30px'}}>
                    <span style={{color: 'white', paddingLeft: '20px', display: 'block', width: '100px', opacity: '0.7'}}>BPS/PBR</span>
                    <span style={{paddingLeft: '20px', display: 'block', fontSize: '20px', color: 'white'}}>{bps}/{pbr}</span>
                </div>
                <div style={{marginLeft: '30px'}}>
                    <span style={{color: 'white', paddingLeft: '20px', display: 'block', width: '100px', opacity: '0.7'}}>업종</span>
                    <span style={{color: 'white', paddingLeft: '20px', display: 'block', fontSize: '20px'}}>{sectorName}</span>
                </div>
             </div>
            </div>
        );
}
