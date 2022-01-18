import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import SubBanner from "../../../Components/Common/BannerImage/SubBanner/SubBanner"
import WorkersTable_ConservationStatus from "../../../Components/Common/MUI-table/WorkersPark/conservartionStatus/WorkersTable_ConservationStatus";
import WorkersTable from "../../../Components/Common/MUI-table/WorkersPark/WorkersTable"
import DonutChart from "../../../Components/DashbaordComponents/Dashboard_donut/DonutChart";

function Workers_Park() {

  const [WorkersData, setWorkersData] = useState([]);
  const [WorkersEvergreen, setWorkersEvergreen] = useState([]);
  const [WorkersDeciduous, setWorkersDeciduous] = useState([]);
  const [WorkersEndemic, setWorkersEndemic] = useState([]);
  const [WorkersIndigenous, setWorkersIndigenous] = useState([]);
  const [WorkersExotic, setWorkersExotic] = useState([]);
  const [WorkersEndangered, setWorkersEndangered] = useState([]);

  const arrWorkers = [];

  const [WorkersEvergreenPhenology, setWorkersEvergreenPhenology] = useState([]);
  const [WorkersDeciduousPhenology, setWorkersDeciduousPhenology] = useState([]);

  const arrWorkersPhenology = [];

  const [WorkersLeastConcern, setLeastConcern] = useState([]);
  const [WorkersNotknown, setWorkersNotknown] = useState([]);
  const [WorkersNearThreatened, setWorkersNearThreatened] = useState([]);
  const [WorkersVulnerable, setWorkersVulnerable] = useState([]);
  const [WorkersCriticallyEndangered, setWorkersCriticallyEndangered] = useState([]);
  const [WorkersConservationDependent, setWorkersConservationDependent] = useState([]);

  const arrWorkersConservation = [];

  useEffect(() => {
    axios.get("https://afternoon-mountain-93761.herokuapp.com/WorkersEvergreen").then((res) => {
      console.log(res.data.length);
      setWorkersEvergreen([res.data.length]);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/WorkersDeciduous").then((res) => {
      console.log(res.data.length);
      setWorkersDeciduous(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/WorkersEndemic").then((res) => {
      console.log(res.data.length);
      setWorkersEndemic(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/WorkersIndigenous").then((res) => {
      console.log(res.data.length);
      setWorkersIndigenous(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/WorkersExotic").then((res) => {
      console.log(res.data.length);
      setWorkersExotic(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/WorkersEndangered").then((res) => {
      console.log(res.data.length);
      setWorkersEndangered(res.data.length);
    });


    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/WorkersEvergreen").then((res) => {
      console.log(res.data.length);
      setWorkersEvergreenPhenology([res.data.length]);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/WorkersDeciduous").then((res) => {
      console.log(res.data.length);
      setWorkersDeciduousPhenology(res.data.length);
    });

    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/WorkersLeastConcern").then(res => {
      console.log(res.data.length)
      setLeastConcern(res.data.length)

    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/WorkersNotknown").then(res => {
      console.log(res.data)
      setWorkersNotknown(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/WorkersNearThreatened").then(res => {
      console.log(res.data.length)
      setWorkersNearThreatened(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/WorkersVulnerable").then(res => {
      console.log(res.data.length)
      setWorkersVulnerable(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/WorkersCriticallyEndangered").then(res => {
      console.log(res.data.length)
      setWorkersCriticallyEndangered(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/WorkersConservationDependent").then(res => {
      console.log(res.data.length)
      setWorkersConservationDependent(res.data.length)
    })

    }, []);


    arrWorkers.push(
      parseInt(WorkersEvergreen),
      parseInt(WorkersDeciduous),
      parseInt(WorkersEndemic),
      parseInt(WorkersIndigenous),
      parseInt(WorkersExotic),
      parseInt(WorkersEndangered)
    );

    arrWorkersPhenology.push(
      parseInt(WorkersEvergreenPhenology),
      parseInt(WorkersDeciduousPhenology),

    )

    arrWorkersConservation.push(
      parseInt(WorkersLeastConcern),
      parseInt(WorkersNotknown),
      parseInt(WorkersNearThreatened),
      parseInt(WorkersVulnerable),
      parseInt(WorkersCriticallyEndangered),
      parseInt(WorkersConservationDependent),
    )


    return (
      <div className="Workers__Park">
        <SubBanner Title="Generate report" subTitle="Workers Park" imgURL="https://images.unsplash.com/photo-1635886840360-a2d27a5826d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" />

        <div className="Workers__Park-main" style={{ display: 'flex', placeItems: 'center', justifyContent: "space-around" }}>
          <DonutChart
            title="Workers Park"
            values={arrWorkers}
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
            title="Workers Park (Phenology)"
            values={arrWorkersPhenology}
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
          <WorkersTable />
        </div>

        <div style={{ padding: "50px" }}>
          <h2>Conservation Status</h2>
          <div style={{ display: 'flex', margin: "50px" }}>
            <DonutChart
              title="Workers Park (conservation status)"
              values={arrWorkersConservation}
              labels={[
                "Least Concern",
                "Not known",
                "Near Threatened",
                "Vulnerable",
                "Critically endangered",
                "Conservation dependent",
              ]}
            />
            <WorkersTable_ConservationStatus />
          </div>

        </div>


      </div>
    )
  }

export default Workers_Park
