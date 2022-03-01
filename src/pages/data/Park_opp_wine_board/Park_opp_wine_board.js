import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import SubBanner from "../../../Components/Common/BannerImage/SubBanner/SubBanner"
import Park_opp_wine_boardTable_ConservationStatus from "../../../Components/Common/MUI-table/Park_opp_wine_board/conservartionStatus/Park_opp_wine_boardTable_ConservationStatus";
import Park_opp_wine_boardTable from "../../../Components/Common/MUI-table/Park_opp_wine_board/Park_opp_wine_boardTable"
import DonutChart from "../../../Components/DashbaordComponents/Dashboard_donut/DonutChart";

function Park_opp_wine_board() {

  const [Park_opp_wine_boardData, setPark_opp_wine_boardData] = useState([]);
  const [Park_opp_wine_boardEvergreen, setPark_opp_wine_boardEvergreen] = useState([]);
  const [Park_opp_wine_boardDeciduous, setPark_opp_wine_boardDeciduous] = useState([]);
  const [Park_opp_wine_boardEndemic, setPark_opp_wine_boardEndemic] = useState([]);
  const [Park_opp_wine_boardIndigenous, setPark_opp_wine_boardIndigenous] = useState([]);
  const [Park_opp_wine_boardExotic, setPark_opp_wine_boardExotic] = useState([]);
  const [Park_opp_wine_boardEndangered, setPark_opp_wine_boardEndangered] = useState([]);

  const arrPark_opp_wine_board = [];

  const [Park_opp_wine_boardEvergreenPhenology, setPark_opp_wine_boardEvergreenPhenology] = useState([]);
  const [Park_opp_wine_boardDeciduousPhenology, setPark_opp_wine_boardDeciduousPhenology] = useState([]);
  const [Park_opp_wine_boardSemiDeciduousPhenology, setPark_opp_wine_boardSemiDeciduousPhenology] = useState([]);


  const arrPark_opp_wine_boardPhenology = [];

  const [Park_opp_wine_boardLeastConcern, setPark_opp_wine_boardLeastConcern] = useState([]);
  const [Park_opp_wine_boardNotknown, setPark_opp_wine_boardNotknown] = useState([]);
  const [Park_opp_wine_boardNearThreatened, setPark_opp_wine_boardNearThreatened] = useState([]);
  const [Park_opp_wine_boardVulnerable, setPark_opp_wine_boardVulnerable] = useState([]);
  const [Park_opp_wine_boardCriticallyEndangered, setPark_opp_wine_boardCriticallyEndangered] = useState([]);
  const [Park_opp_wine_boardConservationDependent, setPark_opp_wine_boardConservationDependent] = useState([]);

  const arrPark_opp_wine_boardConservation = [];

  console.log("okokoko",arrPark_opp_wine_boardConservation)

  useEffect(() => {
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_opp_wine_board_Evergreen").then((res) => {
      console.log(res.data.length);
      setPark_opp_wine_boardEvergreen([res.data.length]);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_opp_wine_board_Deciduous").then((res) => {
      console.log(res.data.length);
      setPark_opp_wine_boardDeciduous(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_opp_wine_board_Endemic").then((res) => {
      console.log(res.data.length);
      setPark_opp_wine_boardEndemic(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_opp_wine_board_Indigenous").then((res) => {
      console.log(res.data.length);
      setPark_opp_wine_boardIndigenous(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_opp_wine_board_Exotic").then((res) => {
      console.log(res.data.length);
      setPark_opp_wine_boardExotic(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_opp_wine_board_Endangered").then((res) => {
      console.log(res.data.length);
      setPark_opp_wine_boardEndangered(res.data.length);
    });


    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/Park_opp_wine_board_Evergreen").then((res) => {
      console.log(res.data.length);
      setPark_opp_wine_boardEvergreenPhenology([res.data.length]);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/Park_opp_wine_board_Deciduous").then((res) => {
      console.log(res.data.length);
      setPark_opp_wine_boardDeciduousPhenology(res.data.length);
    });


    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_opp_wine_boardLeastConcern").then(res => {
      console.log(res.data.length)
      setPark_opp_wine_boardLeastConcern(res.data.length)

    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_opp_wine_boardNotknown").then(res => {
      console.log(res.data)
      setPark_opp_wine_boardNotknown(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_opp_wine_boardNearThreatened").then(res => {
      console.log(res.data.length)
      setPark_opp_wine_boardNearThreatened(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_opp_wine_boardVulnerable").then(res => {
      console.log(res.data.length)
      setPark_opp_wine_boardVulnerable(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_opp_wine_boardCriticallyEndangered").then(res => {
      console.log(res.data.length)
      setPark_opp_wine_boardCriticallyEndangered(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_opp_wine_boardConservationDependent").then(res => {
      console.log(res.data.length)
      setPark_opp_wine_boardConservationDependent(res.data.length)
    })

    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/semiDeciduous?Park=park_opp_wine_board").then((res) => {
      console.log(res.data.length);
      setPark_opp_wine_boardSemiDeciduousPhenology(res.data.length);
    });
  }, []);


  arrPark_opp_wine_board.push(
    parseInt(Park_opp_wine_boardEvergreen),
    parseInt(Park_opp_wine_boardDeciduous),
    parseInt(Park_opp_wine_boardEndemic),
    parseInt(Park_opp_wine_boardIndigenous),
    parseInt(Park_opp_wine_boardExotic),
    parseInt(Park_opp_wine_boardEndangered)
  );

  arrPark_opp_wine_boardPhenology.push(
    parseInt(Park_opp_wine_boardEvergreenPhenology),
    parseInt(Park_opp_wine_boardDeciduousPhenology),
    parseInt(Park_opp_wine_boardSemiDeciduousPhenology),


  )

  arrPark_opp_wine_boardConservation.push(
    parseInt(Park_opp_wine_boardLeastConcern),
    parseInt(Park_opp_wine_boardNotknown),
    parseInt(Park_opp_wine_boardNearThreatened),
    parseInt(Park_opp_wine_boardVulnerable),
    parseInt(Park_opp_wine_boardCriticallyEndangered),
    parseInt(Park_opp_wine_boardConservationDependent),
  )


  return (
    <div className="Park_opp_wine_board__Park">
      <SubBanner Title="Generate report" subTitle="Park_opp_wine_board Park" imgURL="https://images.unsplash.com/photo-1635886840360-a2d27a5826d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" />

      <div className="Park_opp_wine_board__Park-main" style={{ display: 'flex', placeItems: 'center', justifyContent: "space-around" }}>
        <DonutChart
          title="Park_opp_wine_board Park"
          values={arrPark_opp_wine_board}
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
          title="Park_opp_wine_board Park (Phenology)"
          values={arrPark_opp_wine_boardPhenology}
          labels={[
            "Evergreen",
            "Deciduous",
            "Semi Deciduous",
            "Endemic",
            "Indigenous",
            "Exotic",
            "Endangered",
          ]}
        />

      </div>
      < div style={{ display: 'grid', placeItems: 'center' }}>
        <Park_opp_wine_boardTable />
      </div>

      <div style={{ padding: "50px" }}>
        <h2>Conservation Status</h2>
        <div style={{ display: 'flex', margin: "50px" }}>
          <DonutChart
            title="Park_opp_wine_board Park (conservation status)"
            values={arrPark_opp_wine_boardConservation}
            labels={[
              "Least Concern",
              "Not known",
              "Near Threatened",
              "Vulnerable",
              "Critically endangered",
              "Conservation dependent",
            ]}
          />
          <Park_opp_wine_boardTable_ConservationStatus />
        </div>

      </div>


    </div>
  )
}

export default Park_opp_wine_board
