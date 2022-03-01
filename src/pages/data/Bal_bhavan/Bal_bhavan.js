import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import SubBanner from "../../../Components/Common/BannerImage/SubBanner/SubBanner"
import Bal_bhavanTable_ConservationStatus from "../../../Components/Common/MUI-table/Bal_bhavan/conservartionStatus/Bal_bhavanTable_ConservationStatus";
import Bal_bhavanTable from "../../../Components/Common/MUI-table/Bal_bhavan/Bal_bhavanTable"
import DonutChart from "../../../Components/DashbaordComponents/Dashboard_donut/DonutChart";

function Bal_bhavan() {

  const [Bal_bhavanData, setBal_bhavanData] = useState([]);
  const [Bal_bhavanEvergreen, setBal_bhavanEvergreen] = useState([]);
  const [Bal_bhavanDeciduous, setBal_bhavanDeciduous] = useState([]);
  const [Bal_bhavanEndemic, setBal_bhavanEndemic] = useState([]);
  const [Bal_bhavanIndigenous, setBal_bhavanIndigenous] = useState([]);
  const [Bal_bhavanExotic, setBal_bhavanExotic] = useState([]);
  const [Bal_bhavanEndangered, setBal_bhavanEndangered] = useState([]);

  const arrBal_bhavan = [];

  const [Bal_bhavanEvergreenPhenology, setBal_bhavanEvergreenPhenology] = useState([]);
  const [Bal_bhavanDeciduousPhenology, setBal_bhavanDeciduousPhenology] = useState([]);

  const [Bal_bhavanSemiDeciduousPhenology, setBal_bhavanSemiDeciduousPhenology] = useState([]);

  const arrBal_bhavanPhenology = [];

  const [Bal_bhavanLeastConcern, setBal_bhavanLeastConcern] = useState([]);
  const [Bal_bhavanNotknown, setBal_bhavanNotknown] = useState([]);
  const [Bal_bhavanNearThreatened, setBal_bhavanNearThreatened] = useState([]);
  const [Bal_bhavanVulnerable, setBal_bhavanVulnerable] = useState([]);
  const [Bal_bhavanCriticallyEndangered, setBal_bhavanCriticallyEndangered] = useState([]);
  const [Bal_bhavanConservationDependent, setBal_bhavanConservationDependent] = useState([]);

  const arrBal_bhavanConservation = [];

  console.log("okokoko",arrBal_bhavanConservation)

  useEffect(() => {
    axios.get("https://afternoon-mountain-93761.herokuapp.com/bal_bhavan_Evergreen").then((res) => {
      console.log(res.data.length);
      setBal_bhavanEvergreen([res.data.length]);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/bal_bhavan_Deciduous").then((res) => {
      console.log(res.data.length);
      setBal_bhavanDeciduous(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/bal_bhavan_Endemic").then((res) => {
      console.log(res.data.length);
      setBal_bhavanEndemic(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/bal_bhavan_Indigenous").then((res) => {
      console.log(res.data.length);
      setBal_bhavanIndigenous(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/bal_bhavan_Exotic").then((res) => {
      console.log(res.data.length);
      setBal_bhavanExotic(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/bal_bhavan_Endangered").then((res) => {
      console.log(res.data.length);
      setBal_bhavanEndangered(res.data.length);
    });


    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/bal_bhavan_Evergreen").then((res) => {
      console.log(res.data.length);
      setBal_bhavanEvergreenPhenology([res.data.length]);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/bal_bhavan_Deciduous").then((res) => {
      console.log(res.data.length);
      setBal_bhavanDeciduousPhenology(res.data.length);
    });


    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Bal_bhavanLeastConcern").then(res => {
      console.log(res.data.length)
      setBal_bhavanLeastConcern(res.data.length)

    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Bal_bhavanNotknown").then(res => {
      console.log(res.data)
      setBal_bhavanNotknown(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Bal_bhavanNearThreatened").then(res => {
      console.log(res.data.length)
      setBal_bhavanNearThreatened(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Bal_bhavanVulnerable").then(res => {
      console.log(res.data.length)
      setBal_bhavanVulnerable(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Bal_bhavanCriticallyEndangered").then(res => {
      console.log(res.data.length)
      setBal_bhavanCriticallyEndangered(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Bal_bhavanConservationDependent").then(res => {
      console.log(res.data.length)
      setBal_bhavanConservationDependent(res.data.length)
    })

    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/semiDeciduous?Park=bal_bhavan").then((res) => {
      console.log(res.data.length);
      setBal_bhavanSemiDeciduousPhenology(res.data.length);
    });
    
  }, []);


  arrBal_bhavan.push(
    parseInt(Bal_bhavanEvergreen),
    parseInt(Bal_bhavanDeciduous),
    parseInt(Bal_bhavanEndemic),
    parseInt(Bal_bhavanIndigenous),
    parseInt(Bal_bhavanExotic),
    parseInt(Bal_bhavanEndangered)
  );

  arrBal_bhavanPhenology.push(
    parseInt(Bal_bhavanEvergreenPhenology),
    parseInt(Bal_bhavanDeciduousPhenology),
    parseInt(Bal_bhavanSemiDeciduousPhenology),

  )

  arrBal_bhavanConservation.push(
    parseInt(Bal_bhavanLeastConcern),
    parseInt(Bal_bhavanNotknown),
    parseInt(Bal_bhavanNearThreatened),
    parseInt(Bal_bhavanVulnerable),
    parseInt(Bal_bhavanCriticallyEndangered),
    parseInt(Bal_bhavanConservationDependent),
  )


  return (
    <div className="Bal_bhavan__Park">
      <SubBanner Title="Generate report" subTitle="Bal_bhavan Park" imgURL="https://images.unsplash.com/photo-1635886840360-a2d27a5826d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" />

      <div className="Bal_bhavan__Park-main" style={{ display: 'flex', placeItems: 'center', justifyContent: "space-around" }}>
        <DonutChart
          title="Bal_bhavan Park"
          values={arrBal_bhavan}
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
          title="Bal_bhavan Park (Phenology)"
          values={arrBal_bhavanPhenology}
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
        <Bal_bhavanTable />
      </div>

      <div style={{ padding: "50px" }}>
        <h2>Conservation Status</h2>
        <div style={{ display: 'flex', margin: "50px" }}>
          <DonutChart
            title="Bal_bhavan Park (conservation status)"
            values={arrBal_bhavanConservation}
            labels={[
              "Least Concern",
              "Not known",
              "Near Threatened",
              "Vulnerable",
              "Critically endangered",
              "Conservation dependent",
            ]}
          />
          <Bal_bhavanTable_ConservationStatus />
        </div>

      </div>


    </div>
  )
}

export default Bal_bhavan
