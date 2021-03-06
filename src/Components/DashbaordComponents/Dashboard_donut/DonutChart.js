import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import styles from './DonutChart.module.css';

function DonutChart({title,values,labels}) {

    // const [series,setSeries] = useState(values);
    const [options,setOptions] = useState({
        chart: {
          type: 'donut',
          toolbar:{
            show: true,
            tools:{
              download: true,
            },
            export:{
              csv:{
                filename: title,
                columnDelimiter: ',',
                headerCategory: 'category',
                headerValue: 'value',
                dateFormatter(timestamp) {
                  return new Date(timestamp).toDateString()
                }
              }
            }
        }},
        title:{
            text: title
        },
        dataLabels: {
            enabled: true
          },
          labels: labels,
          
        });

    return (
        <div>
            <div id="chart" className={styles.dountChart__component}>
                    <ReactApexChart options={options} series={values} type="donut" />
            </div>
        </div>
    )
}

export default DonutChart
