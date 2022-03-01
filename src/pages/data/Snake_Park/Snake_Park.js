import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import SubBanner from "../../../Components/Common/BannerImage/SubBanner/SubBanner"
import SnakeTable_ConservationStatus from "../../../Components/Common/MUI-table/SnakePark/conservartionStatus/SnakeTable_ConservationStatus";
import SnakeTable from "../../../Components/Common/MUI-table/SnakePark/SnakeTable"
import DonutChart from "../../../Components/DashbaordComponents/Dashboard_donut/DonutChart";

function Snake_Park() {

    const [SnakeData, setSnakeData] = useState([]);
    const [SnakeEvergreen, setSnakeEvergreen] = useState([]);
    const [SnakeDeciduous, setSnakeDeciduous] = useState([]);
    const [SnakeEndemic, setSnakeEndemic] = useState([]);
    const [SnakeIndigenous, setSnakeIndigenous] = useState([]);
    const [SnakeExotic, setSnakeExotic] = useState([]);
    const [SnakeEndangered, setSnakeEndangered] = useState([]);

    const arrSnake = [];

    const [SnakeEvergreenPhenology, setSnakeEvergreenPhenology] = useState([]);
    const [SnakeDeciduousPhenology, setSnakeDeciduousPhenology] = useState([]);
      // semi deciduous
    const [SnakeSemiDeciduousPhenology, setSnakeSemiDeciduousPhenology] = useState([]);

    const arrSnakePhenology = [];

    const [SnakeLeastConcern, setSnakeLeastConcern] = useState([]);
    const [SnakeNotknown, setSnakeNotknown] = useState([]);
    const [SnakeNearThreatened, setSnakeNearThreatened] = useState([]);
    const [SnakeVulnerable, setSnakeVulnerable] = useState([]);
    const [SnakeCriticallyEndangered, setSnakeCriticallyEndangered] = useState([]);
    const [SnakeConservationDependent, setSnakeConservationDependent] = useState([]);

  const arrSnakeConservation = [];

    useEffect(() => {
        axios.get("https://afternoon-mountain-93761.herokuapp.com/SnakeEvergreen").then((res) => {
          console.log(res.data.length);
          setSnakeEvergreen([res.data.length]);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/SnakeDeciduous").then((res) => {
          console.log(res.data.length);
          setSnakeDeciduous(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/SnakeEndemic").then((res) => {
          console.log(res.data.length);
          setSnakeEndemic(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/SnakeIndigenous").then((res) => {
          console.log(res.data.length);
          setSnakeIndigenous(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/SnakeExotic").then((res) => {
          console.log(res.data.length);
          setSnakeExotic(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/SnakeEndangered").then((res) => {
          console.log(res.data.length);
          setSnakeEndangered(res.data.length);
        });


        axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/SnakeEvergreen").then((res) => {
          console.log(res.data.length);
          setSnakeEvergreenPhenology([res.data.length]);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/SnakeDeciduous").then((res) => {
          console.log(res.data.length);
          setSnakeDeciduousPhenology(res.data.length);
        });

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
        axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/semiDeciduous?Park=snake_park").then((res) => {
          console.log(res.data.length);
          setSnakeSemiDeciduousPhenology(res.data.length);
        });
      
    },[]);


    arrSnake.push(
        parseInt(SnakeEvergreen),
        parseInt(SnakeDeciduous),
        parseInt(SnakeEndemic),
        parseInt(SnakeIndigenous),
        parseInt(SnakeExotic),
        parseInt(SnakeEndangered)
      );

      arrSnakePhenology.push(
        parseInt(SnakeEvergreenPhenology),
        parseInt(SnakeDeciduousPhenology),
        parseInt(SnakeSemiDeciduousPhenology),

      )

      arrSnakeConservation.push(
        parseInt(SnakeLeastConcern),
        parseInt(SnakeNotknown),
        parseInt(SnakeNearThreatened),
        parseInt(SnakeVulnerable),
        parseInt(SnakeCriticallyEndangered),
        parseInt(SnakeConservationDependent),
      )


    return (
        <div className="Snake__Park">
            <SubBanner Title="Generate report" subTitle="Snake Park" imgURL="https://images.unsplash.com/photo-1635886840360-a2d27a5826d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"/>
        
            <div className="Snake__Park-main" style={{display:'flex',placeItems:'center',justifyContent:"space-around"}}>
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
            <DonutChart
                title="Snake Park (Phenology)"
                values={arrSnakePhenology}
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
            < div style={{display: 'grid',placeItems:'center'}}>
                <SnakeTable/>
            </div>

            <div style={{ padding: "50px" }}>
              <h2>Conservation Status</h2>
              <div style={{ display: 'flex', margin: "50px" }}>
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
                <SnakeTable_ConservationStatus />
              </div>

      </div>
        
        
        </div>
    )
}

export default Snake_Park
