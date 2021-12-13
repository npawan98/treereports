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
  const arr = [];

  useEffect(() => {
    axios.get("http://localhost:8081/dogEvergreen").then((res) => {
      console.log(res.data.length);
      setDogEvergreen([res.data.length]);
    });
    axios.get("http://localhost:8081/dogDeciduous").then((res) => {
      console.log(res.data.length);
      setDogDeciduous(res.data.length);
    });
    axios.get("http://localhost:8081/dogEndemic").then((res) => {
      console.log(res.data.length);
      setDogEndemic(res.data.length);
    });
    axios.get("http://localhost:8081/dogIndigenous").then((res) => {
      console.log(res.data.length);
      setDogIndigenous(res.data.length);
    });
    axios.get("http://localhost:8081/dogExotic").then((res) => {
      console.log(res.data.length);
      setDogExotic(res.data.length);
    });
    axios.get("http://localhost:8081/dogEndangered").then((res) => {
      console.log(res.data.length);
      setDogEndangered(res.data.length);
    });
  }, []);

  arr.push(
    parseInt(dogEvergreen),
    parseInt(dogDeciduous),
    parseInt(dogEndemic),
    parseInt(dogIndigenous),
    parseInt(dogExotic),
    parseInt(dogEndangered)
  );
  console.log("values", arr);
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
            values={arr}
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
            values={[10, 50, 0, 0, 0, 0]}
            labels={["hello", "good"]}
          />
        </div>
      </div>
    </div>
  );
}

export default DashboardComponents;
