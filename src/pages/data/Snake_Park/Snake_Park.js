import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import SubBanner from "../../../Components/Common/BannerImage/SubBanner/SubBanner"
import SnakeTable from "../../../Components/Common/MUI-table/SnakePark/SnakeTable"
import DonutChart from "../../../Components/DashbaordComponents/Dashboard_donut/DonutChart";

function Snake_Park() {

    const [SnakeData, setSnakeData] = useState([]);
    const [SnakeEvergreen, setSnakeEvergreen] = useState([]);
    const [SnakeDeciduous, setSnakeDeciduous] = useState([]);
    const [SnakeEndemic, setSnakeEndemic] = useState([]);
    const [SnakeIndigenous, setSnakeIndigenous] = useState([]);
    const [SnakeExotic, setSnakeExotic] = useState([]);
    const [SnakeEndangered, setSnakeEndangered] = useState([]);

    const arrSnake = [];

    const [SnakeEvergreenPhenology, setSnakeEvergreenPhenology] = useState([]);
    const [SnakeDeciduousPhenology, setSnakeDeciduousPhenology] = useState([]);

    const arrSnakePhenology = [];

    useEffect(() => {
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


        axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/SnakeEvergreen").then((res) => {
          console.log(res.data.length);
          setSnakeEvergreenPhenology([res.data.length]);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/SnakeDeciduous").then((res) => {
          console.log(res.data.length);
          setSnakeDeciduousPhenology(res.data.length);
        });
    },[]);


    arrSnake.push(
        parseInt(SnakeEvergreen),
        parseInt(SnakeDeciduous),
        parseInt(SnakeEndemic),
        parseInt(SnakeIndigenous),
        parseInt(SnakeExotic),
        parseInt(SnakeEndangered)
      );

      arrSnakePhenology.push(
        parseInt(SnakeEvergreenPhenology),
        parseInt(SnakeDeciduousPhenology),

      )


    return (
        <div className="Snake__Park">
            <SubBanner Title="Generate report" subTitle="Snake Park" imgURL="https://images.unsplash.com/photo-1635886840360-a2d27a5826d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"/>
        
            <div className="Snake__Park-main" style={{display:'flex',placeItems:'center',justifyContent:"space-around"}}>
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
            <DonutChart
                title="Snake Park (Phenology)"
                values={arrSnakePhenology}
                labels={[
                "Evergreen",
                "Deciduous",
                "Endemic",
                "Indigenous",
                "Exotic",
                "Endangered",
                ]}
            />

            </div>
            < div style={{display: 'grid',placeItems:'center'}}>
                <SnakeTable/>
            </div>
        
        
        </div>
    )
}

export default Snake_Park
