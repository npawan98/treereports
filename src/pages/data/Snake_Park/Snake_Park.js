import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom"
import SubBanner from "../../../Components/Common/BannerImage/SubBanner/SubBanner"
import SnakeTable from "../../../Components/Common/MUI-table/SnakePark/SnakeTable"
import DonutChart from "../../../Components/DashbaordComponents/Dashboard_donut/DonutChart"

function Snake_Park() {

    const [SnakeEvergreen, setSnakeEvergreen] = useState([]);
    const [SnakeDeciduous, setSnakeDeciduous] = useState([]);
    const [SnakeEndemic, setSnakeEndemic] = useState([]);
    const [SnakeIndigenous, setSnakeIndigenous] = useState([]);
    const [SnakeExotic, setSnakeExotic] = useState([]);
    const [SnakeEndangered, setSnakeEndangered] = useState([]);
  
    const arrSnake = [];

    useEffect(()=>{
        axios.get("https://afternoon-mountain-93761.herokuapp.com/SnakeEvergreen").then((res) => {
        console.log(res.data.length);
        setSnakeEvergreen([res.data.length]);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/SnakeDeciduous").then((res) => {
        console.log(res.data.length);
        setSnakeDeciduous(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/SnakeEndemic").then((res) => {
        console.log(res.data.length);
        setSnakeEndemic(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/SnakeIndigenous").then((res) => {
        console.log(res.data.length);
        setSnakeIndigenous(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/SnakeExotic").then((res) => {
        console.log(res.data.length);
        setSnakeExotic(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/SnakeEndangered").then((res) => {
        console.log(res.data.length);
        setSnakeEndangered(res.data.length);
        });
    },[])

    arrSnake.push(
        parseInt(SnakeEvergreen),
        parseInt(SnakeDeciduous),
        parseInt(SnakeEndemic),
        parseInt(SnakeIndigenous),
        parseInt(SnakeExotic),
        parseInt(SnakeEndangered)
      );

    return (
        <div className="Dog__Park">
            <SubBanner Title="Generate report" subTitle="Snake Park" imgURL="https://images.unsplash.com/photo-1605138090832-672d54ff023f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2209&q=80"/>
        
            <div className="Dog__Park-main" style={{display:'flex',placeItems:'center'}}>
            <DonutChart
                title="Snake Park"
                values={arrSnake}
                labels={[
                "Evergreen",
                "Deciduous",
                "Endemic",
                "Indigenous",
                "Exotic",
                "Endangered",
                ]}
            />
                <SnakeTable/>
            </div>
        
        
        </div>
    )
}

export default Snake_Park
