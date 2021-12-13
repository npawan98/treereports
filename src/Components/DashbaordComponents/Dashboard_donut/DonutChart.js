import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import styles from './DonutChart.module.css';

function DonutChart({title,values,labels}) {

    const [series,setSeries] = useState(values);
    const [options,setOptions] = useState({
        chart: {
          type: 'donut',
          toolbar:{
            show: true,
            tools:{
              download: true,
            },
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
                    <ReactApexChart options={options} series={series} type="donut" />
            </div>
        </div>
    )
}

export default DonutChart
