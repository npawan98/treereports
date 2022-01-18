import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import SubBanner from "../../../Components/Common/BannerImage/SubBanner/SubBanner"
import CircularTable from "../../../Components/Common/MUI-table/circularPark/CircularTable"
import CircularTable_ConservationStatus from "../../../Components/Common/MUI-table/circularPark/conservartionStatus/CircularTable_ConservationStatus";
import DonutChart from "../../../Components/DashbaordComponents/Dashboard_donut/DonutChart";

function Circular_Park() {

  const [CircularData, setCircularData] = useState([]);
  const [CircularEvergreen, setCircularEvergreen] = useState([]);
  const [CircularDeciduous, setCircularDeciduous] = useState([]);
  const [CircularEndemic, setCircularEndemic] = useState([]);
  const [CircularIndigenous, setCircularIndigenous] = useState([]);
  const [CircularExotic, setCircularExotic] = useState([]);
  const [CircularEndangered, setCircularEndangered] = useState([]);

  const arrCircular = [];

  const [CircularEvergreenPhenology, setCircularEvergreenPhenology] = useState([]);
  const [CircularDeciduousPhenology, setCircularDeciduousPhenology] = useState([]);

  const arrCircularPhenology = [];

  const [CircularLeastConcern, setCircularLeastConcern] = useState([]);
  const [CircularNotknown, setCircularNotknown] = useState([]);
  const [CircularNearThreatened, setCircularNearThreatened] = useState([]);
  const [CircularVulnerable, setCircularVulnerable] = useState([]);
  const [CircularCriticallyEndangered, setCircularCriticallyEndangered] = useState([]);
  const [CircularConservationDependent, setCircularConservationDependent] = useState([]);

  const arrCircularConservation = [];

  useEffect(() => {
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



    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/CircularEvergreen").then((res) => {
      console.log(res.data.length);
      setCircularEvergreenPhenology([res.data.length]);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/CircularDeciduous").then((res) => {
      console.log(res.data.length);
      setCircularDeciduousPhenology(res.data.length);
    });

    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/CircularLeastConcern").then(res => {
      console.log(res.data.length)
      setCircularLeastConcern(res.data.length)

    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/CircularNotknown").then(res => {
      console.log(res.data)
      setCircularNotknown(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/CircularNearThreatened").then(res => {
      console.log(res.data.length)
      setCircularNearThreatened(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/CircularVulnerable").then(res => {
      console.log(res.data.length)
      setCircularVulnerable(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/CircularCriticallyEndangered").then(res => {
      console.log(res.data.length)
      setCircularCriticallyEndangered(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/CircularConservationDependent").then(res => {
      console.log(res.data.length)
      setCircularConservationDependent(res.data.length)
    })
  }, []);


  arrCircular.push(
    parseInt(CircularEvergreen),
    parseInt(CircularDeciduous),
    parseInt(CircularEndemic),
    parseInt(CircularIndigenous),
    parseInt(CircularExotic),
    parseInt(CircularEndangered)
  );

  arrCircularPhenology.push(
    parseInt(CircularEvergreenPhenology),
    parseInt(CircularDeciduousPhenology),

  )

  arrCircularConservation.push(
    parseInt(CircularLeastConcern),
    parseInt(CircularNotknown),
    parseInt(CircularNearThreatened),
    parseInt(CircularVulnerable),
    parseInt(CircularCriticallyEndangered),
    parseInt(CircularConservationDependent),
  )


  return (
    <div className="Circular__Park">
      <SubBanner Title="Generate report" subTitle="Circular Park" imgURL="https://images.unsplash.com/photo-1635886840360-a2d27a5826d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" />

      <div className="Circular__Park-main" style={{ display: 'flex', placeItems: 'center', justifyContent: "space-around" }}>
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
        <DonutChart
          title="Circular Park (Phenology)"
          values={arrCircularPhenology}
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
        <CircularTable />
      </div>

      <div style={{ padding: "50px" }}>
        <h2>Conservation Status</h2>
        <div style={{ display: 'flex', margin: "50px" }}>
          <DonutChart
            title="Circular Park (conservation status)"
            values={arrCircularConservation}
            labels={[
              "Least Concern",
              "Not known",
              "Near Threatened",
              "Vulnerable",
              "Critically endangered",
              "Conservation dependent",
            ]}
          />
          <CircularTable_ConservationStatus />
        </div>

      </div>


    </div>
  )
}

export default Circular_Park
