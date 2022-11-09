import { ResponsiveLine } from '@nivo/line';

export default function InfoLineGraph() {
    let now = new Date();
    let minutes = now.getMinutes();

    return(
        <div style={{width: '90%', height: '400px'}}>
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
        // legends={[
        //     {
        //         anchor: 'bottom-right',
        //         direction: 'column',
        //         justify: false,
        //         translateX: 100,
        //         translateY: 0,
        //         itemsSpacing: 0,
        //         itemDirection: 'left-to-right',
        //         itemWidth: 80,
        //         itemHeight: 20,
        //         itemTextColor: '#999',
        //         itemOpacity: 0.75,
        //         symbolSize: 12,
        //         symbolShape: 'circle',
        //         symbolBorderColor: 'rgba(0, 0, 0, .5)',
        //         effects: [
        //             {
        //                 on: 'hover',
        //                 style: {
        //                     itemBackground: 'rgba(0, 0, 0, .03)',
        //                     itemOpacity: 1
        //                 }
        //             }
        //         ]
        //     }
        // ]}
    />
        </div>
    );
}