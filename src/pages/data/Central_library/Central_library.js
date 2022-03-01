import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import SubBanner from "../../../Components/Common/BannerImage/SubBanner/SubBanner"
import Central_libraryTable_ConservationStatus from "../../../Components/Common/MUI-table/Central_library/conservartionStatus/Central_libraryTable_ConservationStatus";
import Central_libraryTable from "../../../Components/Common/MUI-table/Central_library/Central_libraryTable"
import DonutChart from "../../../Components/DashbaordComponents/Dashboard_donut/DonutChart";

function Central_library() {

  const [Central_libraryData, setCentral_libraryData] = useState([]);
  const [Central_libraryEvergreen, setCentral_libraryEvergreen] = useState([]);
  const [Central_libraryDeciduous, setCentral_libraryDeciduous] = useState([]);
  const [Central_libraryEndemic, setCentral_libraryEndemic] = useState([]);
  const [Central_libraryIndigenous, setCentral_libraryIndigenous] = useState([]);
  const [Central_libraryExotic, setCentral_libraryExotic] = useState([]);
  const [Central_libraryEndangered, setCentral_libraryEndangered] = useState([]);

  const arrCentral_library = [];

  const [Central_libraryEvergreenPhenology, setCentral_libraryEvergreenPhenology] = useState([]);
  const [Central_libraryDeciduousPhenology, setCentral_libraryDeciduousPhenology] = useState([]);
  const [Central_librarySemiDeciduousPhenology, setCentral_librarySemiDeciduousPhenology] = useState([]);

  const arrCentral_libraryPhenology = [];

  const [Central_libraryLeastConcern, setCentral_libraryLeastConcern] = useState([]);
  const [Central_libraryNotknown, setCentral_libraryNotknown] = useState([]);
  const [Central_libraryNearThreatened, setCentral_libraryNearThreatened] = useState([]);
  const [Central_libraryVulnerable, setCentral_libraryVulnerable] = useState([]);
  const [Central_libraryCriticallyEndangered, setCentral_libraryCriticallyEndangered] = useState([]);
  const [Central_libraryConservationDependent, setCentral_libraryConservationDependent] = useState([]);

  const arrCentral_libraryConservation = [];

  console.log("okokoko",arrCentral_libraryConservation)

  useEffect(() => {
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Central_library_Evergreen").then((res) => {
      console.log(res.data.length);
      setCentral_libraryEvergreen([res.data.length]);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Central_library_Deciduous").then((res) => {
      console.log(res.data.length);
      setCentral_libraryDeciduous(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Central_library_Endemic").then((res) => {
      console.log(res.data.length);
      setCentral_libraryEndemic(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Central_library_Indigenous").then((res) => {
      console.log(res.data.length);
      setCentral_libraryIndigenous(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Central_library_Exotic").then((res) => {
      console.log(res.data.length);
      setCentral_libraryExotic(res.data.length);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Central_library_Endangered").then((res) => {
      console.log(res.data.length);
      setCentral_libraryEndangered(res.data.length);
    });


    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/Central_library_Evergreen").then((res) => {
      console.log(res.data.length);
      setCentral_libraryEvergreenPhenology([res.data.length]);
    });
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/Central_library_Deciduous").then((res) => {
      console.log(res.data.length);
      setCentral_libraryDeciduousPhenology(res.data.length);
    });


    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Central_libraryLeastConcern").then(res => {
      console.log(res.data.length)
      setCentral_libraryLeastConcern(res.data.length)

    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Central_libraryNotknown").then(res => {
      console.log(res.data)
      setCentral_libraryNotknown(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Central_libraryNearThreatened").then(res => {
      console.log(res.data.length)
      setCentral_libraryNearThreatened(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Central_libraryVulnerable").then(res => {
      console.log(res.data.length)
      setCentral_libraryVulnerable(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Central_libraryCriticallyEndangered").then(res => {
      console.log(res.data.length)
      setCentral_libraryCriticallyEndangered(res.data.length)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Central_libraryConservationDependent").then(res => {
      console.log(res.data.length)
      setCentral_libraryConservationDependent(res.data.length)
    })

    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/semiDeciduous?Park=central_library").then((res) => {
      console.log(res.data.length);
      setCentral_librarySemiDeciduousPhenology(res.data.length);
    });
  }, []);


  arrCentral_library.push(
    parseInt(Central_libraryEvergreen),
    parseInt(Central_libraryDeciduous),
    parseInt(Central_libraryEndemic),
    parseInt(Central_libraryIndigenous),
    parseInt(Central_libraryExotic),
    parseInt(Central_libraryEndangered)
  );

  arrCentral_libraryPhenology.push(
    parseInt(Central_libraryEvergreenPhenology),
    parseInt(Central_libraryDeciduousPhenology),
    parseInt(Central_librarySemiDeciduousPhenology),

  )

  arrCentral_libraryConservation.push(
    parseInt(Central_libraryLeastConcern),
    parseInt(Central_libraryNotknown),
    parseInt(Central_libraryNearThreatened),
    parseInt(Central_libraryVulnerable),
    parseInt(Central_libraryCriticallyEndangered),
    parseInt(Central_libraryConservationDependent),
  )


  return (
    <div className="Central_library__Park">
      <SubBanner Title="Generate report" subTitle="Central Library" imgURL="https://images.unsplash.com/photo-1635886840360-a2d27a5826d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" />

      <div className="Central_library__Park-main" style={{ display: 'flex', placeItems: 'center', justifyContent: "space-around" }}>
        <DonutChart
          title="Central_library Park"
          values={arrCentral_library}
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
          title="Central_library Park (Phenology)"
          values={arrCentral_libraryPhenology}
          labels={[
            "Evergreen",
            "Deciduous",
            "semiDeciduous",
            "Endemic",
            "Indigenous",
            "Exotic",
            "Endangered",
          ]}
        />

      </div>
      < div style={{ display: 'grid', placeItems: 'center' }}>
        <Central_libraryTable />
      </div>

      <div style={{ padding: "50px" }}>
        <h2>Conservation Status</h2>
        <div style={{ display: 'flex', margin: "50px" }}>
          <DonutChart
            title="Central_library Park (conservation status)"
            values={arrCentral_libraryConservation}
            labels={[
              "Least Concern",
              "Not known",
              "Near Threatened",
              "Vulnerable",
              "Critically endangered",
              "Conservation dependent",
            ]}
          />
          <Central_libraryTable_ConservationStatus />
        </div>

      </div>


    </div>
  )
}

export default Central_library
