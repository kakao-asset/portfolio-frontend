import { ResponsiveBar } from '@nivo/bar';
import { useState, useEffect } from 'react';
import axios from 'axios';
import NodataRow from '../row/NodataRow';


export default function BarChart({ stockHold }) {

    const [stockTrend, setStockTrend] = useState([]);
    const [stockMenu, setStockMenu] = useState([]);
    var resData = [];
    var userId = JSON.parse(localStorage.getItem("userData")).userId;

    var indexData = [];

    var chartColor = ["#d9ed92", "#b5e48c", "#99d98c", "#76c893", "#52b69a", "#34a0a4", "#168aad", "#1a759f",
        "#1e6091", "#184e77"];

    var keyResult = [];


    var resultData = [];


    const getStockTrend = async () => await axios({
        method: "GET",
        url: `/api/stock/trend/${userId}`
    })
        .then((res) => {
            resData = res.data.data;
            var keyData = [];

            var temp = new Map();
            var objs = [];

            for (var i = 0; i < resData.length; i++) {
                indexData.push(resData[i].date);

                if (resData[i].trendDataList.length > 0) {
                    for (var j = 0; j < resData[i].trendDataList.length; j++) {
                        keyData.push(resData[i].trendDataList[j].stockName);

                    }
                }
            }

            keyResult = [...new Set(keyData)]; // key 데이터 (보유 주식 종목명)

            for (var i = 0; i < resData.length; i++) {
                var obj = [];
                obj.push({ "date": resData[i].date });
                for (var j = 0; j < resData[i].trendDataList.length; j++) {
                    obj.push({ [resData[i].trendDataList[j].stockName]: resData[i].trendDataList[j].quantity });
                }
                objs.push(obj);
            }

            for (var i = 0; i < objs.length; i++) {

                var temp = objs[i];
                var tttt = {};

                for (var j = 0; j < temp.length; j++) {

                    tttt = Object.assign(tttt, temp[j])
                }

                resultData.push(tttt)

            }


            setStockTrend(resultData);
            setStockMenu(keyResult);


        }).catch((err) => {

        })

    useEffect(() => {
        getStockTrend();
    }, []);


    return (
        <div style={{ width: '950px', height: '400px' }}>
            {stockTrend.length == 0 ?
                <NodataRow></NodataRow> :
                <ResponsiveBar
                    data={stockTrend}
                    keys={stockMenu}
                    indexBy="date"
                    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                    padding={0.3}
                    valueScale={{ type: 'linear' }}
                    indexScale={{ type: 'band', round: true }}
                    colors={chartColor}
                    theme={{
                        axis: {
                            ticks: {
                                text: {
                                    fill: '#FFF'
                                }
                            },
                            legend: {
                                text: {
                                    fill: '#FFF'
                                }
                            }
                        }
                    }}
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
                        legend: '일자별 자산 보유 현황',
                        legendPosition: 'middle',
                        legendOffset: 40,

                    }}
                    axisLeft={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: '보유 주식 종목',
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
                    tooltip={({ id, value, color }) => (
                        <div
                            style={{
                                padding: 12,
                                color,
                                background: '#222222',
                            }}
                        >
                            <strong>
                                {id}: {value}주
                            </strong>
                        </div>
                    )}
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
                    barAriaLabel={function (e) { return e.id + ": " + e.formattedValue + " in date: " + e.indexValue }}
                />}
        </div>
    );
};
