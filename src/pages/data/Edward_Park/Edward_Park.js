import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom"
import SubBanner from "../../../Components/Common/BannerImage/SubBanner/SubBanner"
import EdwardTable from "../../../Components/Common/MUI-table/EdwardPark/EdwardTable"
import DonutChart from "../../../Components/DashbaordComponents/Dashboard_donut/DonutChart"

function Edward_Park() {

    const [EdwardEvergreen, setEdwardEvergreen] = useState([]);
    const [EdwardDeciduous, setEdwardDeciduous] = useState([]);
    const [EdwardEndemic, setEdwardEndemic] = useState([]);
    const [EdwardIndigenous, setEdwardIndigenous] = useState([]);
    const [EdwardExotic, setEdwardExotic] = useState([]);
    const [EdwardEndangered, setEdwardEndangered] = useState([]);
  
    const arrEdward = [];

    useEffect(()=>{
        axios.get("https://afternoon-mountain-93761.herokuapp.com/edward_park_Evergreen").then((res) => {
        console.log(res.data.length);
        setEdwardEvergreen([res.data.length]);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/edward_park_Deciduous").then((res) => {
        console.log(res.data.length);
        setEdwardDeciduous(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/edward_park_Endemic").then((res) => {
        console.log(res.data.length);
        setEdwardEndemic(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/edward_park_Indigenous").then((res) => {
        console.log(res.data.length);
        setEdwardIndigenous(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/edward_park_Exotic").then((res) => {
        console.log(res.data.length);
        setEdwardExotic(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/edward_park_Endangered").then((res) => {
        console.log(res.data.length);
        setEdwardEndangered(res.data.length);
        });
    },[])

    arrEdward.push(
        parseInt(EdwardEvergreen),
        parseInt(EdwardDeciduous),
        parseInt(EdwardEndemic),
        parseInt(EdwardIndigenous),
        parseInt(EdwardExotic),
        parseInt(EdwardEndangered)
      );

    return (
        <div className="Dog__Park">
            <SubBanner Title="Generate report" subTitle="Edward Park" imgURL="https://images.unsplash.com/photo-1605138090832-672d54ff023f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2209&q=80"/>
        
            <div className="Dog__Park-main" style={{display:'flex',placeItems:'center'}}>
            <DonutChart
                title="Edward Park"
                values={arrEdward}
                labels={[
                "Evergreen",
                "Deciduous",
                "Endemic",
                "Indigenous",
                "Exotic",
                "Endangered",
                ]}
            />
                <EdwardTable/>
            </div>
        
        
        </div>
    )
}

export default Edward_Park
