import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom"
import SubBanner from "../../../Components/Common/BannerImage/SubBanner/SubBanner"
import VictoriaTable from "../../../Components/Common/MUI-table/VictoriaPark/VictoriaTable"
import DonutChart from "../../../Components/DashbaordComponents/Dashboard_donut/DonutChart"

function Victoria_Park() {

    const [VictoriaEvergreen, setVictoriaEvergreen] = useState([]);
    const [VictoriaDeciduous, setVictoriaDeciduous] = useState([]);
    const [VictoriaEndemic, setVictoriaEndemic] = useState([]);
    const [VictoriaIndigenous, setVictoriaIndigenous] = useState([]);
    const [VictoriaExotic, setVictoriaExotic] = useState([]);
    const [VictoriaEndangered, setVictoriaEndangered] = useState([]);
  
    const arrVictoria = [];

    useEffect(()=>{
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
    },[])

    arrVictoria.push(
        parseInt(VictoriaEvergreen),
        parseInt(VictoriaDeciduous),
        parseInt(VictoriaEndemic),
        parseInt(VictoriaIndigenous),
        parseInt(VictoriaExotic),
        parseInt(VictoriaEndangered)
      );

    return (
        <div className="Dog__Park">
            <SubBanner Title="Generate report" subTitle="Victoria Park" imgURL="https://images.unsplash.com/photo-1605138090832-672d54ff023f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2209&q=80"/>
        
            <div className="Dog__Park-main" style={{display:'flex',placeItems:'center'}}>
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
                <VictoriaTable/>
            </div>
        
        
        </div>
    )
}

export default Victoria_Park
