/* eslint-disable no-unused-vars */
import Sidebar from "../Common/SidebarComponent/Sidebar";
import "./DashboardComponents.scss";
import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import DonutChart from "./Dashboard_donut/DonutChart";
import axios from "axios";

function DashboardComponentsConservationStatus() {
    const [dogLeastConcern, setdogLeastConcern] = useState([]);
    const [dogNotknown, setdogNotknown] = useState([]);
    const [dogNearThreatened, setdogNearThreatened] = useState([]);
    const [dogVulnerable, setdogVulnerable] = useState([]);
    const [dogCriticallyEndangered, setdogCriticallyEndangered] = useState([]);
    const [dogConservationDependent, setdogConservationDependent] = useState([]);
  
    const arrDogConservation = [];
  // snake Park

  const [SnakeLeastConcern, setSnakeLeastConcern] = useState([]);
    const [SnakeNotknown, setSnakeNotknown] = useState([]);
    const [SnakeNearThreatened, setSnakeNearThreatened] = useState([]);
    const [SnakeVulnerable, setSnakeVulnerable] = useState([]);
    const [SnakeCriticallyEndangered, setSnakeCriticallyEndangered] = useState([]);
    const [SnakeConservationDependent, setSnakeConservationDependent] = useState([]);

  const arrSnakeConservation = [];

    // rose Park

    const [RoseLeastConcern, setRoseLeastConcern] = useState([]);
  const [RoseNotknown, setRoseNotknown] = useState([]);
  const [RoseNearThreatened, setRoseNearThreatened] = useState([]);
  const [RoseVulnerable, setRoseVulnerable] = useState([]);
  const [RoseCriticallyEndangered, setRoseCriticallyEndangered] = useState([]);
  const [RoseConservationDependent, setRoseConservationDependent] = useState([]);

  const arrRoseConservation = [];

    // console.warn(arrRose)

    // triangular Park

    const [TriangularLeastConcern, setTriangularLeastConcern] = useState([]);
  const [TriangularNotknown, setTriangularNotknown] = useState([]);
  const [TriangularNearThreatened, setTriangularNearThreatened] = useState([]);
  const [TriangularVulnerable, setTriangularVulnerable] = useState([]);
  const [TriangularCriticallyEndangered, setTriangularCriticallyEndangered] = useState([]);
  const [TriangularConservationDependent, setTriangularConservationDependent] = useState([]);

  const arrTriangularConservation = [];

    // Circular Park

    const [CircularLeastConcern, setCircularLeastConcern] = useState([]);
  const [CircularNotknown, setCircularNotknown] = useState([]);
  const [CircularNearThreatened, setCircularNearThreatened] = useState([]);
  const [CircularVulnerable, setCircularVulnerable] = useState([]);
  const [CircularCriticallyEndangered, setCircularCriticallyEndangered] = useState([]);
  const [CircularConservationDependent, setCircularConservationDependent] = useState([]);

  const arrCircularConservation = [];

    // Workers Park

    const [WorkersLeastConcern, setWorkersLeastConcern] = useState([]);
    const [WorkersNotknown, setWorkersNotknown] = useState([]);
    const [WorkersNearThreatened, setWorkersNearThreatened] = useState([]);
    const [WorkersVulnerable, setWorkersVulnerable] = useState([]);
    const [WorkersCriticallyEndangered, setWorkersCriticallyEndangered] = useState([]);
    const [WorkersConservationDependent, setWorkersConservationDependent] = useState([]);
  
    const arrWorkersConservation = [];

    // Park1

    const [Park_1LeastConcern, setPark_1LeastConcern] = useState([]);
  const [Park_1Notknown, setPark_1Notknown] = useState([]);
  const [Park_1NearThreatened, setPark_1NearThreatened] = useState([]);
  const [Park_1Vulnerable, setPark_1Vulnerable] = useState([]);
  const [Park_1CriticallyEndangered, setPark_1CriticallyEndangered] = useState([]);
  const [Park_1ConservationDependent, setPark_1ConservationDependent] = useState([]);

  const arrPark_1Conservation = [];

    // Park2

    const [Park_2LeastConcern, setPark_2LeastConcern] = useState([]);
  const [Park_2Notknown, setPark_2Notknown] = useState([]);
  const [Park_2NearThreatened, setPark_2NearThreatened] = useState([]);
  const [Park_2Vulnerable, setPark_2Vulnerable] = useState([]);
  const [Park_2CriticallyEndangered, setPark_2CriticallyEndangered] = useState([]);
  const [Park_2ConservationDependent, setPark_2ConservationDependent] = useState([]);

  const arrPark_2Conservation = [];

    // Edward

    const [EdwardLeastConcern, setEdwardLeastConcern] = useState([]);
  const [EdwardNotknown, setEdwardNotknown] = useState([]);
  const [EdwardNearThreatened, setEdwardNearThreatened] = useState([]);
  const [EdwardVulnerable, setEdwardVulnerable] = useState([]);
  const [EdwardCriticallyEndangered, setEdwardCriticallyEndangered] = useState([]);
  const [EdwardConservationDependent, setEdwardConservationDependent] = useState([]);

  const arrEdwardConservation = [];

    // Victoria

    const [VictoriaLeastConcern, setVictoriaLeastConcern] = useState([]);
  const [VictoriaNotknown, setVictoriaNotknown] = useState([]);
  const [VictoriaNearThreatened, setVictoriaNearThreatened] = useState([]);
  const [VictoriaVulnerable, setVictoriaVulnerable] = useState([]);
  const [VictoriaCriticallyEndangered, setVictoriaCriticallyEndangered] = useState([]);
  const [VictoriaConservationDependent, setVictoriaConservationDependent] = useState([]);

  const arrVictoriaConservation = [];

  const [WineLeastConcern, setWineLeastConcern] = useState([]);
  const [WineNotknown, setWineNotknown] = useState([]);
  const [WineNearThreatened, setWineNearThreatened] = useState([]);
  const [WineVulnerable, setWineVulnerable] = useState([]);
  const [WineCriticallyEndangered, setWineCriticallyEndangered] = useState([]);
  const [WineConservationDependent, setWineConservationDependent] = useState([]);

  const arrWineConservation = [];

  useEffect(() => {
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/dogLeastConcern").then(res => {
      console.log(res.data.length)
      setdogLeastConcern(res.data.length)

    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/dogNotknown").then(res => {
      console.log(res.data)
      setdogNotknown(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/dogNearThreatened").then(res => {
      console.log(res.data.length)
      setdogNearThreatened(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/dogVulnerable").then(res => {
      console.log(res.data.length)
      setdogVulnerable(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/dogCriticallyEndangered").then(res => {
      console.log(res.data.length)
      setdogCriticallyEndangered(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/dogConservationDependent").then(res => {
      console.log(res.data.length)
      setdogConservationDependent(res.data.length)
    })

    // snakepark

    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/SnakeLeastConcern").then(res => {
          console.log(res.data.length)
          setSnakeLeastConcern(res.data.length)

        })
        axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/SnakeNotknown").then(res => {
          console.log(res.data)
          setSnakeNotknown(res.data.length)
        })
        axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/SnakeNearThreatened").then(res => {
          console.log(res.data.length)
          setSnakeNearThreatened(res.data.length)
        })
        axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/SnakeVulnerable").then(res => {
          console.log(res.data.length)
          setSnakeVulnerable(res.data.length)
        })
        axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/SnakeCriticallyEndangered").then(res => {
          console.log(res.data.length)
          setSnakeCriticallyEndangered(res.data.length)
        })
        axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/SnakeConservationDependent").then(res => {
          console.log(res.data.length)
          setSnakeConservationDependent(res.data.length)
        })

    // rosepark

    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/RoseLeastConcern").then(res => {
      console.log(res.data.length)
      setRoseLeastConcern(res.data.length)

    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/RoseNotknown").then(res => {
      console.log(res.data)
      setRoseNotknown(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/RoseNearThreatened").then(res => {
      console.log(res.data.length)
      setRoseNearThreatened(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/RoseVulnerable").then(res => {
      console.log(res.data.length)
      setRoseVulnerable(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/RoseCriticallyEndangered").then(res => {
      console.log(res.data.length)
      setRoseCriticallyEndangered(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/RoseConservationDependent").then(res => {
      console.log(res.data.length)
      setRoseConservationDependent(res.data.length)
    })

    // Triangular park

    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/TriangularLeastConcern").then(res => {
      console.log(res.data.length)
      setTriangularLeastConcern(res.data.length)

    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/TriangularNotknown").then(res => {
      console.log(res.data)
      setTriangularNotknown(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/TriangularNearThreatened").then(res => {
      console.log(res.data.length)
      setTriangularNearThreatened(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/TriangularVulnerable").then(res => {
      console.log(res.data.length)
      setTriangularVulnerable(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/TriangularCriticallyEndangered").then(res => {
      console.log(res.data.length)
      setTriangularCriticallyEndangered(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/TriangularConservationDependent").then(res => {
      console.log(res.data.length)
      setTriangularConservationDependent(res.data.length)
    })

    // Circular park

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

    // Workers park

    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/WorkersLeastConcern").then(res => {
      console.log(res.data.length)
      setWorkersLeastConcern(res.data.length)

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

    // park1

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

    // park2

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

    // edward

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


    // Victoria

    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/VictoriaLeastConcern").then(res => {
      console.log(res.data.length)
      setVictoriaLeastConcern(res.data.length)

    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/VictoriaNotknown").then(res => {
      console.log(res.data)
      setVictoriaNotknown(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/VictoriaNearThreatened").then(res => {
      console.log(res.data.length)
      setVictoriaNearThreatened(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/VictoriaVulnerable").then(res => {
      console.log(res.data.length)
      setVictoriaVulnerable(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/VictoriaCriticallyEndangered").then(res => {
      console.log(res.data.length)
      setVictoriaCriticallyEndangered(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/VictoriaConservationDependent").then(res => {
      console.log(res.data.length)
      setVictoriaConservationDependent(res.data.length)
    })

    // Wine

    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/WineLeastConcern").then(res => {
      console.log(res.data.length)
      setWineLeastConcern(res.data.length)

    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/WineNotknown").then(res => {
      console.log(res.data)
      setWineNotknown(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/WineNearThreatened").then(res => {
      console.log(res.data.length)
      setWineNearThreatened(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/WineVulnerable").then(res => {
      console.log(res.data.length)
      setWineVulnerable(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/WineCriticallyEndangered").then(res => {
      console.log(res.data.length)
      setWineCriticallyEndangered(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/WineConservationDependent").then(res => {
      console.log(res.data.length)
      setWineConservationDependent(res.data.length)
    })

  }, []);

  arrDogConservation.push(
    parseInt(dogLeastConcern),
    parseInt(dogNotknown),
    parseInt(dogNearThreatened),
    parseInt(dogVulnerable),
    parseInt(dogCriticallyEndangered),
    parseInt(dogConservationDependent),
  )
  // snake Park
  arrSnakeConservation.push(
    parseInt(SnakeLeastConcern),
    parseInt(SnakeNotknown),
    parseInt(SnakeNearThreatened),
    parseInt(SnakeVulnerable),
    parseInt(SnakeCriticallyEndangered),
    parseInt(SnakeConservationDependent),
  )
  // rose Park
  arrRoseConservation.push(
    parseInt(RoseLeastConcern),
    parseInt(RoseNotknown),
    parseInt(RoseNearThreatened),
    parseInt(RoseVulnerable),
    parseInt(RoseCriticallyEndangered),
    parseInt(RoseConservationDependent),
  )
   //  Triangular Park
   arrTriangularConservation.push(
    parseInt(TriangularLeastConcern),
    parseInt(TriangularNotknown),
    parseInt(TriangularNearThreatened),
    parseInt(TriangularVulnerable),
    parseInt(TriangularCriticallyEndangered),
    parseInt(TriangularConservationDependent),
  )

  //  Circular Park
  arrCircularConservation.push(
    parseInt(CircularLeastConcern),
    parseInt(CircularNotknown),
    parseInt(CircularNearThreatened),
    parseInt(CircularVulnerable),
    parseInt(CircularCriticallyEndangered),
    parseInt(CircularConservationDependent),
  )
  
  //  Workers Park
  arrWorkersConservation.push(
    parseInt(WorkersLeastConcern),
    parseInt(WorkersNotknown),
    parseInt(WorkersNearThreatened),
    parseInt(WorkersVulnerable),
    parseInt(WorkersCriticallyEndangered),
    parseInt(WorkersConservationDependent),
  )

  // Park1
  arrPark_1Conservation.push(
    parseInt(Park_1LeastConcern),
    parseInt(Park_1Notknown),
    parseInt(Park_1NearThreatened),
    parseInt(Park_1Vulnerable),
    parseInt(Park_1CriticallyEndangered),
    parseInt(Park_1ConservationDependent),
  )

  // Park2
  arrPark_2Conservation.push(
    parseInt(Park_2LeastConcern),
    parseInt(Park_2Notknown),
    parseInt(Park_2NearThreatened),
    parseInt(Park_2Vulnerable),
    parseInt(Park_2CriticallyEndangered),
    parseInt(Park_2ConservationDependent),
  )

  // edward
  arrEdwardConservation.push(
    parseInt(EdwardLeastConcern),
    parseInt(EdwardNotknown),
    parseInt(EdwardNearThreatened),
    parseInt(EdwardVulnerable),
    parseInt(EdwardCriticallyEndangered),
    parseInt(EdwardConservationDependent),
  )

  // Victoria
  arrVictoriaConservation.push(
    parseInt(VictoriaLeastConcern),
    parseInt(VictoriaNotknown),
    parseInt(VictoriaNearThreatened),
    parseInt(VictoriaVulnerable),
    parseInt(VictoriaCriticallyEndangered),
    parseInt(VictoriaConservationDependent),
  )

  // Wine
  arrWineConservation.push(
    parseInt(WineLeastConcern),
    parseInt(WineNotknown),
    parseInt(WineNearThreatened),
    parseInt(WineVulnerable),
    parseInt(WineCriticallyEndangered),
    parseInt(WineConservationDependent),
  )

  return (
    <div className="dashboard__component">
      <center>
        <h1>Zone wise breakdown (Conservation Status)</h1>
      </center>
      <div className="dashboard__component--main">
        <div>
          {/* {console.log(dogEvergreen,dogDeciduous,dogEndemic,dogIndigenous,dogExotic,dogEndangered)} */}
          <DonutChart
            title="Dog Park (conservation status)"
            values={arrDogConservation}
            labels={[
              "Least Concern",
              "Not known",
              "Near Threatened",
              "Vulnerable",
              "Critically endangered",
              "Conservation dependent",
            ]}
          />
        </div>
        <div>
        <DonutChart
                  title="Snake Park (conservation status)"
                  values={arrSnakeConservation}
                  labels={[
                    "Least Concern",
                    "Not known",
                    "Near Threatened",
                    "Vulnerable",
                    "Critically endangered",
                    "Conservation dependent",
                  ]}
                />
        </div>
        <div>
          <DonutChart
            title="Rose Park (conservation status)"
            values={arrRoseConservation}
            labels={[
              "Least Concern",
              "Not known",
              "Near Threatened",
              "Vulnerable",
              "Critically endangered",
              "Conservation dependent",
            ]}
          />
        </div>
        {/* fixe */}
        </div>
        <div className="dashboard__component--main">
        <div>
        <DonutChart
            title="Triangular Park (conservation status)"
            values={arrTriangularConservation}
            labels={[
              "Least Concern",
              "Not known",
              "Near Threatened",
              "Vulnerable",
              "Critically endangered",
              "Conservation dependent",
            ]}
          />
        </div>
        <div>
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
        </div>
        <div>
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
        </div>
        </div>
        <div className="dashboard__component--main">
        <div>
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
        </div>

        <div>
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
        </div>

        <div>
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
        </div>
</div>
<div className="dashboard__component--main">
        <div>
        <DonutChart
            title="Victoria Park (conservation status)"
            values={arrVictoriaConservation}
            labels={[
              "Least Concern",
              "Not known",
              "Near Threatened",
              "Vulnerable",
              "Critically endangered",
              "Conservation dependent",
            ]}
          />
        </div>
        <div>
        <DonutChart
            title="Wine Park (conservation status)"
            values={arrWineConservation}
            labels={[
              "Least Concern",
              "Not known",
              "Near Threatened",
              "Vulnerable",
              "Critically endangered",
              "Conservation dependent",
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default DashboardComponentsConservationStatus;
