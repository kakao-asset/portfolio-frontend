import React from "react";

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
        var accTradePrice = String(stockInfo.accTradePrice);
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

        function numberToKorean(number){
            var inputNumber  = number < 0 ? false : number;
            var unitWords    = ['', '만','억','조','경'];
            var splitUnit    = 10000;
            var splitCount   = unitWords.length;
            var resultArray  = [];
            var resultString = '';
        
            for (var i = 1; i < splitCount; i++){
                 var unitResult = (inputNumber % Math.pow(splitUnit, i + 1)) / Math.pow(splitUnit, i);
                unitResult = Math.floor(unitResult);
                if (unitResult > 0){
                    resultArray[i] = unitResult;
                }
            }
        
            for (var i = 1; i < resultArray.length; i++){
                if(!resultArray[i]) continue;
                resultString = String(resultArray[i]) + unitWords[i] + resultString;
            }
        
            return resultString;
        }

        return (
            <div style={{paddingBottom: '7rem'}}>
            <div style={{marginTop: '4rem', marginBotton: '2rem', display: 'flex'}}>
                <div style={{marginLeft: '2rem'}}>
                    <span style={{color: 'white', paddingLeft: '20px', display: 'block', width: '100px', opacity: '0.7'}}>전일 종가</span>
                    <span style={{color: 'white', paddingLeft: '20px', display: 'block', fontSize: '20px', width: '100px'}}>{oldPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</span>
                </div>
                <div style={{marginLeft: '30px'}}>
                    <span style={{color: 'white', paddingLeft: '20px', display: 'block', width: '100px', opacity: '0.7'}}>개장가</span>
                    <span style={{color: 'white', paddingLeft: '20px', display: 'block', fontSize: '20px', width: '100px'}}>{startPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</span>
                </div>
                <div style={{marginLeft: '30px'}}>
                    <span style={{color: 'white', paddingLeft: '20px', display: 'block', width: '100px', opacity: '0.7'}}>거래량</span>
                    <span style={{color: 'white', paddingLeft: '20px', display: 'block', fontSize: '20px', whiteSpace: 'nowrap', width: '100px'}}>{stockQuantity.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</span>
                </div>
                <div style={{marginLeft: '30px'}}>
                    <span style={{color: 'white', paddingLeft: '20px', display: 'block', width: '100px', opacity: '0.7'}}>최고가</span>
                    <span style={{paddingLeft: '20px', display: 'block', fontSize: '20px', color: '#57C083', width: '100px'}}>{highPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</span>
                </div>
                <div style={{marginLeft: '30px'}}>
                    <span style={{color: 'white', paddingLeft: '20px', display: 'block', width: '100px', opacity: '0.7'}}>최저가</span>
                    <span style={{paddingLeft: '20px', display: 'block', fontSize: '20px', color: '#E35277', width: '100px'}}>{lowPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</span>
                </div>
             </div>
             <div style={{marginTop: '40px', marginBotton: '20px', display: 'flex'}}>
                <div style={{marginLeft: '30px'}}>
                    <span style={{color: 'white', paddingLeft: '20px', display: 'block', width: '100px', opacity: '0.7'}}>거래대금</span>
                    <span style={{color: 'white', paddingLeft: '20px', display: 'block', fontSize: '20px', width: '100px'}}>{numberToKorean(accTradePrice).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</span>
                </div>
                <div style={{marginLeft: '30px'}}>
                    <span style={{color: 'white', paddingLeft: '20px', display: 'block', width: '100px', opacity: '0.7'}}>상한가</span>
                    <span style={{color: 'white', paddingLeft: '20px', display: 'block', fontSize: '20px', width: '100px'}}>{upperLimitPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</span>
                </div>
                <div style={{marginLeft: '30px'}}>
                    <span style={{color: 'white', paddingLeft: '20px', display: 'block', width: '100px', opacity: '0.7'}}>하한가</span>
                    <span style={{color: 'white', paddingLeft: '20px', display: 'block', fontSize: '20px', width: '100px'}}>{lowerLimitPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</span>
                </div>
                <div style={{marginLeft: '30px'}}>
                    <span style={{color: 'white', paddingLeft: '20px', display: 'block', width: '100px', opacity: '0.7'}}>52주 최고가</span>
                    <span style={{paddingLeft: '20px', display: 'block', fontSize: '20px', color: 'white', width: '100px'}}>{high52wPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</span>
                </div>
                <div style={{marginLeft: '30px'}}>
                    <span style={{color: 'white', paddingLeft: '20px', display: 'block', width: '100px', opacity: '0.7'}}>52주 최저가</span>
                    <span style={{paddingLeft: '20px', display: 'block', fontSize: '20px', color: 'white', width: '100px'}}>{low52wPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</span>
                </div>
                <div style={{marginLeft: '30px'}}>
                    <span style={{color: 'white', paddingLeft: '20px', display: 'block', width: '100px', opacity: '0.7'}}>외국인 비율</span>
                    <span style={{color: 'white', paddingLeft: '20px', display: 'block', fontSize: '20px', width: '100px'}}>{foreignRatio}%</span>
                </div>
                <div style={{marginLeft: '30px'}}>
                    <span style={{color: 'white', paddingLeft: '20px', display: 'block', width: '100px', opacity: '0.7'}}>시가총액</span>
                    <span style={{color: 'white', paddingLeft: '20px', display: 'block', fontSize: '20px', width: '100px'}}>{numberToKorean(marketCap).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</span>
                </div>
                <div style={{marginLeft: '30px'}}>
                    <span style={{color: 'white', paddingLeft: '20px', display: 'block', width: '100px', opacity: '0.7'}}>EPS/PER</span>
                    <span style={{paddingLeft: '20px', display: 'block', fontSize: '20px', color: 'white',width: '100px'}}>{eps}/{per}</span>
                </div>
                <div style={{marginLeft: '30px'}}>
                    <span style={{color: 'white', paddingLeft: '20px', display: 'block', width: '100px', opacity: '0.7'}}>BPS/PBR</span>
                    <span style={{paddingLeft: '20px', display: 'block', fontSize: '20px', color: 'white', width: '100px'}}>{bps}/{pbr}</span>
                </div>
                <div style={{marginLeft: '30px'}}>
                    <span style={{color: 'white', paddingLeft: '20px', display: 'block', width: '100px', opacity: '0.7'}}>업종</span>
                    <span style={{color: 'white', paddingLeft: '20px', display: 'block', fontSize: '20px', width: '100px'}}>{sectorName}</span>
                </div>
             </div>
            </div>
        );
}