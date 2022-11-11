import { ResponsivePie } from '@nivo/pie'

export default function PieChart(){
          
    return (

        <div style={{width: '600px', height: '400px'}}>
            <ResponsivePie
              data={[
                {
                  "id": "Naver",
                  "label": "Naver",
                  "value": 450,
                  "price": 45000,
                },
                {
                  "id": "Kakao",
                  "label": "Kakao",
                  "value": 450,
                  "price": 50000,
                },
                {
                  "id": "Samsung",
                  "label": "Samsung",
                  "value": 450,
                  "price": 90000,
                },
              ]}
              margin={{ top: 40, left: 20, right: 230, bottom: 80,  }}
              innerRadius={0.5}
              padAngle={0.7}
              cornerRadius={0}
              colors={['#458542','#F2C94C','#1D4ED8']}
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
              fill={[
                  {
                      match: {
                          id: 'Naver'
                      },

                  },
                  {
                      match: {
                          id: 'Kakao'
                      },

                  },
                  {
                      match: {
                          id: 'Samsung'
                      },

                  },
              ]}
              legends={[

                  {    
                      anchor: 'bottom',
                      direction: 'row',
                      justify: false,
                      translateX: 20,
                      translateY: 70,
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