import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import SubBanner from "../../../Components/Common/BannerImage/SubBanner/SubBanner"
import DogTable from "../../../Components/Common/MUI-table/dogPark/DogTable"
import DonutChart from "../../../Components/DashbaordComponents/Dashboard_donut/DonutChart";

function Dog_Park() {

    const [dogData, setDogData] = useState([]);
    const [dogEvergreen, setDogEvergreen] = useState([]);
    const [dogDeciduous, setDogDeciduous] = useState([]);
    const [dogEndemic, setDogEndemic] = useState([]);
    const [dogIndigenous, setDogIndigenous] = useState([]);
    const [dogExotic, setDogExotic] = useState([]);
    const [dogEndangered, setDogEndangered] = useState([]);

    const arrDog = [];

    useEffect(() => {
        axios.get("https://afternoon-mountain-93761.herokuapp.com/dogEvergreen").then((res) => {
          console.log(res.data.length);
          setDogEvergreen([res.data.length]);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/dogDeciduous").then((res) => {
          console.log(res.data.length);
          setDogDeciduous(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/dogEndemic").then((res) => {
          console.log(res.data.length);
          setDogEndemic(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/dogIndigenous").then((res) => {
          console.log(res.data.length);
          setDogIndigenous(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/dogExotic").then((res) => {
          console.log(res.data.length);
          setDogExotic(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/dogEndangered").then((res) => {
          console.log(res.data.length);
          setDogEndangered(res.data.length);
        });
    },[]);


    arrDog.push(
        parseInt(dogEvergreen),
        parseInt(dogDeciduous),
        parseInt(dogEndemic),
        parseInt(dogIndigenous),
        parseInt(dogExotic),
        parseInt(dogEndangered)
      );


    return (
        <div className="Dog__Park">
            <SubBanner Title="Generate report" subTitle="Dog Park" imgURL="https://images.unsplash.com/photo-1635886840360-a2d27a5826d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"/>
        
            <div className="Dog__Park-main" style={{display:'flex',placeItems:'center'}}>
                <DonutChart
                title="Dog Park"
                values={arrDog}
                labels={[
                "Evergreen",
                "Deciduous",
                "Endemic",
                "Indigenous",
                "Exotic",
                "Endangered",
                ]}
            />

                <DogTable/>
            </div>
        
        
        </div>
    )
}

export default Dog_Park
