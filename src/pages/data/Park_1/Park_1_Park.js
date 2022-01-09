import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import SubBanner from "../../../Components/Common/BannerImage/SubBanner/SubBanner"
import Park_1Table from "../../../Components/Common/MUI-table/Park_1Park/Park_1Table"
import DonutChart from "../../../Components/DashbaordComponents/Dashboard_donut/DonutChart";

function Park_1_Park() {

    const [Park_1Data, setPark_1Data] = useState([]);
    const [Park_1Evergreen, setPark_1Evergreen] = useState([]);
    const [Park_1Deciduous, setPark_1Deciduous] = useState([]);
    const [Park_1Endemic, setPark_1Endemic] = useState([]);
    const [Park_1Indigenous, setPark_1Indigenous] = useState([]);
    const [Park_1Exotic, setPark_1Exotic] = useState([]);
    const [Park_1Endangered, setPark_1Endangered] = useState([]);

    const arrPark_1 = [];

    const [Park_1EvergreenPhenology, setPark_1EvergreenPhenology] = useState([]);
    const [Park_1DeciduousPhenology, setPark_1DeciduousPhenology] = useState([]);

    const arrPark_1Phenology = [];

    useEffect(() => {
        axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_1Evergreen").then((res) => {
          console.log(res.data.length);
          setPark_1Evergreen([res.data.length]);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_1Deciduous").then((res) => {
          console.log(res.data.length);
          setPark_1Deciduous(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_1Endemic").then((res) => {
          console.log(res.data.length);
          setPark_1Endemic(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_1Indigenous").then((res) => {
          console.log(res.data.length);
          setPark_1Indigenous(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_1Exotic").then((res) => {
          console.log(res.data.length);
          setPark_1Exotic(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_1Endangered").then((res) => {
          console.log(res.data.length);
          setPark_1Endangered(res.data.length);
        });


        axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/Park_1Evergreen").then((res) => {
          console.log(res.data.length);
          setPark_1EvergreenPhenology([res.data.length]);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/Park_1Deciduous").then((res) => {
          console.log(res.data.length);
          setPark_1DeciduousPhenology(res.data.length);
        });
    },[]);


    arrPark_1.push(
        parseInt(Park_1Evergreen),
        parseInt(Park_1Deciduous),
        parseInt(Park_1Endemic),
        parseInt(Park_1Indigenous),
        parseInt(Park_1Exotic),
        parseInt(Park_1Endangered)
      );

      arrPark_1Phenology.push(
        parseInt(Park_1EvergreenPhenology),
        parseInt(Park_1DeciduousPhenology),

      )


    return (
        <div className="Park_1__Park">
            <SubBanner Title="Generate report" subTitle="Park_1 Park" imgURL="https://images.unsplash.com/photo-1635886840360-a2d27a5826d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"/>
        
            <div className="Park_1__Park-main" style={{display:'flex',placeItems:'center',justifyContent:"space-around"}}>
                <DonutChart
                title="Park_1 Park"
                values={arrPark_1}
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
                title="Park_1 Park (Phenology)"
                values={arrPark_1Phenology}
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
                <Park_1Table/>
            </div>
        
        
        </div>
    )
}

export default Park_1_Park
