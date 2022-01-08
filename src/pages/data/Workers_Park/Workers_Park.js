import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom"
import SubBanner from "../../../Components/Common/BannerImage/SubBanner/SubBanner"
import WorkersTable from "../../../Components/Common/MUI-table/WorkersPark/WorkersTable"
import DonutChart from "../../../Components/DashbaordComponents/Dashboard_donut/DonutChart"

function Workers_Park() {

    const [WorkersEvergreen, setWorkersEvergreen] = useState([]);
    const [WorkersDeciduous, setWorkersDeciduous] = useState([]);
    const [WorkersEndemic, setWorkersEndemic] = useState([]);
    const [WorkersIndigenous, setWorkersIndigenous] = useState([]);
    const [WorkersExotic, setWorkersExotic] = useState([]);
    const [WorkersEndangered, setWorkersEndangered] = useState([]);
  
    const arrWorkers = [];

    useEffect(()=>{
        axios.get("https://afternoon-mountain-93761.herokuapp.com/WorkersEvergreen").then((res) => {
        console.log(res.data.length);
        setWorkersEvergreen([res.data.length]);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/WorkersDeciduous").then((res) => {
        console.log(res.data.length);
        setWorkersDeciduous(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/WorkersEndemic").then((res) => {
        console.log(res.data.length);
        setWorkersEndemic(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/WorkersIndigenous").then((res) => {
        console.log(res.data.length);
        setWorkersIndigenous(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/WorkersExotic").then((res) => {
        console.log(res.data.length);
        setWorkersExotic(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/WorkersEndangered").then((res) => {
        console.log(res.data.length);
        setWorkersEndangered(res.data.length);
        });
    },[])

    arrWorkers.push(
        parseInt(WorkersEvergreen),
        parseInt(WorkersDeciduous),
        parseInt(WorkersEndemic),
        parseInt(WorkersIndigenous),
        parseInt(WorkersExotic),
        parseInt(WorkersEndangered)
      );

    return (
        <div className="Dog__Park">
            <SubBanner Title="Generate report" subTitle="Workers Park" imgURL="https://images.unsplash.com/photo-1605138090832-672d54ff023f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2209&q=80"/>
        
            <div className="Dog__Park-main" style={{display:'flex',placeItems:'center'}}>
            <DonutChart
                title="Workers Park"
                values={arrWorkers}
                labels={[
                "Evergreen",
                "Deciduous",
                "Endemic",
                "Indigenous",
                "Exotic",
                "Endangered",
                ]}
            />
                <WorkersTable/>
            </div>
        
        
        </div>
    )
}

export default Workers_Park
