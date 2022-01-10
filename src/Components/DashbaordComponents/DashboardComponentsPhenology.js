/* eslint-disable no-unused-vars */
import Sidebar from "../Common/SidebarComponent/Sidebar";
import "./DashboardComponents.scss";
import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import DonutChart from "./Dashboard_donut/DonutChart";
import axios from "axios";

function DashboardComponentsPhenology() {
  const [dogData, setDogData] = useState([]);
  const [dogEvergreen, setDogEvergreen] = useState([]);
  const [dogDeciduous, setDogDeciduous] = useState([]);
  const [dogEndemic, setDogEndemic] = useState([]);
  const [dogIndigenous, setDogIndigenous] = useState([]);
  const [dogExotic, setDogExotic] = useState([]);
  const [dogEndangered, setDogEndangered] = useState([]);

  const arrDog = [];
  console.log(arrDog)
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

    const [WineEvergreen, setWineEvergreen] = useState([]);
    const [WineDeciduous, setWineDeciduous] = useState([]);
    const [WineEndemic, setWineEndemic] = useState([]);
    const [WineIndigenous, setWineIndigenous] = useState([]);
    const [WineExotic, setWineExotic] = useState([]);
    const [WineEndangered, setWineEndangered] = useState([]);

    const arrWine = [];

  useEffect(() => {
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/dogEvergreen").then((res) => {
      console.log(res.data.length);
      setDogEvergreen([res.data.length]);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/dogDeciduous").then((res) => {
      console.log(res.data.length);
      setDogDeciduous(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/dogEndemic").then((res) => {
      console.log(res.data.length);
      setDogEndemic(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/dogIndigenous").then((res) => {
      console.log(res.data.length);
      setDogIndigenous(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/dogExotic").then((res) => {
      console.log(res.data.length);
      setDogExotic(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/dogEndangered").then((res) => {
      console.log(res.data.length);
      setDogEndangered(res.data.length);
    });

    // snakepark

    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/snakeEvergreen").then((res) => {
      console.log(res.data.length);
      setSnakeEvergreen([res.data.length]);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/snakeDeciduous").then((res) => {
      console.log(res.data.length);
      setSnakeDeciduous(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/snakeEndemic").then((res) => {
      console.log(res.data.length);
      setSnakeEndemic(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/snakeIndigenous").then((res) => {
      console.log(res.data.length);
      setSnakeIndigenous(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/snakeExotic").then((res) => {
      console.log(res.data.length);
      setSnakeExotic(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/snakeEndangered").then((res) => {
      console.log(res.data.length);
      setSnakeEndangered(res.data.length);
    });

    // rosepark

    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/roseEvergreen").then((res) => {
      console.log(res.data.length);
      setRoseEvergreen([res.data.length]);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/roseDeciduous").then((res) => {
      console.log(res.data.length);
      setRoseDeciduous(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/roseEndemic").then((res) => {
      console.log(res.data.length);
      setRoseEndemic(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/roseIndigenous").then((res) => {
      console.log(res.data.length);
      setRoseIndigenous(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/roseExotic").then((res) => {
      console.log(res.data.length);
      setRoseExotic(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/roseEndangered").then((res) => {
      console.log(res.data.length);
      setRoseEndangered(res.data.length);
    });

    // Triangular park

    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/triangularEvergreen").then((res) => {
      console.log(res.data.length);
      setTriangularEvergreen([res.data.length]);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/triangularDeciduous").then((res) => {
      console.log(res.data.length);
      setTriangularDeciduous(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/triangularEndemic").then((res) => {
      console.log(res.data.length);
      setTriangularEndemic(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/triangularIndigenous").then((res) => {
      console.log(res.data.length);
      setTriangularIndigenous(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/triangularExotic").then((res) => {
      console.log(res.data.length);
      setTriangularExotic(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/triangularEndangered").then((res) => {
      console.log(res.data.length);
      setTriangularEndangered(res.data.length);
    });

    // Circular park

    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/circularEvergreen").then((res) => {
      console.log(res.data.length);
      setCircularEvergreen([res.data.length]);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/circularDeciduous").then((res) => {
      console.log(res.data.length);
      setCircularDeciduous(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/circularEndemic").then((res) => {
      console.log(res.data.length);
      setCircularEndemic(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/circularIndigenous").then((res) => {
      console.log(res.data.length);
      setCircularIndigenous(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/circularExotic").then((res) => {
      console.log(res.data.length);
      setCircularExotic(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/circularEndangered").then((res) => {
      console.log(res.data.length);
      setCircularEndangered(res.data.length);
    });

    // Workers park

    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/workersEvergreen").then((res) => {
      console.log(res.data.length);
      setWorkersEvergreen([res.data.length]);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/workersDeciduous").then((res) => {
      console.log(res.data.length);
      setWorkersDeciduous(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/workersEndemic").then((res) => {
      console.log(res.data.length);
      setWorkersEndemic(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/workersIndigenous").then((res) => {
      console.log(res.data.length);
      setWorkersIndigenous(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/workersExotic").then((res) => {
      console.log(res.data.length);
      setWorkersExotic(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/workersEndangered").then((res) => {
      console.log(res.data.length);
      setWorkersEndangered(res.data.length);
    });

    // park1

    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/park_1Evergreen").then((res) => {
      console.log(res.data.length);
      setPark1Evergreen([res.data.length]);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/park_1Deciduous").then((res) => {
      console.log(res.data.length);
      setPark1Deciduous(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/park_1Endemic").then((res) => {
      console.log(res.data.length);
      setPark1Endemic(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/park_1Indigenous").then((res) => {
      console.log(res.data.length);
      setPark1Indigenous(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/park_1Exotic").then((res) => {
      console.log(res.data.length);
      setPark1Exotic(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/park_1Endangered").then((res) => {
      console.log(res.data.length);
      setPark1Endangered(res.data.length);
    });

    // park2

    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/park_2Evergreen").then((res) => {
      console.log(res.data.length);
      setPark2Evergreen([res.data.length]);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/park_2Deciduous").then((res) => {
      console.log(res.data.length);
      setPark2Deciduous(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/park_2Endemic").then((res) => {
      console.log(res.data.length);
      setPark2Endemic(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/park_2Indigenous").then((res) => {
      console.log(res.data.length);
      setPark2Indigenous(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/park_2Exotic").then((res) => {
      console.log(res.data.length);
      setPark2Exotic(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/park_2Endangered").then((res) => {
      console.log(res.data.length);
      setPark2Endangered(res.data.length);
    });

    // edward

    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/edward_park_Evergreen").then((res) => {
      console.log(res.data.length);
      setEdwardEvergreen([res.data.length]);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/edward_park_Deciduous").then((res) => {
      console.log(res.data.length);
      setEdwardDeciduous(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/edward_park_Endemic").then((res) => {
      console.log(res.data.length);
      setEdwardEndemic(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/edward_park_Indigenous").then((res) => {
      console.log(res.data.length);
      setEdwardIndigenous(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/edward_park_Exotic").then((res) => {
      console.log(res.data.length);
      setEdwardExotic(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/edward_park_Endangered").then((res) => {
      console.log(res.data.length);
      setEdwardEndangered(res.data.length);
    });


    // Victoria

    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/victoria_park_Evergreen").then((res) => {
      console.log(res.data.length);
      setVictoriaEvergreen([res.data.length]);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/victoria_park_Deciduous").then((res) => {
      console.log(res.data.length);
      setVictoriaDeciduous(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/victoria_park_Endemic").then((res) => {
      console.log(res.data.length);
      setVictoriaEndemic(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/victoria_park_Indigenous").then((res) => {
      console.log(res.data.length);
      setVictoriaIndigenous(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/victoria_park_Exotic").then((res) => {
      console.log(res.data.length);
      setVictoriaExotic(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/victoria_park_Endangered").then((res) => {
      console.log(res.data.length);
      setVictoriaEndangered(res.data.length);
    });

    // Wine

    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/wine_board_Evergreen").then((res) => {
      console.log(res.data.length);
      setWineEvergreen([res.data.length]);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/wine_board_Deciduous").then((res) => {
      console.log(res.data.length);
      setWineDeciduous(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/wine_board_Endemic").then((res) => {
      console.log(res.data.length);
      setWineEndemic(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/wine_board_Indigenous").then((res) => {
      console.log(res.data.length);
      setWineIndigenous(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/wine_board_Exotic").then((res) => {
      console.log(res.data.length);
      setWineExotic(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/wine_board_Endangered").then((res) => {
      console.log(res.data.length);
      setWineEndangered(res.data.length);
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

  // Victoria
  arrVictoria.push(
    parseInt(victoriaEvergreen),
    parseInt(victoriaDeciduous),
    parseInt(victoriaEndemic),
    parseInt(victoriaIndigenous),
    parseInt(victoriaExotic),
    parseInt(victoriaEndangered)
  );

  // Wine
  arrWine.push(
    parseInt(WineEvergreen),
    parseInt(WineDeciduous),
    parseInt(WineEndemic),
    parseInt(WineIndigenous),
    parseInt(WineExotic),
    parseInt(WineEndangered)
  );

  console.log("values", arrDog);
  return (
    <div className="dashboard__component">
      <center>
        <h1>Zone wise breakdown (Phenology)</h1>
      </center>
      <div className="dashboard__component--main">
        <div>
          {/* {console.log(dogEvergreen,dogDeciduous,dogEndemic,dogIndigenous,dogExotic,dogEndangered)} */}
          <DonutChart
            title="Dog Park - Phenology"
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
            title="Snake Park - Phenology"
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
            title="Rose Park - Phenology"
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
            title="Triangular Park - Phenology"
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
            title="Circular Park - Phenology"
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
            title="Workers Park - Phenology"
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
            title="Park 1 - Phenology"
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
            title="Park 2 - Phenology"
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
            title="Edward Park - Phenology"
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
            title="victoria Park - Phenology"
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
        <div>
          <DonutChart
            title="Wine Board - Phenology"
            values={arrWine}
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

export default DashboardComponentsPhenology;
