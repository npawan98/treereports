import Sidebar from '../Common/SidebarComponent/Sidebar'
import './DashboardComponents.scss'
import { useState } from 'react'
import ReactApexChart from 'react-apexcharts';
import DonutChart from './Dashboard_donut/DonutChart';
function DashboardComponents({values}) {
    return (
        <div className="dashboard__component">
            <div className="dashboard__component--main">
                <div>
                    <DonutChart title="hello" values={[10,50]} labels={['hello','good']}/>
                </div>
            </div>
        </div>
    )
}

export default DashboardComponents
