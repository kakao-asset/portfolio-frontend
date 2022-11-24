import { ResponsiveBar } from '@nivo/bar';
import { useState, useEffect } from 'react';
import axios from 'axios';


export default function BarChart({stockHold}) {
    var resStockData =[]; 
    var resData;
    var userId = JSON.parse(localStorage.getItem("userData")).userId;

    const [stockHistory, setStockHistory] = useState([{
        name: "",
        tradeType: "",          // 1이 매수, 0이 매도
        tradeDate: "",
        tradeTime: "",
        price: "",
        quantity: "",
    }])

    const getStockHistory = async () => await axios({
        method: "GET",
        url: `/api/stock-history/${userId}`
    })
    .then((res) => {
        resData = res.data.data;
        resStockData = resData.map((x) => ({
            name: x.stockName, 
            quantity: x.quantity, 
            price: x.price, 
            tradeType: x.tradeType, 
            tradeDate: x.tradeDate, 
            tradeTime: x.tradeTime}));
        setStockHistory(resStockData);

        console.log(stockHistory);
        
    }).catch((err) => {
        console.log("use_stock 데이터 에러", err);
    })

    useEffect(() => {
        getStockHistory();
    }, []);



    var stockHistoryData = stockHistory.map((x) => 
    ({date: x.tradeDate, label:[x.name+"\t"+"\t", x.value+"주"], value: x.value*x.avgPrice, price: x.avgPrice}));
    
    var keyData = stockHistory.map((x) => ([x.tradeDate]));
    console.log(keyData);

    var fillStockHistory = stockHistory.map((x) => ({match: {id: x.name}}));
    return (
        <div style={{width: '950px', height: '400px'}}>
        <ResponsiveBar
        data={[
            {
              "country": "AD",
              "hot dog": 3,
              "hot dogColor": "hsl(236, 70%, 50%)",
              "burger": 144,
              "burgerColor": "hsl(327, 70%, 50%)",
              "sandwich": 175,
              "sandwichColor": "hsl(297, 70%, 50%)",
              "kebab": 3,
              "kebabColor": "hsl(305, 70%, 50%)",
              "fries": 121,
              "friesColor": "hsl(47, 70%, 50%)",
              "donut": 177,
              "donutColor": "hsl(112, 70%, 50%)"
            },
            {
              "country": "AE",
              "hot dog": 20,
              "hot dogColor": "hsl(218, 70%, 50%)",
              "burger": 92,
              "burgerColor": "hsl(178, 70%, 50%)",
              "sandwich": 119,
              "sandwichColor": "hsl(180, 70%, 50%)",
              "kebab": 174,
              "kebabColor": "hsl(248, 70%, 50%)",
              "fries": 168,
              "friesColor": "hsl(311, 70%, 50%)",
              "donut": 95,
              "donutColor": "hsl(212, 70%, 50%)"
            },
            {
              "country": "AF",
              "hot dog": 5,
              "hot dogColor": "hsl(214, 70%, 50%)",
              "burger": 87,
              "burgerColor": "hsl(51, 70%, 50%)",
              "sandwich": 77,
              "sandwichColor": "hsl(102, 70%, 50%)",
              "kebab": 104,
              "kebabColor": "hsl(50, 70%, 50%)",
              "fries": 6,
              "friesColor": "hsl(29, 70%, 50%)",
              "donut": 100,
              "donutColor": "hsl(202, 70%, 50%)"
            },
            {
              "country": "AG",
              "hot dog": 150,
              "hot dogColor": "hsl(77, 70%, 50%)",
              "burger": 112,
              "burgerColor": "hsl(50, 70%, 50%)",
              "sandwich": 116,
              "sandwichColor": "hsl(203, 70%, 50%)",
              "kebab": 68,
              "kebabColor": "hsl(281, 70%, 50%)",
              "fries": 94,
              "friesColor": "hsl(2, 70%, 50%)",
              "donut": 11,
              "donutColor": "hsl(124, 70%, 50%)"
            },
            {
              "country": "AI",
              "hot dog": 167,
              "hot dogColor": "hsl(108, 70%, 50%)",
              "burger": 120,
              "burgerColor": "hsl(250, 70%, 50%)",
              "sandwich": 0,
              "sandwichColor": "hsl(350, 70%, 50%)",
              "kebab": 79,
              "kebabColor": "hsl(138, 70%, 50%)",
              "fries": 183,
              "friesColor": "hsl(17, 70%, 50%)",
              "donut": 115,
              "donutColor": "hsl(124, 70%, 50%)"
            },
            {
              "country": "AL",
              "hot dog": 28,
              "hot dogColor": "hsl(332, 70%, 50%)",
              "burger": 142,
              "burgerColor": "hsl(66, 70%, 50%)",
              "sandwich": 79,
              "sandwichColor": "hsl(235, 70%, 50%)",
              "kebab": 105,
              "kebabColor": "hsl(99, 70%, 50%)",
              "fries": 163,
              "friesColor": "hsl(237, 70%, 50%)",
              "donut": 165,
              "donutColor": "hsl(305, 70%, 50%)"
            },
            {
              "country": "AM",
              "hot dog": 120,
              "hot dogColor": "hsl(312, 70%, 50%)",
              "burger": 34,
              "burgerColor": "hsl(163, 70%, 50%)",
              "sandwich": 118,
              "sandwichColor": "hsl(242, 70%, 50%)",
              "kebab": 67,
              "kebabColor": "hsl(202, 70%, 50%)",
              "fries": 74,
              "friesColor": "hsl(331, 70%, 50%)",
              "donut": 45,
              "donutColor": "hsl(142, 70%, 50%)"
            }
          ]}
        keys={keyData}
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
        fill={[
            {
                match: {
                    id: 'fries'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'sandwich'
                },
                id: 'lines'
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
                    }
                ]
            }
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in country: "+e.indexValue}}
    />
    </div>
    );
};
