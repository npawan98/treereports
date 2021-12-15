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
      </div>
    </div>
  );
}

export default DashboardComponents;
