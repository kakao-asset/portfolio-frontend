import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function InfoList  ({stockInfo}) {
        // 천 원 단위 점 찍어주는 거 
        // toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") 
        // console.log(typeof(stockInfo.prevClosingPrice)) > number
        const oldPrice = stockInfo.prevClosingPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        const startPrice = stockInfo.openingPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        const stockQuantity = stockInfo.accTradeVolume.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        const highPrice = stockInfo.highPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        const lowPrice = stockInfo.lowPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        const accTradeVolume = stockInfo.accTradeVolume.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        const upperLimitPrice = stockInfo.upperLimitPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        const lowerLimitPrice = stockInfo.lowerLimitPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        const high52wPrice = stockInfo.high52wPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        const low52wPrice = stockInfo.low52wPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        const foreignRatio = stockInfo.foreignRatio;
        const marketCap = stockInfo.marketCap.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        const eps = stockInfo.eps;
        const per = stockInfo.per;
        const bps = stockInfo.bps;
        const pbr = stockInfo.pbr;
        const sectorName = stockInfo.sectorName;

        return (
            <div style={{paddingBottom: '100px'}}>
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
             <div style={{marginTop: '40px', marginBotton: '20px', display: 'flex'}}>
                <div style={{marginLeft: '30px'}}>
                    <span style={{color: 'white', paddingLeft: '20px', display: 'block', width: '100px', opacity: '0.7'}}>거래대금</span>
                    <span style={{color: 'white', paddingLeft: '20px', display: 'block', fontSize: '20px'}}>{accTradeVolume}원</span>
                </div>
                <div style={{marginLeft: '30px'}}>
                    <span style={{color: 'white', paddingLeft: '20px', display: 'block', width: '100px', opacity: '0.7'}}>상한가</span>
                    <span style={{color: 'white', paddingLeft: '20px', display: 'block', fontSize: '20px'}}>{upperLimitPrice}원</span>
                </div>
                <div style={{marginLeft: '30px'}}>
                    <span style={{color: 'white', paddingLeft: '20px', display: 'block', width: '100px', opacity: '0.7'}}>하한가</span>
                    <span style={{color: 'white', paddingLeft: '20px', display: 'block', fontSize: '20px'}}>{lowerLimitPrice}원</span>
                </div>
                <div style={{marginLeft: '30px'}}>
                    <span style={{color: 'white', paddingLeft: '20px', display: 'block', width: '100px', opacity: '0.7'}}>52주 최고가</span>
                    <span style={{paddingLeft: '20px', display: 'block', fontSize: '20px', color: 'white'}}>{high52wPrice}원</span>
                </div>
                <div style={{marginLeft: '30px'}}>
                    <span style={{color: 'white', paddingLeft: '20px', display: 'block', width: '100px', opacity: '0.7'}}>52주 최저가</span>
                    <span style={{paddingLeft: '20px', display: 'block', fontSize: '20px', color: 'white'}}>{low52wPrice}원</span>
                </div>
                <div style={{marginLeft: '30px'}}>
                    <span style={{color: 'white', paddingLeft: '20px', display: 'block', width: '100px', opacity: '0.7'}}>외국인 비율</span>
                    <span style={{color: 'white', paddingLeft: '20px', display: 'block', fontSize: '20px'}}>{foreignRatio}%</span>
                </div>
                <div style={{marginLeft: '30px'}}>
                    <span style={{color: 'white', paddingLeft: '20px', display: 'block', width: '100px', opacity: '0.7'}}>시가총액</span>
                    <span style={{color: 'white', paddingLeft: '20px', display: 'block', fontSize: '20px'}}>{marketCap}원</span>
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
