import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import SubBanner from "../../../Components/Common/BannerImage/SubBanner/SubBanner"
import Park_2Table_ConservationStatus from "../../../Components/Common/MUI-table/Park_2Park/conservartionStatus/Park_2Table_ConservationStatus";
import Park_2Table from "../../../Components/Common/MUI-table/Park_2Park/Park_2Table"
import DonutChart from "../../../Components/DashbaordComponents/Dashboard_donut/DonutChart";

function Park_2_Park() {

  const [Park_2Data, setPark_2Data] = useState([]);
  const [Park_2Evergreen, setPark_2Evergreen] = useState([]);
  const [Park_2Deciduous, setPark_2Deciduous] = useState([]);
  const [Park_2Endemic, setPark_2Endemic] = useState([]);
  const [Park_2Indigenous, setPark_2Indigenous] = useState([]);
  const [Park_2Exotic, setPark_2Exotic] = useState([]);
  const [Park_2Endangered, setPark_2Endangered] = useState([]);

  const arrPark_2 = [];

  const [Park_2EvergreenPhenology, setPark_2EvergreenPhenology] = useState([]);
  const [Park_2DeciduousPhenology, setPark_2DeciduousPhenology] = useState([]);

  const arrPark_2Phenology = [];

  const [Park_2LeastConcern, setPark_2LeastConcern] = useState([]);
  const [Park_2Notknown, setPark_2Notknown] = useState([]);
  const [Park_2NearThreatened, setPark_2NearThreatened] = useState([]);
  const [Park_2Vulnerable, setPark_2Vulnerable] = useState([]);
  const [Park_2CriticallyEndangered, setPark_2CriticallyEndangered] = useState([]);
  const [Park_2ConservationDependent, setPark_2ConservationDependent] = useState([]);

  const arrPark_2Conservation = [];

  useEffect(() => {
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_2Evergreen").then((res) => {
      console.log(res.data.length);
      setPark_2Evergreen([res.data.length]);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_2Deciduous").then((res) => {
      console.log(res.data.length);
      setPark_2Deciduous(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_2Endemic").then((res) => {
      console.log(res.data.length);
      setPark_2Endemic(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_2Indigenous").then((res) => {
      console.log(res.data.length);
      setPark_2Indigenous(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_2Exotic").then((res) => {
      console.log(res.data.length);
      setPark_2Exotic(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_2Endangered").then((res) => {
      console.log(res.data.length);
      setPark_2Endangered(res.data.length);
    });


    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/Park_2Evergreen").then((res) => {
      console.log(res.data.length);
      setPark_2EvergreenPhenology([res.data.length]);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/Park_2Deciduous").then((res) => {
      console.log(res.data.length);
      setPark_2DeciduousPhenology(res.data.length);
    });


    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_2LeastConcern").then(res => {
      console.log(res.data.length)
      setPark_2LeastConcern(res.data.length)

    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_2Notknown").then(res => {
      console.log(res.data)
      setPark_2Notknown(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_2NearThreatened").then(res => {
      console.log(res.data.length)
      setPark_2NearThreatened(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_2Vulnerable").then(res => {
      console.log(res.data.length)
      setPark_2Vulnerable(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_2CriticallyEndangered").then(res => {
      console.log(res.data.length)
      setPark_2CriticallyEndangered(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_2ConservationDependent").then(res => {
      console.log(res.data.length)
      setPark_2ConservationDependent(res.data.length)
    })
  }, []);


  arrPark_2.push(
    parseInt(Park_2Evergreen),
    parseInt(Park_2Deciduous),
    parseInt(Park_2Endemic),
    parseInt(Park_2Indigenous),
    parseInt(Park_2Exotic),
    parseInt(Park_2Endangered)
  );

  arrPark_2Phenology.push(
    parseInt(Park_2EvergreenPhenology),
    parseInt(Park_2DeciduousPhenology),

  )

  arrPark_2Conservation.push(
    parseInt(Park_2LeastConcern),
    parseInt(Park_2Notknown),
    parseInt(Park_2NearThreatened),
    parseInt(Park_2Vulnerable),
    parseInt(Park_2CriticallyEndangered),
    parseInt(Park_2ConservationDependent),
  )


  return (
    <div className="Park_2__Park">
      <SubBanner Title="Generate report" subTitle="Park_2 Park" imgURL="https://images.unsplash.com/photo-1635886840360-a2d27a5826d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" />

      <div className="Park_2__Park-main" style={{ display: 'flex', placeItems: 'center', justifyContent: "space-around" }}>
        <DonutChart
          title="Park_2 Park"
          values={arrPark_2}
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
          title="Park_2 Park (Phenology)"
          values={arrPark_2Phenology}
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
        <Park_2Table />
      </div>

      <div style={{ padding: "50px" }}>
        <h2>Conservation Status</h2>
        <div style={{ display: 'flex', margin: "50px" }}>
          <DonutChart
            title="Park_2 Park (conservation status)"
            values={arrPark_2Conservation}
            labels={[
              "Least Concern",
              "Not known",
              "Near Threatened",
              "Vulnerable",
              "Critically endangered",
              "Conservation dependent",
            ]}
          />
          <Park_2Table_ConservationStatus />
        </div>

      </div>


    </div>
  )
}

export default Park_2_Park
