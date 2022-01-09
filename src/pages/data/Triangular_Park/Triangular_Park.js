import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import SubBanner from "../../../Components/Common/BannerImage/SubBanner/SubBanner"
import TriangularTable from "../../../Components/Common/MUI-table/TriangularPark/TriangularTable"
import DonutChart from "../../../Components/DashbaordComponents/Dashboard_donut/DonutChart";

function Triangular_Park() {

    const [TriangularData, setTriangularData] = useState([]);
    const [TriangularEvergreen, setTriangularEvergreen] = useState([]);
    const [TriangularDeciduous, setTriangularDeciduous] = useState([]);
    const [TriangularEndemic, setTriangularEndemic] = useState([]);
    const [TriangularIndigenous, setTriangularIndigenous] = useState([]);
    const [TriangularExotic, setTriangularExotic] = useState([]);
    const [TriangularEndangered, setTriangularEndangered] = useState([]);

    const arrTriangular = [];

    const [TriangularEvergreenPhenology, setTriangularEvergreenPhenology] = useState([]);
    const [TriangularDeciduousPhenology, setTriangularDeciduousPhenology] = useState([]);

    const arrTriangularPhenology = [];

    useEffect(() => {
        axios.get("https://afternoon-mountain-93761.herokuapp.com/TriangularEvergreen").then((res) => {
          console.log(res.data.length);
          setTriangularEvergreen([res.data.length]);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/TriangularDeciduous").then((res) => {
          console.log(res.data.length);
          setTriangularDeciduous(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/TriangularEndemic").then((res) => {
          console.log(res.data.length);
          setTriangularEndemic(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/TriangularIndigenous").then((res) => {
          console.log(res.data.length);
          setTriangularIndigenous(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/TriangularExotic").then((res) => {
          console.log(res.data.length);
          setTriangularExotic(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/TriangularEndangered").then((res) => {
          console.log(res.data.length);
          setTriangularEndangered(res.data.length);
        });


        axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/TriangularEvergreen").then((res) => {
          console.log(res.data.length);
          setTriangularEvergreenPhenology([res.data.length]);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/TriangularDeciduous").then((res) => {
          console.log(res.data.length);
          setTriangularDeciduousPhenology(res.data.length);
        });
    },[]);


    arrTriangular.push(
        parseInt(TriangularEvergreen),
        parseInt(TriangularDeciduous),
        parseInt(TriangularEndemic),
        parseInt(TriangularIndigenous),
        parseInt(TriangularExotic),
        parseInt(TriangularEndangered)
      );

      arrTriangularPhenology.push(
        parseInt(TriangularEvergreenPhenology),
        parseInt(TriangularDeciduousPhenology),

      )


    return (
        <div className="Triangular__Park">
            <SubBanner Title="Generate report" subTitle="Triangular Park" imgURL="https://images.unsplash.com/photo-1635886840360-a2d27a5826d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"/>
        
            <div className="Triangular__Park-main" style={{display:'flex',placeItems:'center',justifyContent:"space-around"}}>
                <DonutChart
                title="Triangular Park"
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
            <DonutChart
                title="Triangular Park (Phenology)"
                values={arrTriangularPhenology}
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
                <TriangularTable/>
            </div>
        
        
        </div>
    )
}

export default Triangular_Park
