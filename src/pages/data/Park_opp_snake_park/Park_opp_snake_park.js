import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import SubBanner from "../../../Components/Common/BannerImage/SubBanner/SubBanner"
import Park_opp_snake_parkTable_ConservationStatus from "../../../Components/Common/MUI-table/Park_opp_snake_park/conservartionStatus/Park_opp_snake_parkTable_ConservationStatus";
import Park_opp_snake_parkTable from "../../../Components/Common/MUI-table/Park_opp_snake_park/Park_opp_snake_parkTable"
import DonutChart from "../../../Components/DashbaordComponents/Dashboard_donut/DonutChart";

function Park_opp_snake_park() {

  const [Park_opp_snake_parkData, setPark_opp_snake_parkData] = useState([]);
  const [Park_opp_snake_parkEvergreen, setPark_opp_snake_parkEvergreen] = useState([]);
  const [Park_opp_snake_parkDeciduous, setPark_opp_snake_parkDeciduous] = useState([]);
  const [Park_opp_snake_parkEndemic, setPark_opp_snake_parkEndemic] = useState([]);
  const [Park_opp_snake_parkIndigenous, setPark_opp_snake_parkIndigenous] = useState([]);
  const [Park_opp_snake_parkExotic, setPark_opp_snake_parkExotic] = useState([]);
  const [Park_opp_snake_parkEndangered, setPark_opp_snake_parkEndangered] = useState([]);

  const arrPark_opp_snake_park = [];

  const [Park_opp_snake_parkEvergreenPhenology, setPark_opp_snake_parkEvergreenPhenology] = useState([]);
  const [Park_opp_snake_parkDeciduousPhenology, setPark_opp_snake_parkDeciduousPhenology] = useState([]);

  const arrPark_opp_snake_parkPhenology = [];

  const [Park_opp_snake_parkLeastConcern, setPark_opp_snake_parkLeastConcern] = useState([]);
  const [Park_opp_snake_parkNotknown, setPark_opp_snake_parkNotknown] = useState([]);
  const [Park_opp_snake_parkNearThreatened, setPark_opp_snake_parkNearThreatened] = useState([]);
  const [Park_opp_snake_parkVulnerable, setPark_opp_snake_parkVulnerable] = useState([]);
  const [Park_opp_snake_parkCriticallyEndangered, setPark_opp_snake_parkCriticallyEndangered] = useState([]);
  const [Park_opp_snake_parkConservationDependent, setPark_opp_snake_parkConservationDependent] = useState([]);

  const arrPark_opp_snake_parkConservation = [];

  console.log("okokoko",arrPark_opp_snake_parkConservation)

  useEffect(() => {
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_opp_snake_park_Evergreen").then((res) => {
      console.log(res.data.length);
      setPark_opp_snake_parkEvergreen([res.data.length]);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_opp_snake_park_Deciduous").then((res) => {
      console.log(res.data.length);
      setPark_opp_snake_parkDeciduous(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_opp_snake_park_Endemic").then((res) => {
      console.log(res.data.length);
      setPark_opp_snake_parkEndemic(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_opp_snake_park_Indigenous").then((res) => {
      console.log(res.data.length);
      setPark_opp_snake_parkIndigenous(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_opp_snake_park_Exotic").then((res) => {
      console.log(res.data.length);
      setPark_opp_snake_parkExotic(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_opp_snake_park_Endangered").then((res) => {
      console.log(res.data.length);
      setPark_opp_snake_parkEndangered(res.data.length);
    });


    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/Park_opp_snake_park_Evergreen").then((res) => {
      console.log(res.data.length);
      setPark_opp_snake_parkEvergreenPhenology([res.data.length]);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/Park_opp_snake_park_Deciduous").then((res) => {
      console.log(res.data.length);
      setPark_opp_snake_parkDeciduousPhenology(res.data.length);
    });


    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_opp_snake_parkLeastConcern").then(res => {
      console.log(res.data.length)
      setPark_opp_snake_parkLeastConcern(res.data.length)

    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_opp_snake_parkNotknown").then(res => {
      console.log(res.data)
      setPark_opp_snake_parkNotknown(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_opp_snake_parkNearThreatened").then(res => {
      console.log(res.data.length)
      setPark_opp_snake_parkNearThreatened(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_opp_snake_parkVulnerable").then(res => {
      console.log(res.data.length)
      setPark_opp_snake_parkVulnerable(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_opp_snake_parkCriticallyEndangered").then(res => {
      console.log(res.data.length)
      setPark_opp_snake_parkCriticallyEndangered(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_opp_snake_parkConservationDependent").then(res => {
      console.log(res.data.length)
      setPark_opp_snake_parkConservationDependent(res.data.length)
    })
  }, []);


  arrPark_opp_snake_park.push(
    parseInt(Park_opp_snake_parkEvergreen),
    parseInt(Park_opp_snake_parkDeciduous),
    parseInt(Park_opp_snake_parkEndemic),
    parseInt(Park_opp_snake_parkIndigenous),
    parseInt(Park_opp_snake_parkExotic),
    parseInt(Park_opp_snake_parkEndangered)
  );

  arrPark_opp_snake_parkPhenology.push(
    parseInt(Park_opp_snake_parkEvergreenPhenology),
    parseInt(Park_opp_snake_parkDeciduousPhenology),

  )

  arrPark_opp_snake_parkConservation.push(
    parseInt(Park_opp_snake_parkLeastConcern),
    parseInt(Park_opp_snake_parkNotknown),
    parseInt(Park_opp_snake_parkNearThreatened),
    parseInt(Park_opp_snake_parkVulnerable),
    parseInt(Park_opp_snake_parkCriticallyEndangered),
    parseInt(Park_opp_snake_parkConservationDependent),
  )


  return (
    <div className="Park_opp_snake_park__Park">
      <SubBanner Title="Generate report" subTitle="Park_opp_snake_park Park" imgURL="https://images.unsplash.com/photo-1635886840360-a2d27a5826d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" />

      <div className="Park_opp_snake_park__Park-main" style={{ display: 'flex', placeItems: 'center', justifyContent: "space-around" }}>
        <DonutChart
          title="Park_opp_snake_park Park"
          values={arrPark_opp_snake_park}
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
          title="Park_opp_snake_park Park (Phenology)"
          values={arrPark_opp_snake_parkPhenology}
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
        <Park_opp_snake_parkTable />
      </div>

      <div style={{ padding: "50px" }}>
        <h2>Conservation Status</h2>
        <div style={{ display: 'flex', margin: "50px" }}>
          <DonutChart
            title="Park_opp_snake_park Park (conservation status)"
            values={arrPark_opp_snake_parkConservation}
            labels={[
              "Least Concern",
              "Not known",
              "Near Threatened",
              "Vulnerable",
              "Critically endangered",
              "Conservation dependent",
            ]}
          />
          <Park_opp_snake_parkTable_ConservationStatus />
        </div>

      </div>


    </div>
  )
}

export default Park_opp_snake_park
