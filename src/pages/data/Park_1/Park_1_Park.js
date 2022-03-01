import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import SubBanner from "../../../Components/Common/BannerImage/SubBanner/SubBanner"
import Park_1Table_ConservationStatus from "../../../Components/Common/MUI-table/Park_1Park/conservartionStatus/Park_1Table_ConservationStatus";
import Park_1Table from "../../../Components/Common/MUI-table/Park_1Park/Park_1Table"
import DonutChart from "../../../Components/DashbaordComponents/Dashboard_donut/DonutChart";

function Park_1_Park() {

  const [Park_1Data, setPark_1Data] = useState([]);
  const [Park_1Evergreen, setPark_1Evergreen] = useState([]);
  const [Park_1Deciduous, setPark_1Deciduous] = useState([]);
  const [Park_1Endemic, setPark_1Endemic] = useState([]);
  const [Park_1Indigenous, setPark_1Indigenous] = useState([]);
  const [Park_1Exotic, setPark_1Exotic] = useState([]);
  const [Park_1Endangered, setPark_1Endangered] = useState([]);

  const arrPark_1 = [];

  const [Park_1EvergreenPhenology, setPark_1EvergreenPhenology] = useState([]);
  const [Park_1DeciduousPhenology, setPark_1DeciduousPhenology] = useState([]);

  const [Park_1SemiDeciduousPhenology, setPark_1SemiDeciduousPhenology] = useState([]);


  const arrPark_1Phenology = [];

  const [Park_1LeastConcern, setPark_1LeastConcern] = useState([]);
  const [Park_1Notknown, setPark_1Notknown] = useState([]);
  const [Park_1NearThreatened, setPark_1NearThreatened] = useState([]);
  const [Park_1Vulnerable, setPark_1Vulnerable] = useState([]);
  const [Park_1CriticallyEndangered, setPark_1CriticallyEndangered] = useState([]);
  const [Park_1ConservationDependent, setPark_1ConservationDependent] = useState([]);

  const arrPark_1Conservation = [];

  useEffect(() => {
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_1Evergreen").then((res) => {
      console.log(res.data.length);
      setPark_1Evergreen([res.data.length]);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_1Deciduous").then((res) => {
      console.log(res.data.length);
      setPark_1Deciduous(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_1Endemic").then((res) => {
      console.log(res.data.length);
      setPark_1Endemic(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_1Indigenous").then((res) => {
      console.log(res.data.length);
      setPark_1Indigenous(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_1Exotic").then((res) => {
      console.log(res.data.length);
      setPark_1Exotic(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_1Endangered").then((res) => {
      console.log(res.data.length);
      setPark_1Endangered(res.data.length);
    });


    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/Park_1Evergreen").then((res) => {
      console.log(res.data.length);
      setPark_1EvergreenPhenology([res.data.length]);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/Park_1Deciduous").then((res) => {
      console.log(res.data.length);
      setPark_1DeciduousPhenology(res.data.length);
    });


    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_1LeastConcern").then(res => {
      console.log(res.data.length)
      setPark_1LeastConcern(res.data.length)

    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_1Notknown").then(res => {
      console.log(res.data)
      setPark_1Notknown(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_1NearThreatened").then(res => {
      console.log(res.data.length)
      setPark_1NearThreatened(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_1Vulnerable").then(res => {
      console.log(res.data.length)
      setPark_1Vulnerable(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_1CriticallyEndangered").then(res => {
      console.log(res.data.length)
      setPark_1CriticallyEndangered(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_1ConservationDependent").then(res => {
      console.log(res.data.length)
      setPark_1ConservationDependent(res.data.length)
    })

    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/semiDeciduous?Park=park_1").then((res) => {
      console.log(res.data.length);
      setPark_1SemiDeciduousPhenology(res.data.length);
    });
  }, []);


  arrPark_1.push(
    parseInt(Park_1Evergreen),
    parseInt(Park_1Deciduous),
    parseInt(Park_1Endemic),
    parseInt(Park_1Indigenous),
    parseInt(Park_1Exotic),
    parseInt(Park_1Endangered)
  );

  arrPark_1Phenology.push(
    parseInt(Park_1EvergreenPhenology),
    parseInt(Park_1DeciduousPhenology),
    parseInt(Park_1SemiDeciduousPhenology),

  )
  arrPark_1Conservation.push(
    parseInt(Park_1LeastConcern),
    parseInt(Park_1Notknown),
    parseInt(Park_1NearThreatened),
    parseInt(Park_1Vulnerable),
    parseInt(Park_1CriticallyEndangered),
    parseInt(Park_1ConservationDependent),
  )


  return (
    <div className="Park_1__Park">
      <SubBanner Title="Generate report" subTitle="Park_1 Park" imgURL="https://images.unsplash.com/photo-1635886840360-a2d27a5826d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" />

      <div className="Park_1__Park-main" style={{ display: 'flex', placeItems: 'center', justifyContent: "space-around" }}>
        <DonutChart
          title="Park_1 Park"
          values={arrPark_1}
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
          title="Park_1 Park (Phenology)"
          values={arrPark_1Phenology}
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
        <Park_1Table />
      </div>

      <div style={{ padding: "50px" }}>
        <h2>Conservation Status</h2>
        <div style={{ display: 'flex', margin: "50px" }}>
          <DonutChart
            title="Park_1 Park (conservation status)"
            values={arrPark_1Conservation}
            labels={[
              "Least Concern",
              "Not known",
              "Near Threatened",
              "Vulnerable",
              "Critically endangered",
              "Conservation dependent",
            ]}
          />
          <Park_1Table_ConservationStatus />
        </div>

      </div>


    </div>
  )
}

export default Park_1_Park
