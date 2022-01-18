import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import SubBanner from "../../../Components/Common/BannerImage/SubBanner/SubBanner"
import WineTable_ConservationStatus from "../../../Components/Common/MUI-table/WineBoard/conservartionStatus/WineTable_ConservationStatus";
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

  const [WineLeastConcern, setWineLeastConcern] = useState([]);
  const [WineNotknown, setWineNotknown] = useState([]);
  const [WineNearThreatened, setWineNearThreatened] = useState([]);
  const [WineVulnerable, setWineVulnerable] = useState([]);
  const [WineCriticallyEndangered, setWineCriticallyEndangered] = useState([]);
  const [WineConservationDependent, setWineConservationDependent] = useState([]);

  const arrWineConservation = [];

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


    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/WineLeastConcern").then(res => {
      console.log(res.data.length)
      setWineLeastConcern(res.data.length)

    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/WineNotknown").then(res => {
      console.log(res.data)
      setWineNotknown(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/WineNearThreatened").then(res => {
      console.log(res.data.length)
      setWineNearThreatened(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/WineVulnerable").then(res => {
      console.log(res.data.length)
      setWineVulnerable(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/WineCriticallyEndangered").then(res => {
      console.log(res.data.length)
      setWineCriticallyEndangered(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/WineConservationDependent").then(res => {
      console.log(res.data.length)
      setWineConservationDependent(res.data.length)
    })
  }, []);


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
  arrWineConservation.push(
    parseInt(WineLeastConcern),
    parseInt(WineNotknown),
    parseInt(WineNearThreatened),
    parseInt(WineVulnerable),
    parseInt(WineCriticallyEndangered),
    parseInt(WineConservationDependent),
  )


  return (
    <div className="Wine__Park">
      <SubBanner Title="Generate report" subTitle="Wine Park" imgURL="https://images.unsplash.com/photo-1635886840360-a2d27a5826d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" />

      <div className="Wine__Park-main" style={{ display: 'flex', placeItems: 'center', justifyContent: "space-around" }}>
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
      < div style={{ display: 'grid', placeItems: 'center' }}>
        <WineTable />
      </div>

      <div style={{ padding: "50px" }}>
        <h2>Conservation Status</h2>
        <div style={{ display: 'flex', margin: "50px" }}>
          <DonutChart
            title="Wine Park (conservation status)"
            values={arrWineConservation}
            labels={[
              "Least Concern",
              "Not known",
              "Near Threatened",
              "Vulnerable",
              "Critically endangered",
              "Conservation dependent",
            ]}
          />
          <WineTable_ConservationStatus />
        </div>

      </div>


    </div>
  )
}

export default Wine_Board
