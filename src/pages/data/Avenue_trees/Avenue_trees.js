import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import SubBanner from "../../../Components/Common/BannerImage/SubBanner/SubBanner"
import Avenue_treesTable_ConservationStatus from "../../../Components/Common/MUI-table/Avenue_trees/conservartionStatus/Avenue_treesTable_ConservationStatus";
import Avenue_treesTable from "../../../Components/Common/MUI-table/Avenue_trees/Avenue_treesTable"
import DonutChart from "../../../Components/DashbaordComponents/Dashboard_donut/DonutChart";

function Avenue_trees() {

  const [Avenue_treesData, setAvenue_treesData] = useState([]);
  const [Avenue_treesEvergreen, setAvenue_treesEvergreen] = useState([]);
  const [Avenue_treesDeciduous, setAvenue_treesDeciduous] = useState([]);
  const [Avenue_treesEndemic, setAvenue_treesEndemic] = useState([]);
  const [Avenue_treesIndigenous, setAvenue_treesIndigenous] = useState([]);
  const [Avenue_treesExotic, setAvenue_treesExotic] = useState([]);
  const [Avenue_treesEndangered, setAvenue_treesEndangered] = useState([]);

  const arrAvenue_trees = [];

  const [Avenue_treesEvergreenPhenology, setAvenue_treesEvergreenPhenology] = useState([]);
  const [Avenue_treesDeciduousPhenology, setAvenue_treesDeciduousPhenology] = useState([]);

  const arrAvenue_treesPhenology = [];

  const [Avenue_treesLeastConcern, setAvenue_treesLeastConcern] = useState([]);
  const [Avenue_treesNotknown, setAvenue_treesNotknown] = useState([]);
  const [Avenue_treesNearThreatened, setAvenue_treesNearThreatened] = useState([]);
  const [Avenue_treesVulnerable, setAvenue_treesVulnerable] = useState([]);
  const [Avenue_treesCriticallyEndangered, setAvenue_treesCriticallyEndangered] = useState([]);
  const [Avenue_treesConservationDependent, setAvenue_treesConservationDependent] = useState([]);

  const arrAvenue_treesConservation = [];

  console.log("okokoko",arrAvenue_treesConservation)

  useEffect(() => {
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Avenue_trees_Evergreen").then((res) => {
      console.log(res.data.length);
      setAvenue_treesEvergreen([res.data.length]);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Avenue_trees_Deciduous").then((res) => {
      console.log(res.data.length);
      setAvenue_treesDeciduous(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Avenue_trees_Endemic").then((res) => {
      console.log(res.data.length);
      setAvenue_treesEndemic(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Avenue_trees_Indigenous").then((res) => {
      console.log(res.data.length);
      setAvenue_treesIndigenous(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Avenue_trees_Exotic").then((res) => {
      console.log(res.data.length);
      setAvenue_treesExotic(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Avenue_trees_Endangered").then((res) => {
      console.log(res.data.length);
      setAvenue_treesEndangered(res.data.length);
    });


    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/Avenue_trees_Evergreen").then((res) => {
      console.log(res.data.length);
      setAvenue_treesEvergreenPhenology([res.data.length]);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/Avenue_trees_Deciduous").then((res) => {
      console.log(res.data.length);
      setAvenue_treesDeciduousPhenology(res.data.length);
    });


    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Avenue_treesLeastConcern").then(res => {
      console.log(res.data.length)
      setAvenue_treesLeastConcern(res.data.length)

    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Avenue_treesNotknown").then(res => {
      console.log(res.data)
      setAvenue_treesNotknown(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Avenue_treesNearThreatened").then(res => {
      console.log(res.data.length)
      setAvenue_treesNearThreatened(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Avenue_treesVulnerable").then(res => {
      console.log(res.data.length)
      setAvenue_treesVulnerable(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Avenue_treesCriticallyEndangered").then(res => {
      console.log(res.data.length)
      setAvenue_treesCriticallyEndangered(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Avenue_treesConservationDependent").then(res => {
      console.log(res.data.length)
      setAvenue_treesConservationDependent(res.data.length)
    })
  }, []);


  arrAvenue_trees.push(
    parseInt(Avenue_treesEvergreen),
    parseInt(Avenue_treesDeciduous),
    parseInt(Avenue_treesEndemic),
    parseInt(Avenue_treesIndigenous),
    parseInt(Avenue_treesExotic),
    parseInt(Avenue_treesEndangered)
  );

  arrAvenue_treesPhenology.push(
    parseInt(Avenue_treesEvergreenPhenology),
    parseInt(Avenue_treesDeciduousPhenology),

  )

  arrAvenue_treesConservation.push(
    parseInt(Avenue_treesLeastConcern),
    parseInt(Avenue_treesNotknown),
    parseInt(Avenue_treesNearThreatened),
    parseInt(Avenue_treesVulnerable),
    parseInt(Avenue_treesCriticallyEndangered),
    parseInt(Avenue_treesConservationDependent),
  )


  return (
    <div className="Avenue_trees__Park">
      <SubBanner Title="Generate report" subTitle="Avenue_trees Park" imgURL="https://images.unsplash.com/photo-1635886840360-a2d27a5826d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" />

      <div className="Avenue_trees__Park-main" style={{ display: 'flex', placeItems: 'center', justifyContent: "space-around" }}>
        <DonutChart
          title="Avenue_trees Park"
          values={arrAvenue_trees}
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
          title="Avenue_trees Park (Phenology)"
          values={arrAvenue_treesPhenology}
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
        <Avenue_treesTable />
      </div>

      <div style={{ padding: "50px" }}>
        <h2>Conservation Status</h2>
        <div style={{ display: 'flex', margin: "50px" }}>
          <DonutChart
            title="Avenue_trees Park (conservation status)"
            values={arrAvenue_treesConservation}
            labels={[
              "Least Concern",
              "Not known",
              "Near Threatened",
              "Vulnerable",
              "Critically endangered",
              "Conservation dependent",
            ]}
          />
          <Avenue_treesTable_ConservationStatus />
        </div>

      </div>


    </div>
  )
}

export default Avenue_trees
