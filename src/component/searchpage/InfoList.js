import React from "react";

export default function InfoList({ stockInfo }) {

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

    function numberToKorean(number) {
        var inputNumber = number < 0 ? false : number;
        var unitWords = ['', '만', '억', '조', '경'];
        var splitUnit = 10000;
        var splitCount = unitWords.length;
        var resultArray = [];
        var resultString = '';

        for (var i = 1; i < splitCount; i++) {
            var unitResult = (inputNumber % Math.pow(splitUnit, i + 1)) / Math.pow(splitUnit, i);
            unitResult = Math.floor(unitResult);
            if (unitResult > 0) {
                resultArray[i] = unitResult;
            }
        }

        for (var i = 1; i < resultArray.length; i++) {
            if (!resultArray[i]) continue;
            resultString = String(resultArray[i]) + unitWords[i] + resultString;
        }

        return resultString;
    }

    return (
        <div style={{ paddingBottom: '7rem' }}>
            <div style={{ marginTop: '4rem', marginBotton: '2rem', display: 'flex' }}>
                <div style={{ marginLeft: '2rem' }}>
                    <span style={{ color: 'white', paddingLeft: '20px', display: 'block', width: '120px', opacity: '0.7' }}>전일 종가</span>
                    <span style={{ color: 'white', paddingLeft: '20px', display: 'block', fontSize: '20px', width: 'fit-content' }}>{Number(Math.floor(oldPrice)).toLocaleString('ko-KR')}원</span>
                </div>
                <div style={{ marginLeft: '30px' }}>
                    <span style={{ color: 'white', paddingLeft: '20px', display: 'block', width: '120px', opacity: '0.7' }}>개장가</span>
                    <span style={{ color: 'white', paddingLeft: '20px', display: 'block', fontSize: '20px', width: 'fit-content' }}>{Number(Math.floor(startPrice)).toLocaleString('ko-KR')}원</span>
                </div>
                <div style={{ marginLeft: '30px' }}>
                    <span style={{ color: 'white', paddingLeft: '20px', display: 'block', width: '120px', opacity: '0.7' }}>거래량</span>
                    <span style={{ color: 'white', paddingLeft: '20px', display: 'block', fontSize: '20px', whiteSpace: 'nowrap', width: 'fit-content' }}>{Number(Math.floor(stockQuantity)).toLocaleString('ko-KR')}원</span>
                </div>
                <div style={{ marginLeft: '30px' }}>
                    <span style={{ color: 'white', paddingLeft: '20px', display: 'block', width: '120px', opacity: '0.7' }}>최저가</span>
                    <span style={{ paddingLeft: '20px', display: 'block', fontSize: '20px', color: '#E35277', width: 'fit-content' }}>{Number(Math.floor(lowPrice)).toLocaleString('ko-KR')}원</span>
                </div>
                <div style={{ marginLeft: '30px' }}>
                    <span style={{ color: 'white', paddingLeft: '20px', display: 'block', width: '120px', opacity: '0.7' }}>최고가</span>
                    <span style={{ paddingLeft: '20px', display: 'block', fontSize: '20px', color: '#57C083', width: 'fit-content' }}>{Number(Math.floor(highPrice)).toLocaleString('ko-KR')}원</span>
                </div>
                <div style={{ marginLeft: '30px' }}>
                    <span style={{ color: 'white', paddingLeft: '20px', display: 'block', width: '150px', opacity: '0.7' }}>거래대금</span>
                    <span style={{ color: 'white', paddingLeft: '20px', display: 'block', fontSize: '20px', width: 'fit-content' }}>{numberToKorean(accTradePrice).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</span>
                </div>
                <div style={{ marginLeft: '30px' }}>
                    <span style={{ color: 'white', paddingLeft: '20px', display: 'block', width: '200px', opacity: '0.7' }}>시가총액</span>
                    <span style={{ color: 'white', paddingLeft: '20px', display: 'block', fontSize: '20px', width: 'fit-content' }}>{numberToKorean(marketCap).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</span>
                </div>
            </div>
            <div style={{ marginTop: '40px', marginBotton: '20px', display: 'flex' }}>
                <div style={{ marginLeft: '30px' }}>
                    <span style={{ color: 'white', paddingLeft: '20px', display: 'block', width: '120px', opacity: '0.7' }}>외국인 비율</span>
                    <span style={{ color: 'white', paddingLeft: '20px', display: 'block', fontSize: '20px', width: 'fit-content' }}>{foreignRatio}%</span>
                </div>
                <div style={{ marginLeft: '30px' }}>
                    <span style={{ color: 'white', paddingLeft: '20px', display: 'block', width: '120px', opacity: '0.7' }}>상한가</span>
                    <span style={{ color: 'white', paddingLeft: '20px', display: 'block', fontSize: '20px', width: 'fit-content' }}>{Number(Math.floor(upperLimitPrice)).toLocaleString('ko-KR')}원</span>
                </div>
                <div style={{ marginLeft: '30px' }}>
                    <span style={{ color: 'white', paddingLeft: '20px', display: 'block', width: '120px', opacity: '0.7' }}>하한가</span>
                    <span style={{ color: 'white', paddingLeft: '20px', display: 'block', fontSize: '20px', width: 'fit-content' }}>{Number(Math.floor(lowerLimitPrice)).toLocaleString('ko-KR')}원</span>
                </div>
                <div style={{ marginLeft: '30px' }}>
                    <span style={{ color: 'white', paddingLeft: '20px', display: 'block', width: '120px', opacity: '0.7' }}>52주 최저가</span>
                    <span style={{ paddingLeft: '20px', display: 'block', fontSize: '20px', color: 'white', width: 'fit-content' }}>{Number(Math.floor(low52wPrice)).toLocaleString('ko-KR')}원</span>
                </div>
                <div style={{ marginLeft: '30px' }}>
                    <span style={{ color: 'white', paddingLeft: '20px', display: 'block', width: '120px', opacity: '0.7' }}>52주 최고가</span>
                    <span style={{ paddingLeft: '20px', display: 'block', fontSize: '20px', color: 'white', width: 'fit-content' }}>{Number(Math.floor(high52wPrice)).toLocaleString('ko-KR')}원</span>
                </div>
                <div style={{ marginLeft: '30px' }}>
                    <span style={{ color: 'white', paddingLeft: '20px', display: 'block', width: '120px', opacity: '0.7' }}>EPS/PER</span>
                    <span style={{ paddingLeft: '20px', display: 'block', fontSize: '20px', color: 'white', width: 'fit-content' }}>{Number(eps).toLocaleString('ko-KR')}/{per}</span>
                </div>
                <div style={{ marginLeft: '30px' }}>
                    <span style={{ color: 'white', paddingLeft: '20px', display: 'block', width: '120px', opacity: '0.7' }}>BPS/PBR</span>
                    <span style={{ paddingLeft: '20px', display: 'block', fontSize: '20px', color: 'white', width: 'fit-content' }}>{Number(bps).toLocaleString('ko-KR')}/{pbr}</span>
                </div>
            </div>
        </div>
    );
}