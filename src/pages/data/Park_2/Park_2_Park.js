import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom"
import SubBanner from "../../../Components/Common/BannerImage/SubBanner/SubBanner"
import Park_2Table from "../../../Components/Common/MUI-table/Park_2Park/Park_2Table";
import DonutChart from "../../../Components/DashbaordComponents/Dashboard_donut/DonutChart"

function Park_2_Park() {

    const [Park_2Evergreen, setPark_2Evergreen] = useState([]);
    const [Park_2Deciduous, setPark_2Deciduous] = useState([]);
    const [Park_2Endemic, setPark_2Endemic] = useState([]);
    const [Park_2Indigenous, setPark_2Indigenous] = useState([]);
    const [Park_2Exotic, setPark_2Exotic] = useState([]);
    const [Park_2Endangered, setPark_2Endangered] = useState([]);
  
    const arrPark_2 = [];

    useEffect(()=>{
        axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_2Evergreen").then((res) => {
        console.log(res.data.length);
        setPark_2Evergreen([res.data.length]);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_2Deciduous").then((res) => {
        console.log(res.data.length);
        setPark_2Deciduous(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_2Endemic").then((res) => {
        console.log(res.data.length);
        setPark_2Endemic(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_2Indigenous").then((res) => {
        console.log(res.data.length);
        setPark_2Indigenous(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_2Exotic").then((res) => {
        console.log(res.data.length);
        setPark_2Exotic(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_2Endangered").then((res) => {
        console.log(res.data.length);
        setPark_2Endangered(res.data.length);
        });
    },[])

    arrPark_2.push(
        parseInt(Park_2Evergreen),
        parseInt(Park_2Deciduous),
        parseInt(Park_2Endemic),
        parseInt(Park_2Indigenous),
        parseInt(Park_2Exotic),
        parseInt(Park_2Endangered)
      );

    return (
        <div className="Dog__Park">
            <SubBanner Title="Generate report" subTitle="Park_2 Park" imgURL="https://images.unsplash.com/photo-1605138090832-672d54ff023f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2209&q=80"/>
        
            <div className="Dog__Park-main" style={{display:'flex',placeItems:'center'}}>
            <DonutChart
                title="Park_2 Park"
                values={arrPark_2}
                labels={[
                "Evergreen",
                "Deciduous",
                "Endemic",
                "Indigenous",
                "Exotic",
                "Endangered",
                ]}
            />
                <Park_2Table/>
            </div>
        
        
        </div>
    )
}

export default Park_2_Park
