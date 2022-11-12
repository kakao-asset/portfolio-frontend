import { ResponsivePie } from '@nivo/pie'
import { VscHorizontalRule } from 'react-icons/vsc';

export default function PieChart({stockHold}){

    // 넘어온 stockHold -> PieChart 에 넣을 data로 가공
    // id : stockHold.name
    // label : [ "stockHold.name", " stockHold.value"]
    // value : stockHold.value
    // console.log(stockHold);
    // var stockData = stockHold.map((name, value, avgPrice) => ({name: name, value: value, avgPrice: avgPrice}))
    // const obj = JSON.parse(stockHold);
    // console.log(obj)


    var stockData = stockHold.map((x) => ({id: x.name, label:[x.name+"\t"+"\t", x.value+"주"], value: x.value, price: x.avgPrice}));
    // console.log(stockData);
    

    var fillStock = stockHold.map((x) => ({match: {id: x.name}}));


    return (

        <div style={{width: '600px', height: '400px'}}>
            <ResponsivePie
              data = {stockData}
              margin={{ top: 40, left: 20, right: 230, bottom: 80,  }}
              innerRadius={0.5}
              padAngle={0.7}
              cornerRadius={0}
              colors={{scheme: 'nivo'}}
              activeOuterRadiusOffset={8}
              borderWidth={1}
              borderColor={{
                  from: 'color',
                  modifiers: [
                      [
                          'darker',
                          0.2
                      ]
                  ]
              }}
              enableArcLinkLabels={false}
              fill={fillStock}
              legends={[

                  {    
                      anchor: 'right',
                      direction: 'column',
                      justify: false,
                      translateX: 90,
                      translateY: 10,
                      itemsSpacing: 10,
                      itemWidth: 80,
                      itemHeight: 18,
                      itemTextColor: '#999',
                      itemDirection: 'left-to-right',
                      itemOpacity: '1',
                      symbolSize: 15,
                      symbolShape: 'circle',
                      effects: [
                          {
                              on: 'hover',
                              style: {
                                  itemTextColor: '#FFF'
                              }
                          }
                      ]
                  }
              ]}
          />

        </div>
    );
}