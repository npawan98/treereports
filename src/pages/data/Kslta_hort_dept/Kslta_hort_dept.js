import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import SubBanner from "../../../Components/Common/BannerImage/SubBanner/SubBanner"
import Kslta_hort_deptTable_ConservationStatus from "../../../Components/Common/MUI-table/Kslta_hort_dept/conservartionStatus/Kslta_hort_deptTable_ConservationStatus";
import Kslta_hort_deptTable from "../../../Components/Common/MUI-table/Kslta_hort_dept/Kslta_hort_deptTable"
import DonutChart from "../../../Components/DashbaordComponents/Dashboard_donut/DonutChart";

function Kslta_hort_dept() {

  const [Kslta_hort_deptData, setKslta_hort_deptData] = useState([]);
  const [Kslta_hort_deptEvergreen, setKslta_hort_deptEvergreen] = useState([]);
  const [Kslta_hort_deptDeciduous, setKslta_hort_deptDeciduous] = useState([]);
  const [Kslta_hort_deptEndemic, setKslta_hort_deptEndemic] = useState([]);
  const [Kslta_hort_deptIndigenous, setKslta_hort_deptIndigenous] = useState([]);
  const [Kslta_hort_deptExotic, setKslta_hort_deptExotic] = useState([]);
  const [Kslta_hort_deptEndangered, setKslta_hort_deptEndangered] = useState([]);

  const arrKslta_hort_dept = [];

  const [Kslta_hort_deptEvergreenPhenology, setKslta_hort_deptEvergreenPhenology] = useState([]);
  const [Kslta_hort_deptDeciduousPhenology, setKslta_hort_deptDeciduousPhenology] = useState([]);

  const arrKslta_hort_deptPhenology = [];

  const [Kslta_hort_deptLeastConcern, setKslta_hort_deptLeastConcern] = useState([]);
  const [Kslta_hort_deptNotknown, setKslta_hort_deptNotknown] = useState([]);
  const [Kslta_hort_deptNearThreatened, setKslta_hort_deptNearThreatened] = useState([]);
  const [Kslta_hort_deptVulnerable, setKslta_hort_deptVulnerable] = useState([]);
  const [Kslta_hort_deptCriticallyEndangered, setKslta_hort_deptCriticallyEndangered] = useState([]);
  const [Kslta_hort_deptConservationDependent, setKslta_hort_deptConservationDependent] = useState([]);

  const arrKslta_hort_deptConservation = [];

  console.log("okokoko",arrKslta_hort_deptConservation)

  useEffect(() => {
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Kslta_hort_dept_Evergreen").then((res) => {
      console.log(res.data.length);
      setKslta_hort_deptEvergreen([res.data.length]);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Kslta_hort_dept_Deciduous").then((res) => {
      console.log(res.data.length);
      setKslta_hort_deptDeciduous(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Kslta_hort_dept_Endemic").then((res) => {
      console.log(res.data.length);
      setKslta_hort_deptEndemic(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Kslta_hort_dept_Indigenous").then((res) => {
      console.log(res.data.length);
      setKslta_hort_deptIndigenous(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Kslta_hort_dept_Exotic").then((res) => {
      console.log(res.data.length);
      setKslta_hort_deptExotic(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Kslta_hort_dept_Endangered").then((res) => {
      console.log(res.data.length);
      setKslta_hort_deptEndangered(res.data.length);
    });


    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/Kslta_hort_dept_Evergreen").then((res) => {
      console.log(res.data.length);
      setKslta_hort_deptEvergreenPhenology([res.data.length]);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/Kslta_hort_dept_Deciduous").then((res) => {
      console.log(res.data.length);
      setKslta_hort_deptDeciduousPhenology(res.data.length);
    });


    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Kslta_hort_deptLeastConcern").then(res => {
      console.log(res.data.length)
      setKslta_hort_deptLeastConcern(res.data.length)

    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Kslta_hort_deptNotknown").then(res => {
      console.log(res.data)
      setKslta_hort_deptNotknown(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Kslta_hort_deptNearThreatened").then(res => {
      console.log(res.data.length)
      setKslta_hort_deptNearThreatened(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Kslta_hort_deptVulnerable").then(res => {
      console.log(res.data.length)
      setKslta_hort_deptVulnerable(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Kslta_hort_deptCriticallyEndangered").then(res => {
      console.log(res.data.length)
      setKslta_hort_deptCriticallyEndangered(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Kslta_hort_deptConservationDependent").then(res => {
      console.log(res.data.length)
      setKslta_hort_deptConservationDependent(res.data.length)
    })
  }, []);


  arrKslta_hort_dept.push(
    parseInt(Kslta_hort_deptEvergreen),
    parseInt(Kslta_hort_deptDeciduous),
    parseInt(Kslta_hort_deptEndemic),
    parseInt(Kslta_hort_deptIndigenous),
    parseInt(Kslta_hort_deptExotic),
    parseInt(Kslta_hort_deptEndangered)
  );

  arrKslta_hort_deptPhenology.push(
    parseInt(Kslta_hort_deptEvergreenPhenology),
    parseInt(Kslta_hort_deptDeciduousPhenology),

  )

  arrKslta_hort_deptConservation.push(
    parseInt(Kslta_hort_deptLeastConcern),
    parseInt(Kslta_hort_deptNotknown),
    parseInt(Kslta_hort_deptNearThreatened),
    parseInt(Kslta_hort_deptVulnerable),
    parseInt(Kslta_hort_deptCriticallyEndangered),
    parseInt(Kslta_hort_deptConservationDependent),
  )


  return (
    <div className="Kslta_hort_dept__Park">
      <SubBanner Title="Generate report" subTitle="Kslta_hort_dept Park" imgURL="https://images.unsplash.com/photo-1635886840360-a2d27a5826d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" />

      <div className="Kslta_hort_dept__Park-main" style={{ display: 'flex', placeItems: 'center', justifyContent: "space-around" }}>
        <DonutChart
          title="Kslta_hort_dept Park"
          values={arrKslta_hort_dept}
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
          title="Kslta_hort_dept Park (Phenology)"
          values={arrKslta_hort_deptPhenology}
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
        <Kslta_hort_deptTable />
      </div>

      <div style={{ padding: "50px" }}>
        <h2>Conservation Status</h2>
        <div style={{ display: 'flex', margin: "50px" }}>
          <DonutChart
            title="Kslta_hort_dept Park (conservation status)"
            values={arrKslta_hort_deptConservation}
            labels={[
              "Least Concern",
              "Not known",
              "Near Threatened",
              "Vulnerable",
              "Critically endangered",
              "Conservation dependent",
            ]}
          />
          <Kslta_hort_deptTable_ConservationStatus />
        </div>

      </div>


    </div>
  )
}

export default Kslta_hort_dept
