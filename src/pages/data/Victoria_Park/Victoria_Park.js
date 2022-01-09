import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import SubBanner from "../../../Components/Common/BannerImage/SubBanner/SubBanner"
import VictoriaTable from "../../../Components/Common/MUI-table/VictoriaPark/VictoriaTable"
import DonutChart from "../../../Components/DashbaordComponents/Dashboard_donut/DonutChart";

function Victoria_Park() {

    const [VictoriaData, setVictoriaData] = useState([]);
    const [VictoriaEvergreen, setVictoriaEvergreen] = useState([]);
    const [VictoriaDeciduous, setVictoriaDeciduous] = useState([]);
    const [VictoriaEndemic, setVictoriaEndemic] = useState([]);
    const [VictoriaIndigenous, setVictoriaIndigenous] = useState([]);
    const [VictoriaExotic, setVictoriaExotic] = useState([]);
    const [VictoriaEndangered, setVictoriaEndangered] = useState([]);

    const arrVictoria = [];

    const [VictoriaEvergreenPhenology, setVictoriaEvergreenPhenology] = useState([]);
    const [VictoriaDeciduousPhenology, setVictoriaDeciduousPhenology] = useState([]);

    const arrVictoriaPhenology = [];

    useEffect(() => {
        axios.get("https://afternoon-mountain-93761.herokuapp.com/Victoria_park_Evergreen").then((res) => {
          console.log(res.data.length);
          setVictoriaEvergreen([res.data.length]);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/Victoria_park_Deciduous").then((res) => {
          console.log(res.data.length);
          setVictoriaDeciduous(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/Victoria_park_Endemic").then((res) => {
          console.log(res.data.length);
          setVictoriaEndemic(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/Victoria_park_Indigenous").then((res) => {
          console.log(res.data.length);
          setVictoriaIndigenous(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/Victoria_park_Exotic").then((res) => {
          console.log(res.data.length);
          setVictoriaExotic(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/Victoria_park_Endangered").then((res) => {
          console.log(res.data.length);
          setVictoriaEndangered(res.data.length);
        });


        axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/Victoria_park_Evergreen").then((res) => {
          console.log(res.data.length);
          setVictoriaEvergreenPhenology([res.data.length]);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/Victoria_park_Deciduous").then((res) => {
          console.log(res.data.length);
          setVictoriaDeciduousPhenology(res.data.length);
        });
    },[]);


    arrVictoria.push(
        parseInt(VictoriaEvergreen),
        parseInt(VictoriaDeciduous),
        parseInt(VictoriaEndemic),
        parseInt(VictoriaIndigenous),
        parseInt(VictoriaExotic),
        parseInt(VictoriaEndangered)
      );

      arrVictoriaPhenology.push(
        parseInt(VictoriaEvergreenPhenology),
        parseInt(VictoriaDeciduousPhenology),

      )


    return (
        <div className="Victoria__Park">
            <SubBanner Title="Generate report" subTitle="Victoria Park" imgURL="https://images.unsplash.com/photo-1635886840360-a2d27a5826d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"/>
        
            <div className="Victoria__Park-main" style={{display:'flex',placeItems:'center',justifyContent:"space-around"}}>
                <DonutChart
                title="Victoria Park"
                values={arrVictoria}
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
                title="Victoria Park (Phenology)"
                values={arrVictoriaPhenology}
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
                <VictoriaTable/>
            </div>
        
        
        </div>
    )
}

export default Victoria_Park
