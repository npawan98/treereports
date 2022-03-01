import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import SubBanner from "../../../Components/Common/BannerImage/SubBanner/SubBanner"
import DogTable_ConservationStatus from "../../../Components/Common/MUI-table/DogPark/conservartionStatus/DogTable_ConservationStatus";
import DogTable from "../../../Components/Common/MUI-table/DogPark/DogTable"
import DonutChart from "../../../Components/DashbaordComponents/Dashboard_donut/DonutChart";

function Dog_Park() {

  const [dogData, setDogData] = useState([]);
  const [dogEvergreen, setDogEvergreen] = useState([]);
  const [dogDeciduous, setDogDeciduous] = useState([]);
  const [dogEndemic, setDogEndemic] = useState([]);
  const [dogIndigenous, setDogIndigenous] = useState([]);
  const [dogExotic, setDogExotic] = useState([]);
  const [dogEndangered, setDogEndangered] = useState([]);

  const arrDog = [];

  const [dogEvergreenPhenology, setDogEvergreenPhenology] = useState([]);
  const [dogDeciduousPhenology, setDogDeciduousPhenology] = useState([]);
  const [dogSemiDeciduousPhenology, setDogSemiDeciduousPhenology] = useState([]);

  const arrDogPhenology = [];

  const [dogLeastConcern, setdogLeastConcern] = useState([]);
  const [dogNotknown, setdogNotknown] = useState([]);
  const [dogNearThreatened, setdogNearThreatened] = useState([]);
  const [dogVulnerable, setdogVulnerable] = useState([]);
  const [dogCriticallyEndangered, setdogCriticallyEndangered] = useState([]);
  const [dogConservationDependent, setdogConservationDependent] = useState([]);

  const arrDogConservation = [];

  console.log("okokoko",arrDogConservation)

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


    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/dogEvergreen").then((res) => {
      console.log(res.data.length);
      setDogEvergreenPhenology([res.data.length]);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/dogDeciduous").then((res) => {
      console.log(res.data.length);
      setDogDeciduousPhenology(res.data.length);
    });


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

    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/semiDeciduous?Park=dog_park").then((res) => {
      console.log(res.data.length);
      setDogSemiDeciduousPhenology(res.data.length);
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

  arrDogPhenology.push(
    parseInt(dogEvergreenPhenology),
    parseInt(dogDeciduousPhenology),
    parseInt(dogSemiDeciduousPhenology),

  )

  arrDogConservation.push(
    parseInt(dogLeastConcern),
    parseInt(dogNotknown),
    parseInt(dogNearThreatened),
    parseInt(dogVulnerable),
    parseInt(dogCriticallyEndangered),
    parseInt(dogConservationDependent),
  )


  return (
    <div className="Dog__Park">
      <SubBanner Title="Generate report" subTitle="Dog Park" imgURL="https://images.unsplash.com/photo-1635886840360-a2d27a5826d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" />

      <div className="Dog__Park-main" style={{ display: 'flex', placeItems: 'center', justifyContent: "space-around" }}>
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
        <DonutChart
          title="Dog Park (Phenology)"
          values={arrDogPhenology}
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
      < div style={{ display: 'grid', placeItems: 'center' }}>
        <DogTable />
      </div>

      <div style={{ padding: "50px" }}>
        <h2>Conservation Status</h2>
        <div style={{ display: 'flex', margin: "50px" }}>
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
          <DogTable_ConservationStatus />
        </div>

      </div>


    </div>
  )
}

export default Dog_Park
