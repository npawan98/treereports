import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import SubBanner from "../../../Components/Common/BannerImage/SubBanner/SubBanner"
import Park_opp_workers_clubTable_ConservationStatus from "../../../Components/Common/MUI-table/Park_opp_workers_club/conservartionStatus/Park_opp_workers_clubTable_ConservationStatus";
import Park_opp_workers_clubTable from "../../../Components/Common/MUI-table/Park_opp_workers_club/Park_opp_workers_clubTable"
import DonutChart from "../../../Components/DashbaordComponents/Dashboard_donut/DonutChart";

function Park_opp_workers_club() {

  const [Park_opp_workers_clubData, setPark_opp_workers_clubData] = useState([]);
  const [Park_opp_workers_clubEvergreen, setPark_opp_workers_clubEvergreen] = useState([]);
  const [Park_opp_workers_clubDeciduous, setPark_opp_workers_clubDeciduous] = useState([]);
  const [Park_opp_workers_clubEndemic, setPark_opp_workers_clubEndemic] = useState([]);
  const [Park_opp_workers_clubIndigenous, setPark_opp_workers_clubIndigenous] = useState([]);
  const [Park_opp_workers_clubExotic, setPark_opp_workers_clubExotic] = useState([]);
  const [Park_opp_workers_clubEndangered, setPark_opp_workers_clubEndangered] = useState([]);

  const arrPark_opp_workers_club = [];

  const [Park_opp_workers_clubEvergreenPhenology, setPark_opp_workers_clubEvergreenPhenology] = useState([]);
  const [Park_opp_workers_clubDeciduousPhenology, setPark_opp_workers_clubDeciduousPhenology] = useState([]);
  const [Park_opp_workers_clubSemiDeciduousPhenology, setPark_opp_workers_clubSemiDeciduousPhenology] = useState([]);


  const arrPark_opp_workers_clubPhenology = [];

  const [Park_opp_workers_clubLeastConcern, setPark_opp_workers_clubLeastConcern] = useState([]);
  const [Park_opp_workers_clubNotknown, setPark_opp_workers_clubNotknown] = useState([]);
  const [Park_opp_workers_clubNearThreatened, setPark_opp_workers_clubNearThreatened] = useState([]);
  const [Park_opp_workers_clubVulnerable, setPark_opp_workers_clubVulnerable] = useState([]);
  const [Park_opp_workers_clubCriticallyEndangered, setPark_opp_workers_clubCriticallyEndangered] = useState([]);
  const [Park_opp_workers_clubConservationDependent, setPark_opp_workers_clubConservationDependent] = useState([]);

  const arrPark_opp_workers_clubConservation = [];

  console.log("okokoko",arrPark_opp_workers_clubConservation)

  useEffect(() => {
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_opp_workers_club_Evergreen").then((res) => {
      console.log(res.data.length);
      setPark_opp_workers_clubEvergreen([res.data.length]);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_opp_workers_club_Deciduous").then((res) => {
      console.log(res.data.length);
      setPark_opp_workers_clubDeciduous(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_opp_workers_club_Endemic").then((res) => {
      console.log(res.data.length);
      setPark_opp_workers_clubEndemic(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_opp_workers_club_Indigenous").then((res) => {
      console.log(res.data.length);
      setPark_opp_workers_clubIndigenous(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_opp_workers_club_Exotic").then((res) => {
      console.log(res.data.length);
      setPark_opp_workers_clubExotic(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_opp_workers_club_Endangered").then((res) => {
      console.log(res.data.length);
      setPark_opp_workers_clubEndangered(res.data.length);
    });


    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/Park_opp_workers_club_Evergreen").then((res) => {
      console.log(res.data.length);
      setPark_opp_workers_clubEvergreenPhenology([res.data.length]);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/Park_opp_workers_club_Deciduous").then((res) => {
      console.log(res.data.length);
      setPark_opp_workers_clubDeciduousPhenology(res.data.length);
    });


    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_opp_workers_clubLeastConcern").then(res => {
      console.log(res.data.length)
      setPark_opp_workers_clubLeastConcern(res.data.length)

    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_opp_workers_clubNotknown").then(res => {
      console.log(res.data)
      setPark_opp_workers_clubNotknown(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_opp_workers_clubNearThreatened").then(res => {
      console.log(res.data.length)
      setPark_opp_workers_clubNearThreatened(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_opp_workers_clubVulnerable").then(res => {
      console.log(res.data.length)
      setPark_opp_workers_clubVulnerable(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_opp_workers_clubCriticallyEndangered").then(res => {
      console.log(res.data.length)
      setPark_opp_workers_clubCriticallyEndangered(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_opp_workers_clubConservationDependent").then(res => {
      console.log(res.data.length)
      setPark_opp_workers_clubConservationDependent(res.data.length)
    })

    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/semiDeciduous?Park=park_opp_workers_club").then((res) => {
      console.log(res.data.length);
      setPark_opp_workers_clubSemiDeciduousPhenology(res.data.length);
    });
  }, []);


  arrPark_opp_workers_club.push(
    parseInt(Park_opp_workers_clubEvergreen),
    parseInt(Park_opp_workers_clubDeciduous),
    parseInt(Park_opp_workers_clubEndemic),
    parseInt(Park_opp_workers_clubIndigenous),
    parseInt(Park_opp_workers_clubExotic),
    parseInt(Park_opp_workers_clubEndangered)
  );

  arrPark_opp_workers_clubPhenology.push(
    parseInt(Park_opp_workers_clubEvergreenPhenology),
    parseInt(Park_opp_workers_clubDeciduousPhenology),
    parseInt(Park_opp_workers_clubSemiDeciduousPhenology),


  )

  arrPark_opp_workers_clubConservation.push(
    parseInt(Park_opp_workers_clubLeastConcern),
    parseInt(Park_opp_workers_clubNotknown),
    parseInt(Park_opp_workers_clubNearThreatened),
    parseInt(Park_opp_workers_clubVulnerable),
    parseInt(Park_opp_workers_clubCriticallyEndangered),
    parseInt(Park_opp_workers_clubConservationDependent),
  )


  return (
    <div className="Park_opp_workers_club__Park">
      <SubBanner Title="Generate report" subTitle="Park_opp_workers_club Park" imgURL="https://images.unsplash.com/photo-1635886840360-a2d27a5826d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" />

      <div className="Park_opp_workers_club__Park-main" style={{ display: 'flex', placeItems: 'center', justifyContent: "space-around" }}>
        <DonutChart
          title="Park_opp_workers_club Park"
          values={arrPark_opp_workers_club}
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
          title="Park_opp_workers_club Park (Phenology)"
          values={arrPark_opp_workers_clubPhenology}
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
        <Park_opp_workers_clubTable />
      </div>

      <div style={{ padding: "50px" }}>
        <h2>Conservation Status</h2>
        <div style={{ display: 'flex', margin: "50px" }}>
          <DonutChart
            title="Park_opp_workers_club Park (conservation status)"
            values={arrPark_opp_workers_clubConservation}
            labels={[
              "Least Concern",
              "Not known",
              "Near Threatened",
              "Vulnerable",
              "Critically endangered",
              "Conservation dependent",
            ]}
          />
          <Park_opp_workers_clubTable_ConservationStatus />
        </div>

      </div>


    </div>
  )
}

export default Park_opp_workers_club
