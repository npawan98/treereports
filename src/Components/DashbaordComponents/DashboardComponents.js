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

  //  Triangular Park
  arrCircular.push(
    parseInt(circularEvergreen),
    parseInt(circularDeciduous),
    parseInt(circularEndemic),
    parseInt(circularIndigenous),
    parseInt(circularExotic),
    parseInt(circularEndangered)
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
      </div>
    </div>
  );
}

export default DashboardComponents;
