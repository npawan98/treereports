import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import SubBanner from "../../../Components/Common/BannerImage/SubBanner/SubBanner"
import Lotus_pond_kargadhakunteTable_ConservationStatus from "../../../Components/Common/MUI-table/Lotus_pond_kargadhakunte/conservartionStatus/Lotus_pond_kargadhakunteTable_ConservationStatus";
import Lotus_pond_kargadhakunteTable from "../../../Components/Common/MUI-table/Lotus_pond_kargadhakunte/Lotus_pond_kargadhakunteTable"
import DonutChart from "../../../Components/DashbaordComponents/Dashboard_donut/DonutChart";

function Lotus_pond_kargadhakunte() {

  const [Lotus_pond_kargadhakunteData, setLotus_pond_kargadhakunteData] = useState([]);
  const [Lotus_pond_kargadhakunteEvergreen, setLotus_pond_kargadhakunteEvergreen] = useState([]);
  const [Lotus_pond_kargadhakunteDeciduous, setLotus_pond_kargadhakunteDeciduous] = useState([]);
  const [Lotus_pond_kargadhakunteEndemic, setLotus_pond_kargadhakunteEndemic] = useState([]);
  const [Lotus_pond_kargadhakunteIndigenous, setLotus_pond_kargadhakunteIndigenous] = useState([]);
  const [Lotus_pond_kargadhakunteExotic, setLotus_pond_kargadhakunteExotic] = useState([]);
  const [Lotus_pond_kargadhakunteEndangered, setLotus_pond_kargadhakunteEndangered] = useState([]);

  const arrLotus_pond_kargadhakunte = [];

  const [Lotus_pond_kargadhakunteEvergreenPhenology, setLotus_pond_kargadhakunteEvergreenPhenology] = useState([]);
  const [Lotus_pond_kargadhakunteDeciduousPhenology, setLotus_pond_kargadhakunteDeciduousPhenology] = useState([]);

  const arrLotus_pond_kargadhakuntePhenology = [];

  const [Lotus_pond_kargadhakunteLeastConcern, setLotus_pond_kargadhakunteLeastConcern] = useState([]);
  const [Lotus_pond_kargadhakunteNotknown, setLotus_pond_kargadhakunteNotknown] = useState([]);
  const [Lotus_pond_kargadhakunteNearThreatened, setLotus_pond_kargadhakunteNearThreatened] = useState([]);
  const [Lotus_pond_kargadhakunteVulnerable, setLotus_pond_kargadhakunteVulnerable] = useState([]);
  const [Lotus_pond_kargadhakunteCriticallyEndangered, setLotus_pond_kargadhakunteCriticallyEndangered] = useState([]);
  const [Lotus_pond_kargadhakunteConservationDependent, setLotus_pond_kargadhakunteConservationDependent] = useState([]);

  const arrLotus_pond_kargadhakunteConservation = [];

  console.log("okokoko",arrLotus_pond_kargadhakunteConservation)

  useEffect(() => {
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Lotus_pond_kargadhakunte_Evergreen").then((res) => {
      console.log(res.data.length);
      setLotus_pond_kargadhakunteEvergreen([res.data.length]);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Lotus_pond_kargadhakunte_Deciduous").then((res) => {
      console.log(res.data.length);
      setLotus_pond_kargadhakunteDeciduous(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Lotus_pond_kargadhakunte_Endemic").then((res) => {
      console.log(res.data.length);
      setLotus_pond_kargadhakunteEndemic(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Lotus_pond_kargadhakunte_Indigenous").then((res) => {
      console.log(res.data.length);
      setLotus_pond_kargadhakunteIndigenous(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Lotus_pond_kargadhakunte_Exotic").then((res) => {
      console.log(res.data.length);
      setLotus_pond_kargadhakunteExotic(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Lotus_pond_kargadhakunte_Endangered").then((res) => {
      console.log(res.data.length);
      setLotus_pond_kargadhakunteEndangered(res.data.length);
    });


    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/Lotus_pond_kargadhakunte_Evergreen").then((res) => {
      console.log(res.data.length);
      setLotus_pond_kargadhakunteEvergreenPhenology([res.data.length]);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/Lotus_pond_kargadhakunte_Deciduous").then((res) => {
      console.log(res.data.length);
      setLotus_pond_kargadhakunteDeciduousPhenology(res.data.length);
    });


    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Lotus_pond_kargadhakunteLeastConcern").then(res => {
      console.log(res.data.length)
      setLotus_pond_kargadhakunteLeastConcern(res.data.length)

    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Lotus_pond_kargadhakunteNotknown").then(res => {
      console.log(res.data)
      setLotus_pond_kargadhakunteNotknown(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Lotus_pond_kargadhakunteNearThreatened").then(res => {
      console.log(res.data.length)
      setLotus_pond_kargadhakunteNearThreatened(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Lotus_pond_kargadhakunteVulnerable").then(res => {
      console.log(res.data.length)
      setLotus_pond_kargadhakunteVulnerable(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Lotus_pond_kargadhakunteCriticallyEndangered").then(res => {
      console.log(res.data.length)
      setLotus_pond_kargadhakunteCriticallyEndangered(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Lotus_pond_kargadhakunteConservationDependent").then(res => {
      console.log(res.data.length)
      setLotus_pond_kargadhakunteConservationDependent(res.data.length)
    })
  }, []);


  arrLotus_pond_kargadhakunte.push(
    parseInt(Lotus_pond_kargadhakunteEvergreen),
    parseInt(Lotus_pond_kargadhakunteDeciduous),
    parseInt(Lotus_pond_kargadhakunteEndemic),
    parseInt(Lotus_pond_kargadhakunteIndigenous),
    parseInt(Lotus_pond_kargadhakunteExotic),
    parseInt(Lotus_pond_kargadhakunteEndangered)
  );

  arrLotus_pond_kargadhakuntePhenology.push(
    parseInt(Lotus_pond_kargadhakunteEvergreenPhenology),
    parseInt(Lotus_pond_kargadhakunteDeciduousPhenology),

  )

  arrLotus_pond_kargadhakunteConservation.push(
    parseInt(Lotus_pond_kargadhakunteLeastConcern),
    parseInt(Lotus_pond_kargadhakunteNotknown),
    parseInt(Lotus_pond_kargadhakunteNearThreatened),
    parseInt(Lotus_pond_kargadhakunteVulnerable),
    parseInt(Lotus_pond_kargadhakunteCriticallyEndangered),
    parseInt(Lotus_pond_kargadhakunteConservationDependent),
  )


  return (
    <div className="Lotus_pond_kargadhakunte__Park">
      <SubBanner Title="Generate report" subTitle="Lotus_pond_kargadhakunte Park" imgURL="https://images.unsplash.com/photo-1635886840360-a2d27a5826d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" />

      <div className="Lotus_pond_kargadhakunte__Park-main" style={{ display: 'flex', placeItems: 'center', justifyContent: "space-around" }}>
        <DonutChart
          title="Lotus_pond_kargadhakunte Park"
          values={arrLotus_pond_kargadhakunte}
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
          title="Lotus_pond_kargadhakunte Park (Phenology)"
          values={arrLotus_pond_kargadhakuntePhenology}
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
        <Lotus_pond_kargadhakunteTable />
      </div>

      <div style={{ padding: "50px" }}>
        <h2>Conservation Status</h2>
        <div style={{ display: 'flex', margin: "50px" }}>
          <DonutChart
            title="Lotus_pond_kargadhakunte Park (conservation status)"
            values={arrLotus_pond_kargadhakunteConservation}
            labels={[
              "Least Concern",
              "Not known",
              "Near Threatened",
              "Vulnerable",
              "Critically endangered",
              "Conservation dependent",
            ]}
          />
          <Lotus_pond_kargadhakunteTable_ConservationStatus />
        </div>

      </div>


    </div>
  )
}

export default Lotus_pond_kargadhakunte
