import { ResponsiveLine } from '@nivo/line';

export default function LineGraph() {
    let now = new Date();
    let minutes = now.getMinutes();

    return(
        <div style={{width: '950px', height: '400px'}}>
            <ResponsiveLine
        data={[
            {
              "id": "Naver",
              "color": "hsl(206, 70%, 50%)",
              "data": [
                {
                  "x": minutes-11,
                  "y": 35
                },
                {
                  "x": minutes-10,
                  "y": 131
                },
                {
                  "x": minutes-9,
                  "y": 299
                },
                {
                  "x": minutes-8,
                  "y": 130
                },
                {
                  "x": minutes-7,
                  "y": 87
                },
                {
                  "x": minutes-6,
                  "y": 242
                },
                {
                  "x": minutes-5,
                  "y": 131
                },
                {
                  "x": minutes-4,
                  "y": 164
                },
                {
                  "x": minutes-3,
                  "y": 30
                },
                {
                  "x": minutes-2,
                  "y": 139
                },
                {
                  "x": minutes-1,
                  "y": 288
                },
                {
                  "x": minutes,
                  "y": 227
                }
              ]
            },
            {
              "id": "Kakao",
              "color": "hsl(301, 70%, 50%)",
              "data": [
                {
                  "x": minutes-11,
                  "y": 111
                },
                {
                  "x": minutes-10,
                  "y": 176
                },
                {
                  "x": minutes-9,
                  "y": 155
                },
                {
                  "x": minutes-8,
                  "y": 264
                },
                {
                  "x": minutes-7,
                  "y": 6
                },
                {
                  "x": minutes-6,
                  "y": 226
                },
                {
                  "x": minutes-5,
                  "y": 43
                },
                {
                  "x": minutes-4,
                  "y": 32
                },
                {
                  "x": minutes-3,
                  "y": 134
                },
                {
                  "x": minutes-2,
                  "y": 243
                },
                {
                  "x": minutes-1,
                  "y": 260
                },
                {
                  "x": minutes,
                  "y": 258
                }
              ]
            },
            {
              "id": "Samsung",
              "color": "hsl(2, 70%, 50%)",
              "data": [
                {
                  "x": minutes-11,
                  "y": 291
                },
                {
                  "x": minutes-10,
                  "y": 199
                },
                {
                  "x": minutes-9,
                  "y": 109
                },
                {
                  "x": minutes-8,
                  "y": 199
                },
                {
                  "x": minutes-7,
                  "y": 237
                },
                {
                  "x": minutes-6,
                  "y": 45
                },
                {
                  "x": minutes-5,
                  "y": 263
                },
                {
                  "x": minutes-4,
                  "y": 157
                },
                {
                  "x": minutes-3,
                  "y": 6
                },
                {
                  "x": minutes-2,
                  "y": 140
                },
                {
                  "x": minutes-1,
                  "y": 212
                },
                {
                  "x": minutes,
                  "y": 31
                }
              ]
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
        colors={['#458542','#F2C94C','#1D4ED8']}
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
                itemTextColor: '#999',
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