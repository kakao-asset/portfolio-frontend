import React, { Component } from "react";
import "./chart.css";
import ApexCharts from "react-apexcharts";
import { useState, useEffect } from "react";
import axios from "axios";

function LineChart(){

    var searchStock = localStorage.getItem('searchStock');
    const detailStock = JSON.parse(searchStock);
    const stockSymbolCode = detailStock.searchTarget.symbolCode;

    const[current, setCurrent] = useState([{tradePrice: 1000, datetime: '2022-11-2501:11:11'},{tradePrice: 2000, datetime: '2022-11-2601:12:11'}]);

      //window.alert(current.datetime)
    function getRealtimeData(){
      axios({
          method: "get",
          url: `/main/realtime/?stock_name=${stockSymbolCode}`,
          headers: {"Access-Control-Allow-Origin": "*"},
          responseEncoding: 'binary'
      })
      .then((res) => {
          setCurrent(res.data)
      }).catch((err) => {
          console.log("데이터 받아오기 에러", err);
      })
    }
  
    useEffect( () => {
        getRealtimeData();
        const interval = setInterval(()=>{
            getRealtimeData();
        }, 10000)
      },[stockSymbolCode])

    console.log(current);

    var chartData = current.map((data) => ([convertTime(data.datetime.substring(10,15)), data.tradePrice]));
    var tradeQuantityData =  current.map((data) => ([convertTime(data.datetime.substring(10,15)), data.accTradeVolume]));
    function convertTime(hhmm){
      return Number(hhmm.split(':')[0]) * 60 * 60 * 1000 + Number(hhmm.split(':')[1]) * 60 * 1000;
    }

    var state1 = {
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
        tickAmount: 1
      }
    }
    };
    
    var stockData1 =  {
      series: [
      {
        data: chartData
      }]
    }

    var stockData2 = {
      series: [
        {
          data: tradeQuantityData
        }]
      
    }

    var state2 = {
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
            // xaxis: {
            //   min: new Date().getTime(),
            //   max: new Date().getTime()
            // }
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
          data: chartData
        }
      ],
    };

  return (
    <div id="wrapper">
      {/* <div id="chart-area"></div> */}
      <ApexCharts options={state1.options} series={stockData1.series} type="area" width="1500" height="300" > </ApexCharts>
      <ApexCharts options={state2.options} series={stockData2.series} type="bar" width="1500" height="120" > </ApexCharts>
      {/* <div id="chart-bar"></div> */}
    </div>
  );
}

export default LineChart;