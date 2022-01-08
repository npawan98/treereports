import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom"
import SubBanner from "../../../Components/Common/BannerImage/SubBanner/SubBanner"
import CircularTable from "../../../Components/Common/MUI-table/circularPark/CircularTable";
import DonutChart from "../../../Components/DashbaordComponents/Dashboard_donut/DonutChart"

function Circular_Park() {

    const [CircularEvergreen, setCircularEvergreen] = useState([]);
    const [CircularDeciduous, setCircularDeciduous] = useState([]);
    const [CircularEndemic, setCircularEndemic] = useState([]);
    const [CircularIndigenous, setCircularIndigenous] = useState([]);
    const [CircularExotic, setCircularExotic] = useState([]);
    const [CircularEndangered, setCircularEndangered] = useState([]);
  
    const arrCircular = [];

    useEffect(()=>{
        axios.get("https://afternoon-mountain-93761.herokuapp.com/CircularEvergreen").then((res) => {
        console.log(res.data.length);
        setCircularEvergreen([res.data.length]);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/CircularDeciduous").then((res) => {
        console.log(res.data.length);
        setCircularDeciduous(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/CircularEndemic").then((res) => {
        console.log(res.data.length);
        setCircularEndemic(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/CircularIndigenous").then((res) => {
        console.log(res.data.length);
        setCircularIndigenous(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/CircularExotic").then((res) => {
        console.log(res.data.length);
        setCircularExotic(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/CircularEndangered").then((res) => {
        console.log(res.data.length);
        setCircularEndangered(res.data.length);
        });
    },[])

    arrCircular.push(
        parseInt(CircularEvergreen),
        parseInt(CircularDeciduous),
        parseInt(CircularEndemic),
        parseInt(CircularIndigenous),
        parseInt(CircularExotic),
        parseInt(CircularEndangered)
      );

    return (
        <div className="Dog__Park">
            <SubBanner Title="Generate report" subTitle="Circular Park" imgURL="https://images.unsplash.com/photo-1605138090832-672d54ff023f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2209&q=80"/>
        
            <div className="Dog__Park-main" style={{display:'flex',placeItems:'center'}}>
            <DonutChart
                title="Circular Park"
                values={arrCircular}
                labels={[
                "Evergreen",
                "Deciduous",
                "Endemic",
                "Indigenous",
                "Exotic",
                "Endangered",
                ]}
            />
                <CircularTable/>
            </div>
        
        
        </div>
    )
}

export default Circular_Park
