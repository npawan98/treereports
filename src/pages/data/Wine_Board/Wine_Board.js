import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import SubBanner from "../../../Components/Common/BannerImage/SubBanner/SubBanner"
import WineTable from "../../../Components/Common/MUI-table/WineBoard/WineTable"
import DonutChart from "../../../Components/DashbaordComponents/Dashboard_donut/DonutChart";

function Wine_Board() {

    const [WineData, setWineData] = useState([]);
    const [WineEvergreen, setWineEvergreen] = useState([]);
    const [WineDeciduous, setWineDeciduous] = useState([]);
    const [WineEndemic, setWineEndemic] = useState([]);
    const [WineIndigenous, setWineIndigenous] = useState([]);
    const [WineExotic, setWineExotic] = useState([]);
    const [WineEndangered, setWineEndangered] = useState([]);

    const arrWine = [];

    const [WineEvergreenPhenology, setWineEvergreenPhenology] = useState([]);
    const [WineDeciduousPhenology, setWineDeciduousPhenology] = useState([]);

    const arrWinePhenology = [];

    useEffect(() => {
        axios.get("https://afternoon-mountain-93761.herokuapp.com/wine_board_Evergreen").then((res) => {
          console.log(res.data.length);
          setWineEvergreen([res.data.length]);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/wine_board_Deciduous").then((res) => {
          console.log(res.data.length);
          setWineDeciduous(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/wine_board_Endemic").then((res) => {
          console.log(res.data.length);
          setWineEndemic(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/wine_board_Indigenous").then((res) => {
          console.log(res.data.length);
          setWineIndigenous(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/wine_board_Exotic").then((res) => {
          console.log(res.data.length);
          setWineExotic(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/wine_board_Endangered").then((res) => {
          console.log(res.data.length);
          setWineEndangered(res.data.length);
        });


        axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/wine_board_Evergreen").then((res) => {
          console.log(res.data.length);
          setWineEvergreenPhenology([res.data.length]);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/wine_board_Deciduous").then((res) => {
          console.log(res.data.length);
          setWineDeciduousPhenology(res.data.length);
        });
    },[]);


    arrWine.push(
        parseInt(WineEvergreen),
        parseInt(WineDeciduous),
        parseInt(WineEndemic),
        parseInt(WineIndigenous),
        parseInt(WineExotic),
        parseInt(WineEndangered)
      );

      arrWinePhenology.push(
        parseInt(WineEvergreenPhenology),
        parseInt(WineDeciduousPhenology),

      )


    return (
        <div className="Wine__Park">
            <SubBanner Title="Generate report" subTitle="Wine Park" imgURL="https://images.unsplash.com/photo-1635886840360-a2d27a5826d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"/>
        
            <div className="Wine__Park-main" style={{display:'flex',placeItems:'center',justifyContent:"space-around"}}>
                <DonutChart
                title="Wine Park"
                values={arrWine}
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
                title="Wine Park (Phenology)"
                values={arrWinePhenology}
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
                <WineTable/>
            </div>
        
        
        </div>
    )
}

export default Wine_Board
