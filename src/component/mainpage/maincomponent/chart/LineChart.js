import React, { Component } from "react";
import "./chart.css";
import ApexCharts from "react-apexcharts";

class LineChart extends Component {
  constructor(props) {
    super(props);

    var data = generateDayWiseTimeSeries(new Date("22 Apr 2017").getTime(), 115, {
      min: 30,
      max: 90
    });

    this.state = {
    options: { 
        chart: {
        id: "chart2",
        type: "area",
        height: 230,
        foreColor: "#ccc",
        toolbar: {
          autoSelected: "pan",
          show: false
        }
      },
      colors: ["#00BAEC"],
      stroke: {
        width: 3
      },
      grid: {
        borderColor: "#555",
        clipMarkers: false,
        yaxis: {
          lines: {
            show: false
          }
        }
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        gradient: {
          enabled: true,
          opacityFrom: 0.55,
          opacityTo: 0
        }
      },
      markers: {
        size: 1,
        colors: ["#000524"],
        strokeColor: "#00BAEC",
        strokeWidth: 3
      },
      tooltip: {
        theme: "dark"
      },
      xaxis: {
        type: "datetime"
      },
      yaxis: {
        min: 0,
        tickAmount: 4
      }
    },
    series: [
      {
        data: data
      }
    ],
    };
    
    //var chart1 = new ApexCharts(document.querySelector("#chart-area"), options1);
    //chart1.render();
    
    this.state2 = {
      options: {
        chart: {
          id: "chart1",
          height: 130,
          type: "bar",
          foreColor: "#ccc",
          brush: {
            target: "chart2",
            enabled: true
          },
          selection: {
            enabled: true,
            fill: {
              color: "#fff",
              opacity: 0.4
            },
            xaxis: {
              min: new Date("27 Jul 2017 10:00:00").getTime(),
              max: new Date("14 Aug 2017 10:00:00").getTime()
            }
          }
        },
        colors: ["#FF0080"],
        stroke: {
          width: 2
        },
        grid: {
          borderColor: "#444"
        },
        markers: {
          size: 0
        },
        xaxis: {
          type: "datetime",
          tooltip: {
            enabled: false
          }
        },
        yaxis: {
          tickAmount: 2
        }
      },
      series: [
        {
          data: data
        }
      ],
    };
    
    //var chart2 = new ApexCharts(document.querySelector("#chart-bar"), options2);
    //chart2.render();
    
    function generateDayWiseTimeSeries(baseval, count, yrange) {
      var i = 0;
      var series = [];
      while (i < count) {
        var x = baseval;
        var y =
          Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    
        series.push([x, y]);
        baseval += 86400000;
        i++;
      }
      return series;
    }
  }

    render() {
      return (
        <div id="wrapper">
          {/* <div id="chart-area"></div> */}
          <ApexCharts options={this.state.options} series={this.state.series} type="area" width="1500" height="300" > </ApexCharts>
          <ApexCharts options={this.state2.options} series={this.state2.series} type="bar" width="1500" height="120" > </ApexCharts>
          {/* <div id="chart-bar"></div> */}
        </div>
      );
    }
}

export default LineChart;