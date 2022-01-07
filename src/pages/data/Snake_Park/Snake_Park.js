import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import SubBanner from "../../../Components/Common/BannerImage/SubBanner/SubBanner"
import SnakeTable from "../../../Components/Common/MUI-table/snakePark/SnakeTable"
import DonutChart from "../../../Components/DashbaordComponents/Dashboard_donut/DonutChart";

function Snake_Park() {

    const [snakeEvergreen, setSnakeEvergreen] = useState([]);
    const [snakeDeciduous, setSnakeDeciduous] = useState([]);
    const [snakeEndemic, setSnakeEndemic] = useState([]);
    const [snakeIndigenous, setSnakeIndigenous] = useState([]);
    const [snakeExotic, setSnakeExotic] = useState([]);
    const [snakeEndangered, setSnakeEndangered] = useState([]);

    const arrSnake = [];

    useEffect(() => {
        axios.get("https://afternoon-mountain-93761.herokuapp.com/snakeEvergreen").then((res) => {
        console.log(res.data.length);
        setSnakeEvergreen([res.data.length]);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/snakeDeciduous").then((res) => {
        console.log(res.data.length);
        setSnakeDeciduous(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/snakeEndemic").then((res) => {
        console.log(res.data.length);
        setSnakeEndemic(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/snakeIndigenous").then((res) => {
        console.log(res.data.length);
        setSnakeIndigenous(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/snakeExotic").then((res) => {
        console.log(res.data.length);
        setSnakeExotic(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/snakeEndangered").then((res) => {
        console.log(res.data.length);
        setSnakeEndangered(res.data.length);
        });
    }, [])

    arrSnake.push(
        parseInt(snakeEvergreen),
        parseInt(snakeDeciduous),
        parseInt(snakeEndemic),
        parseInt(snakeIndigenous),
        parseInt(snakeExotic),
        parseInt(snakeEndangered)
      );

    return (
        <div className="Dog__Park">
            <SubBanner Title="Generate report" subTitle="Snake Park" imgURL="https://images.unsplash.com/photo-1635886840360-a2d27a5826d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"/>
        
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
