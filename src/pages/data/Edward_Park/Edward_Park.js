import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import SubBanner from "../../../Components/Common/BannerImage/SubBanner/SubBanner"
import EdwardTable_ConservationStatus from "../../../Components/Common/MUI-table/EdwardPark/conservartionStatus/EdwardTable_ConservationStatus";
import EdwardTable from "../../../Components/Common/MUI-table/EdwardPark/EdwardTable"
import DonutChart from "../../../Components/DashbaordComponents/Dashboard_donut/DonutChart";

function Edward_Park() {

  const [EdwardData, setEdwardData] = useState([]);
  const [EdwardEvergreen, setEdwardEvergreen] = useState([]);
  const [EdwardDeciduous, setEdwardDeciduous] = useState([]);
  const [EdwardEndemic, setEdwardEndemic] = useState([]);
  const [EdwardIndigenous, setEdwardIndigenous] = useState([]);
  const [EdwardExotic, setEdwardExotic] = useState([]);
  const [EdwardEndangered, setEdwardEndangered] = useState([]);

  const arrEdward = [];

  const [EdwardEvergreenPhenology, setEdwardEvergreenPhenology] = useState([]);
  const [EdwardDeciduousPhenology, setEdwardDeciduousPhenology] = useState([]);

  const [EdwardSemiDeciduousPhenology, setEdwardSemiDeciduousPhenology] = useState([]);


  const arrEdwardPhenology = [];

  const [EdwardLeastConcern, setEdwardLeastConcern] = useState([]);
  const [EdwardNotknown, setEdwardNotknown] = useState([]);
  const [EdwardNearThreatened, setEdwardNearThreatened] = useState([]);
  const [EdwardVulnerable, setEdwardVulnerable] = useState([]);
  const [EdwardCriticallyEndangered, setEdwardCriticallyEndangered] = useState([]);
  const [EdwardConservationDependent, setEdwardConservationDependent] = useState([]);

  const arrEdwardConservation = [];

  useEffect(() => {
    axios.get("https://afternoon-mountain-93761.herokuapp.com/edward_park_Evergreen").then((res) => {
      console.log(res.data.length);
      setEdwardEvergreen([res.data.length]);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/edward_park_Deciduous").then((res) => {
      console.log(res.data.length);
      setEdwardDeciduous(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/edward_park_Endemic").then((res) => {
      console.log(res.data.length);
      setEdwardEndemic(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/edward_park_Indigenous").then((res) => {
      console.log(res.data.length);
      setEdwardIndigenous(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/edward_park_Exotic").then((res) => {
      console.log(res.data.length);
      setEdwardExotic(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/edward_park_Endangered").then((res) => {
      console.log(res.data.length);
      setEdwardEndangered(res.data.length);
    });


    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/edward_park_Evergreen").then((res) => {
      console.log(res.data.length);
      setEdwardEvergreenPhenology([res.data.length]);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/edward_park_Deciduous").then((res) => {
      console.log(res.data.length);
      setEdwardDeciduousPhenology(res.data.length);
    });


    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/EdwardLeastConcern").then(res => {
      console.log(res.data.length)
      setEdwardLeastConcern(res.data.length)

    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/EdwardNotknown").then(res => {
      console.log(res.data)
      setEdwardNotknown(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/EdwardNearThreatened").then(res => {
      console.log(res.data.length)
      setEdwardNearThreatened(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/EdwardVulnerable").then(res => {
      console.log(res.data.length)
      setEdwardVulnerable(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/EdwardCriticallyEndangered").then(res => {
      console.log(res.data.length)
      setEdwardCriticallyEndangered(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/EdwardConservationDependent").then(res => {
      console.log(res.data.length)
      setEdwardConservationDependent(res.data.length)
    })

    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/semiDeciduous?Park=edward_park").then((res) => {
      console.log(res.data.length);
      setEdwardSemiDeciduousPhenology(res.data.length);
    });
  }, []);


  arrEdward.push(
    parseInt(EdwardEvergreen),
    parseInt(EdwardDeciduous),
    parseInt(EdwardEndemic),
    parseInt(EdwardIndigenous),
    parseInt(EdwardExotic),
    parseInt(EdwardEndangered)
  );

  arrEdwardPhenology.push(
    parseInt(EdwardEvergreenPhenology),
    parseInt(EdwardDeciduousPhenology),
    parseInt(EdwardSemiDeciduousPhenology),


  )

  arrEdwardConservation.push(
    parseInt(EdwardLeastConcern),
    parseInt(EdwardNotknown),
    parseInt(EdwardNearThreatened),
    parseInt(EdwardVulnerable),
    parseInt(EdwardCriticallyEndangered),
    parseInt(EdwardConservationDependent),
  )


  return (
    <div className="Edward__Park">
      <SubBanner Title="Generate report" subTitle="Edward Park" imgURL="https://images.unsplash.com/photo-1635886840360-a2d27a5826d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" />

      <div className="Edward__Park-main" style={{ display: 'flex', placeItems: 'center', justifyContent: "space-around" }}>
        <DonutChart
          title="Edward Park"
          values={arrEdward}
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
          title="Edward Park (Phenology)"
          values={arrEdwardPhenology}
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
        <EdwardTable />
      </div>

      <div style={{ padding: "50px" }}>
        <h2>Conservation Status</h2>
        <div style={{ display: 'flex', margin: "50px" }}>
          <DonutChart
            title="Edward Park (conservation status)"
            values={arrEdwardConservation}
            labels={[
              "Least Concern",
              "Not known",
              "Near Threatened",
              "Vulnerable",
              "Critically endangered",
              "Conservation dependent",
            ]}
          />
          <EdwardTable_ConservationStatus />
        </div>

      </div>


    </div>
  )
}

export default Edward_Park
