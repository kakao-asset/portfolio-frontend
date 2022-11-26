import { ResponsiveBar } from '@nivo/bar';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { keyboardImplementationWrapper } from '@testing-library/user-event/dist/keyboard';
import { BsArrowCounterclockwise } from 'react-icons/bs';


export default function BarChart({stockHold}) {
    
    const [stockTrend, setStockTrend] = useState([]);
    const [stockMenu, setStockMenu] =useState([]);
    var resStockData =[]; 
    var resData = [];
    var userId = JSON.parse(localStorage.getItem("userData")).userId;

    var indexData = [];

    var stockHistory = []; 

    var keyResult = [];
    var IndexResult = [];

    var barData = [];
    var resultData = [];
    var barResult = [];
    // const [stockHistory, setStockHistory] = useState([{
    //     name: "",
    //     tradeType: "",          // 1이 매수, 0이 매도
    //     tradeDate: "",
    //     tradeTime: "",
    //     price: "",
    //     quantity: "",
    // }])
    const getStockTrend = async () => await axios({
        method: "GET",
        url: `/api/stock/trend/${userId}`
    })
    .then((res) => {
        resData = res.data.data;
        var keyData = [];

        //console.log(resData);
        
        var temp = new Map();
        var objs = [];
        
         for (var i=0; i<resData.length; i++){
            indexData.push(resData[i].date);

            if (resData[i].trendDataList.length > 0) {
                for (var j=0;j<resData[i].trendDataList.length; j++) {
                    keyData.push(resData[i].trendDataList[j].stockName);
                    
                }
            }
        }
        //console.log(indexData); //index 데이터 (일자)
        keyResult = [...new Set(keyData)]; // key 데이터 (보유 주식 종목명)

        for(var i = 0; i < resData.length; i++){
            //var temp = resData[i].trendDataList.map((x) => ([{[x.stockName]: x.quantity}]));
            var obj =[];
            obj.push({"date": resData[i].date});
            for(var j = 0; j < resData[i].trendDataList.length; j++){
                obj.push({[resData[i].trendDataList[j].stockName]: resData[i].trendDataList[j].quantity});
            }
            objs.push(obj);
            // var barData = {"date": resData[i].date};
            // console.log(Object.assign(barData,temp));
        }
        console.log(keyResult)
        //console.log(objs);
        for(var i = 0; i < objs.length; i++){
            // console.log(objs[i])
            var temp = objs[i];
            var tttt = {};
            //tttt = Object.assign(temp[0], temp[1])
            for(var j = 0; j < temp.length; j++){
                //console.log(temp[j]);
                tttt = Object.assign(tttt, temp[j])
            }
            console.log(tttt)
            resultData.push(tttt)
            console.log("resultData: " , resultData)
        }
        //resultData = objs.map((x) => x.keys().map((k) => console.log(k)))

        setStockTrend(resultData);
        setStockMenu(keyResult);
        /*
        "date": "2022-11-14",
    "삼성전자": 21,
    "현대로템": 21,
    "sandwich": 118,
    "kebab": 172,
        */
        // console.log(resData.length);

        // for (var i=0; i<resData.length; i++){
        //     indexData.push(resData[i].date);

        //     if (resData[i].trndDataList.length > 0) {
        //         for (var j=0;j<resData[i].trndDataList.length; j++) {
        //             keyData.push(resData[i].trndDataList[j].stockName);
        //             barData.push({date:resData[i].date,  name : resData[i].trndDataList[j].stockName, value : resData[i].trndDataList[j].quantity})
        //         }
        //     }
        // }
        // console.log(indexData); //index 데이터 (일자)
        // keyResult = [...new Set(keyData)]; // key 데이터 (보유 주식 종목명)
        // console.log(keyResult);
        // console.log(barData);


    }).catch((err) => {
        console.log("use_stock 데이터 에러", err);
    })

    useEffect(() => {
        getStockTrend();
    }, []);

    console.log(resultData)
    console.log(keyResult)

    return (
        <div style={{width: '950px', height: '400px'}}>
            {console.log(stockTrend)}
            {console.log(stockMenu)};
        <ResponsiveBar
        data={stockTrend}
        keys={stockMenu}
        indexBy="date"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'country',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'food',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    },
                ],
            }
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in country: "+e.indexValue}}
    />
    </div>
    );
};
