import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import SubBanner from "../../../Components/Common/BannerImage/SubBanner/SubBanner"
import High_courtTable_ConservationStatus from "../../../Components/Common/MUI-table/High_court/conservartionStatus/High_courtTable_ConservationStatus";
import HighCourtTable from "../../../Components/Common/MUI-table/High_court/HighCourtTable";
import DonutChart from "../../../Components/DashbaordComponents/Dashboard_donut/DonutChart";

// high_court is represented as high_court_park  in api
function High_court() {

  const [High_courtData, setHigh_courtData] = useState([]);
  const [High_courtEvergreen, setHigh_courtEvergreen] = useState([]);
  const [High_courtDeciduous, setHigh_courtDeciduous] = useState([]);
  const [High_courtEndemic, setHigh_courtEndemic] = useState([]);
  const [High_courtIndigenous, setHigh_courtIndigenous] = useState([]);
  const [High_courtExotic, setHigh_courtExotic] = useState([]);
  const [High_courtEndangered, setHigh_courtEndangered] = useState([]);

  const arrHigh_court = [];

  const [High_courtEvergreenPhenology, setHigh_courtEvergreenPhenology] = useState([]);
  const [High_courtDeciduousPhenology, setHigh_courtDeciduousPhenology] = useState([]);

  const arrHigh_courtPhenology = [];

  const [High_courtLeastConcern, setHigh_courtLeastConcern] = useState([]);
  const [High_courtNotknown, setHigh_courtNotknown] = useState([]);
  const [High_courtNearThreatened, setHigh_courtNearThreatened] = useState([]);
  const [High_courtVulnerable, setHigh_courtVulnerable] = useState([]);
  const [High_courtCriticallyEndangered, setHigh_courtCriticallyEndangered] = useState([]);
  const [High_courtConservationDependent, setHigh_courtConservationDependent] = useState([]);

  const arrHigh_courtConservation = [];

  console.log("okokoko",arrHigh_courtConservation)

  useEffect(() => {
    axios.get("https://afternoon-mountain-93761.herokuapp.com/high_court_park_Evergreen").then((res) => {
      console.log(res.data.length);
      setHigh_courtEvergreen([res.data.length]);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/high_court_park_Deciduous").then((res) => {
      console.log(res.data.length);
      setHigh_courtDeciduous(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/high_court_park_Endemic").then((res) => {
      console.log(res.data.length);
      setHigh_courtEndemic(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/high_court_park_Indigenous").then((res) => {
      console.log(res.data.length);
      setHigh_courtIndigenous(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/high_court_park_Exotic").then((res) => {
      console.log(res.data.length);
      setHigh_courtExotic(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/high_court_park_Endangered").then((res) => {
      console.log(res.data.length);
      setHigh_courtEndangered(res.data.length);
    });


    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/high_court_park_Evergreen").then((res) => {
      console.log(res.data.length);
      setHigh_courtEvergreenPhenology([res.data.length]);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/high_court_park_Deciduous").then((res) => {
      console.log(res.data.length);
      setHigh_courtDeciduousPhenology(res.data.length);
    });


    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/high_court_parkLeastConcern").then(res => {
      console.log(res.data.length)
      setHigh_courtLeastConcern(res.data.length)

    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/high_court_parkNotknown").then(res => {
      console.log(res.data)
      setHigh_courtNotknown(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/high_court_parkNearThreatened").then(res => {
      console.log(res.data.length)
      setHigh_courtNearThreatened(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/high_court_parkVulnerable").then(res => {
      console.log(res.data.length)
      setHigh_courtVulnerable(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/high_court_parkCriticallyEndangered").then(res => {
      console.log(res.data.length)
      setHigh_courtCriticallyEndangered(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/high_court_parkConservationDependent").then(res => {
      console.log(res.data.length)
      setHigh_courtConservationDependent(res.data.length)
    })
  }, []);


  arrHigh_court.push(
    parseInt(High_courtEvergreen),
    parseInt(High_courtDeciduous),
    parseInt(High_courtEndemic),
    parseInt(High_courtIndigenous),
    parseInt(High_courtExotic),
    parseInt(High_courtEndangered)
  );

  arrHigh_courtPhenology.push(
    parseInt(High_courtEvergreenPhenology),
    parseInt(High_courtDeciduousPhenology),

  )

  arrHigh_courtConservation.push(
    parseInt(High_courtLeastConcern),
    parseInt(High_courtNotknown),
    parseInt(High_courtNearThreatened),
    parseInt(High_courtVulnerable),
    parseInt(High_courtCriticallyEndangered),
    parseInt(High_courtConservationDependent),
  )


  return (
    <div className="High_court__Park">
      <SubBanner Title="Generate report" subTitle="High_court Park" imgURL="https://images.unsplash.com/photo-1635886840360-a2d27a5826d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" />

      <div className="High_court__Park-main" style={{ display: 'flex', placeItems: 'center', justifyContent: "space-around" }}>
        <DonutChart
          title="High_court Park"
          values={arrHigh_court}
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
          title="High_court Park (Phenology)"
          values={arrHigh_courtPhenology}
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
        <HighCourtTable />
      </div>

      <div style={{ padding: "50px" }}>
        <h2>Conservation Status</h2>
        <div style={{ display: 'flex', margin: "50px" }}>
          <DonutChart
            title="High_court Park (conservation status)"
            values={arrHigh_courtConservation}
            labels={[
              "Least Concern",
              "Not known",
              "Near Threatened",
              "Vulnerable",
              "Critically endangered",
              "Conservation dependent",
            ]}
          />
          <High_courtTable_ConservationStatus />
        </div>

      </div>


    </div>
  )
}

export default High_court
