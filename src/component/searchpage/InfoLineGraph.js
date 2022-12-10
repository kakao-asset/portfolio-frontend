import { ResponsiveLine } from '@nivo/line';
import { useState, useEffect } from "react";
import axios from "axios";

export default function InfoLineGraph() {

    var searchStock = localStorage.getItem('searchStock');
    const detailStock = JSON.parse(searchStock);

    const stockSymbolCode = detailStock.searchTarget.symbolCode;

    const [current, setCurrent] = useState([{ tradePrice: -5, datetime: '2022-11-1101:11:11' }, { tradePrice: -5, datetime: '2022-11-1101:11:11' }]);

    function getRealtimeData() {
        axios({
            method: "get",
            url: `/main/realtime/?stock_name=${stockSymbolCode}`,
            headers: { "Access-Control-Allow-Origin": "*" },
            responseEncoding: 'binary'
        })
            .then((res) => {
                setCurrent(res.data)
            }).catch((err) => {
            })
    }

    useEffect(() => {
        getRealtimeData();
        const interval = setInterval(() => {
            getRealtimeData();
        }, 50000)
    }, [stockSymbolCode])

    var chartData = current.map((data) => ({ y: data.tradePrice, x: data.datetime.slice(10, 15) }));

    let now = new Date();
    let minutes = now.getMinutes();

    return (
        <div style={{ width: '90%', height: '400px' }}>
            <ResponsiveLine
                data={[
                    {
                        "id": "Naver",
                        "color": "hsl(206, 70%, 50%)",
                        "data": chartData
                    },

                ]}
                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                xScale={{ type: 'point' }}
                yScale={{
                    type: 'linear',
                    min: 'auto',
                    max: 'auto',
                    stacked: true,
                    reverse: false
                }}
                yFormat=" >-.2f"
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    orient: 'bottom',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Profit and Loss Timeline',
                    legendOffset: 36,
                    legendPosition: 'middle'
                }}
                axisLeft={{
                    orient: 'left',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'count',
                    legendOffset: -40,
                    legendPosition: 'middle',
                }}
                colors={['#FF5981']}
                enableGridX={false}
                enableGridY={false}
                pointSize={1}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabelYOffset={-12}
                useMesh={true}
            />
        </div>
    );
}