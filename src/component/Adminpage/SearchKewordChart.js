import ApexCharts from "react-apexcharts";
import styles from "./css/admin.module.css";

export default function SearchKewordChart() {
    var state = {
        options : {
            legend: {
                show: false
              },
              chart: {
                height: 350,
                type: 'treemap'
              },
              title: {
                text: 'Basic Treemap'
              }
          }
    }
    var keywordData = {
        series: [
            {
              data: [
                {
                  x: 'New Delhi',
                  y: 218
                },
                {
                  x: 'Kolkata',
                  y: 149
                },
                {
                  x: 'Mumbai',
                  y: 184
                },
                {
                  x: 'Ahmedabad',
                  y: 55
                },
                {
                  x: 'Bangaluru',
                  y: 84
                },
                {
                  x: 'Pune',
                  y: 31
                },
                {
                  x: 'Chennai',
                  y: 70
                },
                {
                  x: 'Jaipur',
                  y: 30
                },
                {
                  x: 'Surat',
                  y: 44
                },
                {
                  x: 'Hyderabad',
                  y: 68
                },
                {
                  x: 'Lucknow',
                  y: 28
                },
                {
                  x: 'Indore',
                  y: 19
                },
                {
                  x: 'Kanpur',
                  y: 29
                }
              ]
            }
          ]
    }
    return(
        <div className={styles.box}>
        <ApexCharts options={state.options} series={keywordData.series}  type="treemap" > </ApexCharts>
        </div>
    );    
};
