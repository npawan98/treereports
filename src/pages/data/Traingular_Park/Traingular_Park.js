import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom"
import SubBanner from "../../../Components/Common/BannerImage/SubBanner/SubBanner"
import RoseTable from "../../../Components/Common/MUI-table/rosePark/roseTable"
import TraingularTable from "../../../Components/Common/MUI-table/traingularPark/traingularTable";
import DonutChart from "../../../Components/DashbaordComponents/Dashboard_donut/DonutChart"

function Traingular_Park() {

    const [triangularEvergreen, setTriangularEvergreen] = useState([]);
    const [triangularDeciduous, setTriangularDeciduous] = useState([]);
    const [triangularEndemic, setTriangularEndemic] = useState([]);
    const [triangularIndigenous, setTriangularIndigenous] = useState([]);
    const [triangularExotic, setTriangularExotic] = useState([]);
    const [triangularEndangered, setTriangularEndangered] = useState([]);
  
    const arrTriangular = [];

    useEffect(()=>{
        axios.get("http://localhost:8081/triangularEvergreen").then((res) => {
        console.log(res.data.length);
        setTriangularEvergreen([res.data.length]);
        });
        axios.get("http://localhost:8081/triangularDeciduous").then((res) => {
        console.log(res.data.length);
        setTriangularDeciduous(res.data.length);
        });
        axios.get("http://localhost:8081/triangularEndemic").then((res) => {
        console.log(res.data.length);
        setTriangularEndemic(res.data.length);
        });
        axios.get("http://localhost:8081/triangularIndigenous").then((res) => {
        console.log(res.data.length);
        setTriangularIndigenous(res.data.length);
        });
        axios.get("http://localhost:8081/triangularExotic").then((res) => {
        console.log(res.data.length);
        setTriangularExotic(res.data.length);
        });
        axios.get("http://localhost:8081/triangularEndangered").then((res) => {
        console.log(res.data.length);
        setTriangularEndangered(res.data.length);
        });
    },[])

    arrTriangular.push(
        parseInt(triangularEvergreen),
        parseInt(triangularDeciduous),
        parseInt(triangularEndemic),
        parseInt(triangularIndigenous),
        parseInt(triangularExotic),
        parseInt(triangularEndangered)
      );

    return (
        <div className="Dog__Park">
            <SubBanner Title="Generate report" subTitle="Traingular Park" imgURL="https://images.unsplash.com/photo-1605138090832-672d54ff023f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2209&q=80"/>
        
            <div className="Dog__Park-main" style={{display:'flex',placeItems:'center'}}>
            <DonutChart
                title="Traingular Park"
                values={arrTriangular}
                labels={[
                "Evergreen",
                "Deciduous",
                "Endemic",
                "Indigenous",
                "Exotic",
                "Endangered",
                ]}
            />
                <TraingularTable/>
            </div>
        
        
        </div>
    )
}

export default Traingular_Park
