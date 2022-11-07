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
              margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
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
              arcLinkLabelsSkipAngle={10}
              arcLinkLabelsTextColor="#333333"
              arcLinkLabelsThickness={2}
              arcLinkLabelsColor={{ from: 'color' }}
              arcLabelsSkipAngle={10}
              arcLabelsTextColor={{
                  from: 'color',
                  modifiers: [
                      [
                          'darker',
                          2
                      ]
                  ]
              }}
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
                      anchor: 'right',
                      direction: 'column',
                      justify: false,
                      translateX: 100,
                      translateY: 20,
                      itemsSpacing: 30,
                      itemWidth: 100,
                      itemHeight: 18,
                      itemTextColor: '#999',
                      itemDirection: 'left-to-right',
                      itemOpacity: '1, 4',
                      symbolSize: 15,
                      symbolShape: 'circle',
                      effects: [
                          {
                              on: 'hover',
                              style: {
                                  itemTextColor: '#000'
                              }
                          }
                      ]
                  }
              ]}
          />

        </div>
    );
}