import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import SubBanner from "../../../Components/Common/BannerImage/SubBanner/SubBanner"
import SecretaryTable_ConservationStatus from "../../../Components/Common/MUI-table/SecretaryClub/conservartionStatus/SecretaryTable_ConservationStatus";
import SecretaryTable from "../../../Components/Common/MUI-table/SecretaryClub/SecretaryTable"
import DonutChart from "../../../Components/DashbaordComponents/Dashboard_donut/DonutChart";

function Secretary_club() {

  const [SecretaryData, setSecretaryData] = useState([]);
  const [SecretaryEvergreen, setSecretaryEvergreen] = useState([]);
  const [SecretaryDeciduous, setSecretaryDeciduous] = useState([]);
  const [SecretaryEndemic, setSecretaryEndemic] = useState([]);
  const [SecretaryIndigenous, setSecretaryIndigenous] = useState([]);
  const [SecretaryExotic, setSecretaryExotic] = useState([]);
  const [SecretaryEndangered, setSecretaryEndangered] = useState([]);

  const arrSecretary = [];

  const [SecretaryEvergreenPhenology, setSecretaryEvergreenPhenology] = useState([]);
  const [SecretaryDeciduousPhenology, setSecretaryDeciduousPhenology] = useState([]);

  const [SecretarySemiDeciduousPhenology, setSecretarySemiDeciduousPhenology] = useState([]);


  const arrSecretaryPhenology = [];

  const [SecretaryLeastConcern, setSecretaryLeastConcern] = useState([]);
  const [SecretaryNotknown, setSecretaryNotknown] = useState([]);
  const [SecretaryNearThreatened, setSecretaryNearThreatened] = useState([]);
  const [SecretaryVulnerable, setSecretaryVulnerable] = useState([]);
  const [SecretaryCriticallyEndangered, setSecretaryCriticallyEndangered] = useState([]);
  const [SecretaryConservationDependent, setSecretaryConservationDependent] = useState([]);

  const arrSecretaryConservation = [];

  console.log("okokoko",arrSecretaryConservation)

  useEffect(() => {
    axios.get("https://afternoon-mountain-93761.herokuapp.com/secretary_club_Evergreen").then((res) => {
      console.log(res.data.length);
      setSecretaryEvergreen([res.data.length]);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/secretary_club_Deciduous").then((res) => {
      console.log(res.data.length);
      setSecretaryDeciduous(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/secretary_club_Endemic").then((res) => {
      console.log(res.data.length);
      setSecretaryEndemic(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/secretary_club_Indigenous").then((res) => {
      console.log(res.data.length);
      setSecretaryIndigenous(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/secretary_club_Exotic").then((res) => {
      console.log(res.data.length);
      setSecretaryExotic(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/secretary_club_Endangered").then((res) => {
      console.log(res.data.length);
      setSecretaryEndangered(res.data.length);
    });


    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/secretary_club_Evergreen").then((res) => {
      console.log(res.data.length);
      setSecretaryEvergreenPhenology([res.data.length]);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/secretary_club_Deciduous").then((res) => {
      console.log(res.data.length);
      setSecretaryDeciduousPhenology(res.data.length);
    });


    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/SecretaryLeastConcern").then(res => {
      console.log(res.data.length)
      setSecretaryLeastConcern(res.data.length)

    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/SecretaryNotknown").then(res => {
      console.log(res.data)
      setSecretaryNotknown(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/SecretaryNearThreatened").then(res => {
      console.log(res.data.length)
      setSecretaryNearThreatened(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/SecretaryVulnerable").then(res => {
      console.log(res.data.length)
      setSecretaryVulnerable(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/SecretaryCriticallyEndangered").then(res => {
      console.log(res.data.length)
      setSecretaryCriticallyEndangered(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/SecretaryConservationDependent").then(res => {
      console.log(res.data.length)
      setSecretaryConservationDependent(res.data.length)
    })

    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/semiDeciduous?Park=secretary_club").then((res) => {
      console.log(res.data.length);
      setSecretarySemiDeciduousPhenology(res.data.length);
    });
  }, []);


  arrSecretary.push(
    parseInt(SecretaryEvergreen),
    parseInt(SecretaryDeciduous),
    parseInt(SecretaryEndemic),
    parseInt(SecretaryIndigenous),
    parseInt(SecretaryExotic),
    parseInt(SecretaryEndangered)
  );

  arrSecretaryPhenology.push(
    parseInt(SecretaryEvergreenPhenology),
    parseInt(SecretaryDeciduousPhenology),
    parseInt(SecretarySemiDeciduousPhenology),


  )

  arrSecretaryConservation.push(
    parseInt(SecretaryLeastConcern),
    parseInt(SecretaryNotknown),
    parseInt(SecretaryNearThreatened),
    parseInt(SecretaryVulnerable),
    parseInt(SecretaryCriticallyEndangered),
    parseInt(SecretaryConservationDependent),
  )


  return (
    <div className="Secretary__Park">
      <SubBanner Title="Generate report" subTitle="Secretary Park" imgURL="https://images.unsplash.com/photo-1635886840360-a2d27a5826d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" />

      <div className="Secretary__Park-main" style={{ display: 'flex', placeItems: 'center', justifyContent: "space-around" }}>
        <DonutChart
          title="Secretary Park"
          values={arrSecretary}
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
          title="Secretary Park (Phenology)"
          values={arrSecretaryPhenology}
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
        <SecretaryTable />
      </div>

      <div style={{ padding: "50px" }}>
        <h2>Conservation Status</h2>
        <div style={{ display: 'flex', margin: "50px" }}>
          <DonutChart
            title="Secretary Park (conservation status)"
            values={arrSecretaryConservation}
            labels={[
              "Least Concern",
              "Not known",
              "Near Threatened",
              "Vulnerable",
              "Critically endangered",
              "Conservation dependent",
            ]}
          />
          <SecretaryTable_ConservationStatus />
        </div>

      </div>


    </div>
  )
}

export default Secretary_club
