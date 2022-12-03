import ApexCharts from "react-apexcharts";
import styles from "./css/admin.module.css"

export default function TimesLoginChart() {
    var state = {
        options : {
            chart: {
            type: 'bar',
            height: 350,
            foreColor: "#ccc",
          },
          plotOptions: {
            bar: {
              borderRadius: 4,
              horizontal: true,
            }
          },
          dataLabels: {
            enabled: false
          },
          xaxis: {
            categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
              'United States', 'China', 'Germany'
            ],
          }
          }
    }
    var timesData = {
        series: [{
            data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
          }]
    }
    return(
        <div className={styles.box}>
        <ApexCharts options={state.options} series={timesData.series}  type="bar" > </ApexCharts>
        </div>
    );
};
