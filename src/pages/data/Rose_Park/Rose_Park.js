import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import SubBanner from "../../../Components/Common/BannerImage/SubBanner/SubBanner"
import RoseTable from "../../../Components/Common/MUI-table/RosePark/RoseTable"
import DonutChart from "../../../Components/DashbaordComponents/Dashboard_donut/DonutChart";

function Rose_Park() {

    const [RoseData, setRoseData] = useState([]);
    const [RoseEvergreen, setRoseEvergreen] = useState([]);
    const [RoseDeciduous, setRoseDeciduous] = useState([]);
    const [RoseEndemic, setRoseEndemic] = useState([]);
    const [RoseIndigenous, setRoseIndigenous] = useState([]);
    const [RoseExotic, setRoseExotic] = useState([]);
    const [RoseEndangered, setRoseEndangered] = useState([]);

    const arrRose = [];

    const [RoseEvergreenPhenology, setRoseEvergreenPhenology] = useState([]);
    const [RoseDeciduousPhenology, setRoseDeciduousPhenology] = useState([]);

    const arrRosePhenology = [];

    useEffect(() => {
        axios.get("https://afternoon-mountain-93761.herokuapp.com/RoseEvergreen").then((res) => {
          console.log(res.data.length);
          setRoseEvergreen([res.data.length]);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/RoseDeciduous").then((res) => {
          console.log(res.data.length);
          setRoseDeciduous(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/RoseEndemic").then((res) => {
          console.log(res.data.length);
          setRoseEndemic(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/RoseIndigenous").then((res) => {
          console.log(res.data.length);
          setRoseIndigenous(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/RoseExotic").then((res) => {
          console.log(res.data.length);
          setRoseExotic(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/RoseEndangered").then((res) => {
          console.log(res.data.length);
          setRoseEndangered(res.data.length);
        });


        axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/RoseEvergreen").then((res) => {
          console.log(res.data.length);
          setRoseEvergreenPhenology([res.data.length]);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/RoseDeciduous").then((res) => {
          console.log(res.data.length);
          setRoseDeciduousPhenology(res.data.length);
        });
    },[]);


    arrRose.push(
        parseInt(RoseEvergreen),
        parseInt(RoseDeciduous),
        parseInt(RoseEndemic),
        parseInt(RoseIndigenous),
        parseInt(RoseExotic),
        parseInt(RoseEndangered)
      );

      arrRosePhenology.push(
        parseInt(RoseEvergreenPhenology),
        parseInt(RoseDeciduousPhenology),

      )


    return (
        <div className="Rose__Park">
            <SubBanner Title="Generate report" subTitle="Rose Park" imgURL="https://images.unsplash.com/photo-1635886840360-a2d27a5826d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"/>
        
            <div className="Rose__Park-main" style={{display:'flex',placeItems:'center',justifyContent:"space-around"}}>
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
            <DonutChart
                title="Rose Park (Phenology)"
                values={arrRosePhenology}
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
                <RoseTable/>
            </div>
        
        
        </div>
    )
}

export default Rose_Park
