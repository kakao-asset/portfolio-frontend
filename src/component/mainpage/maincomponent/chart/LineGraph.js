import { ResponsiveLine } from '@nivo/line';
import React, { useCallback,useState, useEffect } from "react";


export default function LineGraph({profit}) {

  const [,updateState] = useState()
  const forceUpdate = useCallback(()=> updateState({}), []);
  const [data, setData] = useState([]);
  const [realData, setRealData] = useState([]);

  useEffect(()=>{
      forceUpdate()
      setInterval(()=>{
          forceUpdate()
          makeData();
      },1000)
  },[])



    let now = new Date();
    let minutes = now.getMinutes();

    function makeData(){
      var min = Infinity;
      Object.keys(profit).forEach(key=>{
        if (min > profit[key].length){
          min = profit[key].length;
        }
      });

      min = Math.min(min, 390);

      var today = new Date()
      Object.keys(profit).forEach(key=>{
        today.setHours(9)
        today.setMinutes(0)
        today.setSeconds(0)
        var stock = profit[key];
        var temp =[]
        for (var i = 0; i < min; i++){
          temp[temp.length] = {
            "x" : ('0'+ today.getHours()).slice(-2) +":" + ('0'+ today.getMinutes()).slice(-2),
            "y" : stock[i]['tradePrice']
            // stock[i]['change'] === "RISE" ? stock[i]['changeRate'] : -stock[i]['changeRate']
          }
          today.setMinutes(today.getMinutes()+1)
        }
        var updateData = {
          [key]:{
          "id" : key,
          "color": "hsl(206, 70%, 50%)",
          "data" : temp
        }
        }
        var target = Object.assign(data, updateData)
        setData(target)
      })
    }

    
    return(
        <div style={{width: '950px', height: '400px'}}>
            <ResponsiveLine
        data={Object.values(data)}
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
            legendPosition: 'middle',
            itemTextColor:"white"
        }}
        axisLeft={{
            color: 'white',
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle',
        }}
        colors={{"scheme": "category10"}}
        enableGridX={false}
        enableGridY={false}
        pointSize={1}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemTextColor: '#FFFFFF',
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
        </div>
    );
}