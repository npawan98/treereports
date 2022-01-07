import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom"
import SubBanner from "../../../Components/Common/BannerImage/SubBanner/SubBanner"
import RoseTable from "../../../Components/Common/MUI-table/rosePark/roseTable"
import DonutChart from "../../../Components/DashbaordComponents/Dashboard_donut/DonutChart"

function Rose_Park() {

    const [roseEvergreen, setRoseEvergreen] = useState([]);
    const [roseDeciduous, setRoseDeciduous] = useState([]);
    const [roseEndemic, setRoseEndemic] = useState([]);
    const [roseIndigenous, setRoseIndigenous] = useState([]);
    const [roseExotic, setRoseExotic] = useState([]);
    const [roseEndangered, setRoseEndangered] = useState([]);
  
    const arrRose = [];

    useEffect(()=>{
        axios.get("http://localhost:8081/roseEvergreen").then((res) => {
        console.log(res.data.length);
        setRoseEvergreen([res.data.length]);
        });
        axios.get("http://localhost:8081/roseDeciduous").then((res) => {
        console.log(res.data.length);
        setRoseDeciduous(res.data.length);
        });
        axios.get("http://localhost:8081/roseEndemic").then((res) => {
        console.log(res.data.length);
        setRoseEndemic(res.data.length);
        });
        axios.get("http://localhost:8081/roseIndigenous").then((res) => {
        console.log(res.data.length);
        setRoseIndigenous(res.data.length);
        });
        axios.get("http://localhost:8081/roseExotic").then((res) => {
        console.log(res.data.length);
        setRoseExotic(res.data.length);
        });
        axios.get("http://localhost:8081/roseEndangered").then((res) => {
        console.log(res.data.length);
        setRoseEndangered(res.data.length);
        });
    },[])

    arrRose.push(
        parseInt(roseEvergreen),
        parseInt(roseDeciduous),
        parseInt(roseEndemic),
        parseInt(roseIndigenous),
        parseInt(roseExotic),
        parseInt(roseEndangered)
      );

    return (
        <div className="Dog__Park">
            <SubBanner Title="Generate report" subTitle="Rose Park" imgURL="https://images.unsplash.com/photo-1635886840360-a2d27a5826d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"/>
        
            <div className="Dog__Park-main" style={{display:'flex',placeItems:'center'}}>
            <DonutChart
                title="Rose Park"
                values={arrRose}
                labels={[
                "Evergreen",
                "Deciduous",
                "Endemic",
                "Indigenous",
                "Exotic",
                "Endangered",
                ]}
            />
                <RoseTable/>
            </div>
        
        
        </div>
    )
}

export default Rose_Park
