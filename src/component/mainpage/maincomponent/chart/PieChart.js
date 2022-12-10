import { ResponsivePie } from '@nivo/pie'

export default function PieChart({stockHold}){

    var stockData = stockHold.map((x) => ({id: x.name, label:[x.name+"\t"+"\t", x.value+"주"], value: x.value*x.avgPrice, price: x.avgPrice}));

    var fillStock = stockHold.map((x) => ({match: {id: x.name}}));

    var chartColor = ["#d9ed92","#b5e48c","#99d98c","#76c893","#52b69a","#34a0a4","#168aad","#1a759f",
    "#1e6091","#184e77"];

    return (

        <div style={{width: '600px', height: '400px'}}>
            <ResponsivePie
              data = {stockData}
              margin={{ top: 40, left: 20, right: 230, bottom: 80,  }}
              innerRadius={0.5}
              padAngle={0.7}
              cornerRadius={0}
              colors={chartColor}
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