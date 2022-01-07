/* eslint-disable no-unused-vars */
import Sidebar from "../Common/SidebarComponent/Sidebar";
import "./DashboardComponents.scss";
import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import DonutChart from "./Dashboard_donut/DonutChart";
import axios from "axios";
function DashboardComponents() {
  const [dogData, setDogData] = useState([]);
  const [dogEvergreen, setDogEvergreen] = useState([]);
  const [dogDeciduous, setDogDeciduous] = useState([]);
  const [dogEndemic, setDogEndemic] = useState([]);
  const [dogIndigenous, setDogIndigenous] = useState([]);
  const [dogExotic, setDogExotic] = useState([]);
  const [dogEndangered, setDogEndangered] = useState([]);

  const arrDog = [];
  // snake Park

  const [snakeEvergreen, setSnakeEvergreen] = useState([]);
  const [snakeDeciduous, setSnakeDeciduous] = useState([]);
  const [snakeEndemic, setSnakeEndemic] = useState([]);
  const [snakeIndigenous, setSnakeIndigenous] = useState([]);
  const [snakeExotic, setSnakeExotic] = useState([]);
  const [snakeEndangered, setSnakeEndangered] = useState([]);

  const arrSnake = [];

    // rose Park

    const [roseEvergreen, setRoseEvergreen] = useState([]);
    const [roseDeciduous, setRoseDeciduous] = useState([]);
    const [roseEndemic, setRoseEndemic] = useState([]);
    const [roseIndigenous, setRoseIndigenous] = useState([]);
    const [roseExotic, setRoseExotic] = useState([]);
    const [roseEndangered, setRoseEndangered] = useState([]);
  
    const arrRose = [];

    // console.warn(arrRose)

    // triangular Park

    const [triangularEvergreen, setTriangularEvergreen] = useState([]);
    const [triangularDeciduous, setTriangularDeciduous] = useState([]);
    const [triangularEndemic, setTriangularEndemic] = useState([]);
    const [triangularIndigenous, setTriangularIndigenous] = useState([]);
    const [triangularExotic, setTriangularExotic] = useState([]);
    const [triangularEndangered, setTriangularEndangered] = useState([]);
  
    const arrTriangular = [];

    // Circular Park

    const [circularEvergreen, setCircularEvergreen] = useState([]);
    const [circularDeciduous, setCircularDeciduous] = useState([]);
    const [circularEndemic, setCircularEndemic] = useState([]);
    const [circularIndigenous, setCircularIndigenous] = useState([]);
    const [circularExotic, setCircularExotic] = useState([]);
    const [circularEndangered, setCircularEndangered] = useState([]);
  
    const arrCircular = [];

    // Workers Park

    const [workersEvergreen, setWorkersEvergreen] = useState([]);
    const [workersDeciduous, setWorkersDeciduous] = useState([]);
    const [workersEndemic, setWorkersEndemic] = useState([]);
    const [workersIndigenous, setWorkersIndigenous] = useState([]);
    const [workersExotic, setWorkersExotic] = useState([]);
    const [workersEndangered, setWorkersEndangered] = useState([]);
  
    const arrWorkers = [];

    // Park1

    const [park1Evergreen, setPark1Evergreen] = useState([]);
    const [park1Deciduous, setPark1Deciduous] = useState([]);
    const [park1Endemic, setPark1Endemic] = useState([]);
    const [park1Indigenous, setPark1Indigenous] = useState([]);
    const [park1Exotic, setPark1Exotic] = useState([]);
    const [park1Endangered, setPark1Endangered] = useState([]);
  
    const arrPark1 = [];

    // Park2

    const [park2Evergreen, setPark2Evergreen] = useState([]);
    const [park2Deciduous, setPark2Deciduous] = useState([]);
    const [park2Endemic, setPark2Endemic] = useState([]);
    const [park2Indigenous, setPark2Indigenous] = useState([]);
    const [park2Exotic, setPark2Exotic] = useState([]);
    const [park2Endangered, setPark2Endangered] = useState([]);
  
    const arrPark2 = [];

    // Edward

    const [edwardEvergreen, setEdwardEvergreen] = useState([]);
    const [edwardDeciduous, setEdwardDeciduous] = useState([]);
    const [edwardEndemic, setEdwardEndemic] = useState([]);
    const [edwardIndigenous, setEdwardIndigenous] = useState([]);
    const [edwardExotic, setEdwardExotic] = useState([]);
    const [edwardEndangered, setEdwardEndangered] = useState([]);
  
    const arrEdward = [];

    // Victoria

    const [victoriaEvergreen, setVictoriaEvergreen] = useState([]);
    const [victoriaDeciduous, setVictoriaDeciduous] = useState([]);
    const [victoriaEndemic, setVictoriaEndemic] = useState([]);
    const [victoriaIndigenous, setVictoriaIndigenous] = useState([]);
    const [victoriaExotic, setVictoriaExotic] = useState([]);
    const [victoriaEndangered, setVictoriaEndangered] = useState([]);
  
    const arrVictoria = [];

    console.log("helloooo",arrVictoria);

  useEffect(() => {
    axios.get("https://afternoon-mountain-93761.herokuapp.com/dogEvergreen").then((res) => {
      console.log(res.data.length);
      setDogEvergreen([res.data.length]);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/dogDeciduous").then((res) => {
      console.log(res.data.length);
      setDogDeciduous(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/dogEndemic").then((res) => {
      console.log(res.data.length);
      setDogEndemic(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/dogIndigenous").then((res) => {
      console.log(res.data.length);
      setDogIndigenous(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/dogExotic").then((res) => {
      console.log(res.data.length);
      setDogExotic(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/dogEndangered").then((res) => {
      console.log(res.data.length);
      setDogEndangered(res.data.length);
    });

    // snakepark

    axios.get("https://afternoon-mountain-93761.herokuapp.com/snakeEvergreen").then((res) => {
      console.log(res.data.length);
      setSnakeEvergreen([res.data.length]);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/snakeDeciduous").then((res) => {
      console.log(res.data.length);
      setSnakeDeciduous(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/snakeEndemic").then((res) => {
      console.log(res.data.length);
      setSnakeEndemic(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/snakeIndigenous").then((res) => {
      console.log(res.data.length);
      setSnakeIndigenous(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/snakeExotic").then((res) => {
      console.log(res.data.length);
      setSnakeExotic(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/snakeEndangered").then((res) => {
      console.log(res.data.length);
      setSnakeEndangered(res.data.length);
    });

    // rosepark

    axios.get("http://localhost:8081/roseEvergreen").then((res) => {
      console.log(res.data.length);
      setRoseEvergreen([res.data.length]);
    });
    axios.get("http://localhost:8081/roseDeciduous").then((res) => {
      console.log(res.data.length);
      setRoseDeciduous(res.data.length);
    });
    axios.get("http://localhost:8081/roseEndemic").then((res) => {
      console.log(res.data.length);
      setRoseEndemic(res.data.length);
    });
    axios.get("http://localhost:8081/roseIndigenous").then((res) => {
      console.log(res.data.length);
      setRoseIndigenous(res.data.length);
    });
    axios.get("http://localhost:8081/roseExotic").then((res) => {
      console.log(res.data.length);
      setRoseExotic(res.data.length);
    });
    axios.get("http://localhost:8081/roseEndangered").then((res) => {
      console.log(res.data.length);
      setRoseEndangered(res.data.length);
    });

    // Triangular park

    axios.get("http://localhost:8081/triangularEvergreen").then((res) => {
      console.log(res.data.length);
      setTriangularEvergreen([res.data.length]);
    });
    axios.get("http://localhost:8081/triangularDeciduous").then((res) => {
      console.log(res.data.length);
      setTriangularDeciduous(res.data.length);
    });
    axios.get("http://localhost:8081/triangularEndemic").then((res) => {
      console.log(res.data.length);
      setTriangularEndemic(res.data.length);
    });
    axios.get("http://localhost:8081/triangularIndigenous").then((res) => {
      console.log(res.data.length);
      setTriangularIndigenous(res.data.length);
    });
    axios.get("http://localhost:8081/triangularExotic").then((res) => {
      console.log(res.data.length);
      setTriangularExotic(res.data.length);
    });
    axios.get("http://localhost:8081/triangularEndangered").then((res) => {
      console.log(res.data.length);
      setTriangularEndangered(res.data.length);
    });

    // Circular park

    axios.get("http://localhost:8081/circularEvergreen").then((res) => {
      console.log(res.data.length);
      setCircularEvergreen([res.data.length]);
    });
    axios.get("http://localhost:8081/circularDeciduous").then((res) => {
      console.log(res.data.length);
      setCircularDeciduous(res.data.length);
    });
    axios.get("http://localhost:8081/circularEndemic").then((res) => {
      console.log(res.data.length);
      setCircularEndemic(res.data.length);
    });
    axios.get("http://localhost:8081/circularIndigenous").then((res) => {
      console.log(res.data.length);
      setCircularIndigenous(res.data.length);
    });
    axios.get("http://localhost:8081/circularExotic").then((res) => {
      console.log(res.data.length);
      setCircularExotic(res.data.length);
    });
    axios.get("http://localhost:8081/circularEndangered").then((res) => {
      console.log(res.data.length);
      setCircularEndangered(res.data.length);
    });

    // Workers park

    axios.get("http://localhost:8081/workersEvergreen").then((res) => {
      console.log(res.data.length);
      setWorkersEvergreen([res.data.length]);
    });
    axios.get("http://localhost:8081/workersDeciduous").then((res) => {
      console.log(res.data.length);
      setWorkersDeciduous(res.data.length);
    });
    axios.get("http://localhost:8081/workersEndemic").then((res) => {
      console.log(res.data.length);
      setWorkersEndemic(res.data.length);
    });
    axios.get("http://localhost:8081/workersIndigenous").then((res) => {
      console.log(res.data.length);
      setWorkersIndigenous(res.data.length);
    });
    axios.get("http://localhost:8081/workersExotic").then((res) => {
      console.log(res.data.length);
      setWorkersExotic(res.data.length);
    });
    axios.get("http://localhost:8081/workersEndangered").then((res) => {
      console.log(res.data.length);
      setWorkersEndangered(res.data.length);
    });

    // park1

    axios.get("http://localhost:8081/park_1Evergreen").then((res) => {
      console.log(res.data.length);
      setPark1Evergreen([res.data.length]);
    });
    axios.get("http://localhost:8081/park_1Deciduous").then((res) => {
      console.log(res.data.length);
      setPark1Deciduous(res.data.length);
    });
    axios.get("http://localhost:8081/park_1Endemic").then((res) => {
      console.log(res.data.length);
      setPark1Endemic(res.data.length);
    });
    axios.get("http://localhost:8081/park_1Indigenous").then((res) => {
      console.log(res.data.length);
      setPark1Indigenous(res.data.length);
    });
    axios.get("http://localhost:8081/park_1Exotic").then((res) => {
      console.log(res.data.length);
      setPark1Exotic(res.data.length);
    });
    axios.get("http://localhost:8081/park_1Endangered").then((res) => {
      console.log(res.data.length);
      setPark1Endangered(res.data.length);
    });

    // park2

    axios.get("http://localhost:8081/park_2Evergreen").then((res) => {
      console.log(res.data.length);
      setPark2Evergreen([res.data.length]);
    });
    axios.get("http://localhost:8081/park_2Deciduous").then((res) => {
      console.log(res.data.length);
      setPark2Deciduous(res.data.length);
    });
    axios.get("http://localhost:8081/park_2Endemic").then((res) => {
      console.log(res.data.length);
      setPark2Endemic(res.data.length);
    });
    axios.get("http://localhost:8081/park_2Indigenous").then((res) => {
      console.log(res.data.length);
      setPark2Indigenous(res.data.length);
    });
    axios.get("http://localhost:8081/park_2Exotic").then((res) => {
      console.log(res.data.length);
      setPark2Exotic(res.data.length);
    });
    axios.get("http://localhost:8081/park_2Endangered").then((res) => {
      console.log(res.data.length);
      setPark2Endangered(res.data.length);
    });

    // edward

    axios.get("http://localhost:8081/edward_park_Evergreen").then((res) => {
      console.log(res.data.length);
      setEdwardEvergreen([res.data.length]);
    });
    axios.get("http://localhost:8081/edward_park_Deciduous").then((res) => {
      console.log(res.data.length);
      setEdwardDeciduous(res.data.length);
    });
    axios.get("http://localhost:8081/edward_park_Endemic").then((res) => {
      console.log(res.data.length);
      setEdwardEndemic(res.data.length);
    });
    axios.get("http://localhost:8081/edward_park_Indigenous").then((res) => {
      console.log(res.data.length);
      setEdwardIndigenous(res.data.length);
    });
    axios.get("http://localhost:8081/edward_park_Exotic").then((res) => {
      console.log(res.data.length);
      setEdwardExotic(res.data.length);
    });
    axios.get("http://localhost:8081/edward_park_Endangered").then((res) => {
      console.log(res.data.length);
      setEdwardEndangered(res.data.length);
    });


    // Victoria

    axios.get("http://localhost:8081/victoria_park_Evergreen").then((res) => {
      console.log(res.data.length);
      setVictoriaEvergreen([res.data.length]);
    });
    axios.get("http://localhost:8081/victoria_park_Deciduous").then((res) => {
      console.log(res.data.length);
      setVictoriaDeciduous(res.data.length);
    });
    axios.get("http://localhost:8081/victoria_park_Endemic").then((res) => {
      console.log(res.data.length);
      setVictoriaEndemic(res.data.length);
    });
    axios.get("http://localhost:8081/victoria_park_Indigenous").then((res) => {
      console.log(res.data.length);
      setVictoriaIndigenous(res.data.length);
    });
    axios.get("http://localhost:8081/victoria_park_Exotic").then((res) => {
      console.log(res.data.length);
      setVictoriaExotic(res.data.length);
    });
    axios.get("http://localhost:8081/victoria_park_Endangered").then((res) => {
      console.log(res.data.length);
      setVictoriaEndangered(res.data.length);
    });

  }, []);

  arrDog.push(
    parseInt(dogEvergreen),
    parseInt(dogDeciduous),
    parseInt(dogEndemic),
    parseInt(dogIndigenous),
    parseInt(dogExotic),
    parseInt(dogEndangered)
  );
  // snake Park
  arrSnake.push(
    parseInt(snakeEvergreen),
    parseInt(snakeDeciduous),
    parseInt(snakeEndemic),
    parseInt(snakeIndigenous),
    parseInt(snakeExotic),
    parseInt(snakeEndangered)
  );
  // rose Park
  arrRose.push(
    parseInt(roseEvergreen),
    parseInt(roseDeciduous),
    parseInt(roseEndemic),
    parseInt(roseIndigenous),
    parseInt(roseExotic),
    parseInt(roseEndangered)
  );
   //  Triangular Park
   arrTriangular.push(
    parseInt(triangularEvergreen),
    parseInt(triangularDeciduous),
    parseInt(triangularEndemic),
    parseInt(triangularIndigenous),
    parseInt(triangularExotic),
    parseInt(triangularEndangered)
  );

  //  Circular Park
  arrCircular.push(
    parseInt(circularEvergreen),
    parseInt(circularDeciduous),
    parseInt(circularEndemic),
    parseInt(circularIndigenous),
    parseInt(circularExotic),
    parseInt(circularEndangered)
  );
  
  //  Workers Park
  arrWorkers.push(
    parseInt(workersEvergreen),
    parseInt(workersDeciduous),
    parseInt(workersEndemic),
    parseInt(workersIndigenous),
    parseInt(workersExotic),
    parseInt(workersEndangered)
  );

  // Park1
  arrPark1.push(
    parseInt(park1Evergreen),
    parseInt(park1Deciduous),
    parseInt(park1Endemic),
    parseInt(park1Indigenous),
    parseInt(park1Exotic),
    parseInt(park1Endangered)
  );

  // Park2
  arrPark2.push(
    parseInt(park2Evergreen),
    parseInt(park2Deciduous),
    parseInt(park2Endemic),
    parseInt(park2Indigenous),
    parseInt(park2Exotic),
    parseInt(park2Endangered)
  );

  // edward
  arrEdward.push(
    parseInt(edwardEvergreen),
    parseInt(edwardDeciduous),
    parseInt(edwardEndemic),
    parseInt(edwardIndigenous),
    parseInt(edwardExotic),
    parseInt(edwardEndangered)
  );

  // edward
  arrVictoria.push(
    parseInt(victoriaEvergreen),
    parseInt(victoriaDeciduous),
    parseInt(victoriaEndemic),
    parseInt(victoriaIndigenous),
    parseInt(victoriaExotic),
    parseInt(victoriaEndangered)
  );

  console.log("values", arrDog);
  return (
    <div className="dashboard__component">
      <center>
        <h1>Zone wise breakdown</h1>
      </center>
      <div className="dashboard__component--main">
        <div>
          {/* {console.log(dogEvergreen,dogDeciduous,dogEndemic,dogIndigenous,dogExotic,dogEndangered)} */}
          <DonutChart
            title="Dog Park"
            values={arrDog}
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
        <div>
          <DonutChart
            title="Snake Park"
            values={arrSnake}
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
        <div>
          <DonutChart
            title="Rose Park"
            values={arrRose}
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
        {/* fixe */}
        </div>
        <div className="dashboard__component--main">
        <div>
          <DonutChart
            title="Triangular Park"
            values={arrTriangular}
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
        <div>
          <DonutChart
            title="Circular Park"
            values={arrCircular}
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
        <div>
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
        </div>
        </div>
        <div className="dashboard__component--main">
        <div>
          <DonutChart
            title="Park 1"
            values={arrPark1}
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

        <div>
          <DonutChart
            title="Park 2"
            values={arrPark2}
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

        <div>
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
        </div>
</div>
<div className="dashboard__component--main">
        <div>
          <DonutChart
            title="victoria Park"
            values={arrVictoria}
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
      </div>
    </div>
  );
}

export default DashboardComponents;
