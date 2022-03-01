import axios from "axios";
import React, { useEffect, useState } from "react";
import SubBanner from "../../../Components/Common/BannerImage/SubBanner/SubBanner";
import AllTrees_Table from "../../../Components/Common/MUI-table/AllTrees/AllTrees_Table";
import AllTrees_Table_ConservationStatus from "../../../Components/Common/MUI-table/AllTrees/conservationStatus/AllTrees_Table_ConservationStatus";
import Avenue_treesTable_ConservationStatus from "../../../Components/Common/MUI-table/Avenue_trees/conservartionStatus/Avenue_treesTable_ConservationStatus";
import DonutChart from "../../../Components/DashbaordComponents/Dashboard_donut/DonutChart";

function AllTrees() {

    const arrMaster = [];
    const arrMasterPhenology = [];
    const arrMasterConservation = [];

// semi deciduous
const [Avenue_treesSemiDeciduousPhenology, setAvenue_treesSemiDeciduousPhenology] = useState([]);
const [bal_bhavanSemiDeciduousPhenology, setbal_bhavanSemiDeciduousPhenology] = useState([]);
const [central_librarySemiDeciduousPhenology, setcentral_librarySemiDeciduousPhenology] = useState([]);
const [circular_ParkSemiDeciduousPhenology, setcircular_ParkSemiDeciduousPhenology] = useState([]);
const [dog_parkSemiDeciduousPhenology, setdog_parkSemiDeciduousPhenology] = useState([]);
const [edward_parkSemiDeciduousPhenology, setedward_parkSemiDeciduousPhenology] = useState([]);
const [high_court_parkSemiDeciduousPhenology, sethigh_court_parkSemiDeciduousPhenology] = useState([]);
const [kslta_hort_deptSemiDeciduousPhenology, setkslta_hort_deptSemiDeciduousPhenology] = useState([]);
const [lotus_pond_kargadhakunteSemiDeciduousPhenology, setlotus_pond_kargadhakunteSemiDeciduousPhenology] = useState([]);
const [park_1SemiDeciduousPhenology, setpark_1SemiDeciduousPhenology] = useState([]);
const [park_2SemiDeciduousPhenology, setpark_2SemiDeciduousPhenology] = useState([]);
const [park_opp_snake_parkSemiDeciduousPhenology, setpark_opp_snake_parkSemiDeciduousPhenology] = useState([]);
const [park_opp_wine_boardSemiDeciduousPhenology, setpark_opp_wine_boardSemiDeciduousPhenology] = useState([]);
const [park_opp_workers_clubSemiDeciduousPhenology, setpark_opp_workers_clubSemiDeciduousPhenology] = useState([]);
const [rose_parkSemiDeciduousPhenology, setrose_parkSemiDeciduousPhenology] = useState([]);
const [secretary_clubSemiDeciduousPhenology, setsecretary_clubSemiDeciduousPhenology] = useState([]);
const [snake_parkSemiDeciduousPhenology, setsnake_parkSemiDeciduousPhenology] = useState([]);
const [triangular_ParkSemiDeciduousPhenology, settriangular_ParkSemiDeciduousPhenology] = useState([]);
const [victoria_parkSemiDeciduousPhenology, setvictoria_parkSemiDeciduousPhenology] = useState([]);
const [wine_boardSemiDeciduousPhenology, setwine_boardSemiDeciduousPhenology] = useState([]);
const [workers_clubSemiDeciduousPhenology, setworkers_clubSemiDeciduousPhenology] = useState([]);



    // avenue trees
    const [Avenue_treesData, setAvenue_treesData] = useState([]);
    const [Avenue_treesEvergreen, setAvenue_treesEvergreen] = useState([]);
    const [Avenue_treesDeciduous, setAvenue_treesDeciduous] = useState([]);
    const [Avenue_treesEndemic, setAvenue_treesEndemic] = useState([]);
    const [Avenue_treesIndigenous, setAvenue_treesIndigenous] = useState([]);
    const [Avenue_treesExotic, setAvenue_treesExotic] = useState([]);
    const [Avenue_treesEndangered, setAvenue_treesEndangered] = useState([]);

    const arrAvenue_trees = [];

    // avenue trees phenology
    const [Avenue_treesEvergreenPhenology, setAvenue_treesEvergreenPhenology] = useState([]);
    const [Avenue_treesDeciduousPhenology, setAvenue_treesDeciduousPhenology] = useState([]);

    const arrAvenue_treesPhenology = [];
    // avenue trees conservation
    const [Avenue_treesLeastConcern, setAvenue_treesLeastConcern] = useState([]);
    const [Avenue_treesNotknown, setAvenue_treesNotknown] = useState([]);
    const [Avenue_treesNearThreatened, setAvenue_treesNearThreatened] = useState([]);
    const [Avenue_treesVulnerable, setAvenue_treesVulnerable] = useState([]);
    const [Avenue_treesCriticallyEndangered, setAvenue_treesCriticallyEndangered] = useState([]);
    const [Avenue_treesConservationDependent, setAvenue_treesConservationDependent] = useState([]);

    const arrAvenue_treesConservation = [];

    // 
    const [Bal_bhavanData, setBal_bhavanData] = useState([]);
    const [Bal_bhavanEvergreen, setBal_bhavanEvergreen] = useState([]);
    const [Bal_bhavanDeciduous, setBal_bhavanDeciduous] = useState([]);
    const [Bal_bhavanEndemic, setBal_bhavanEndemic] = useState([]);
    const [Bal_bhavanIndigenous, setBal_bhavanIndigenous] = useState([]);
    const [Bal_bhavanExotic, setBal_bhavanExotic] = useState([]);
    const [Bal_bhavanEndangered, setBal_bhavanEndangered] = useState([]);

    const arrBal_bhavan = [];

    const [Bal_bhavanEvergreenPhenology, setBal_bhavanEvergreenPhenology] = useState([]);
    const [Bal_bhavanDeciduousPhenology, setBal_bhavanDeciduousPhenology] = useState([]);

    const arrBal_bhavanPhenology = [];

    const [Bal_bhavanLeastConcern, setBal_bhavanLeastConcern] = useState([]);
    const [Bal_bhavanNotknown, setBal_bhavanNotknown] = useState([]);
    const [Bal_bhavanNearThreatened, setBal_bhavanNearThreatened] = useState([]);
    const [Bal_bhavanVulnerable, setBal_bhavanVulnerable] = useState([]);
    const [Bal_bhavanCriticallyEndangered, setBal_bhavanCriticallyEndangered] = useState([]);
    const [Bal_bhavanConservationDependent, setBal_bhavanConservationDependent] = useState([]);

    const arrBal_bhavanConservation = [];

    // 

    const [CircularData, setCircularData] = useState([]);
    const [CircularEvergreen, setCircularEvergreen] = useState([]);
    const [CircularDeciduous, setCircularDeciduous] = useState([]);
    const [CircularEndemic, setCircularEndemic] = useState([]);
    const [CircularIndigenous, setCircularIndigenous] = useState([]);
    const [CircularExotic, setCircularExotic] = useState([]);
    const [CircularEndangered, setCircularEndangered] = useState([]);

    const arrCircular = [];

    const [CircularEvergreenPhenology, setCircularEvergreenPhenology] = useState([]);
    const [CircularDeciduousPhenology, setCircularDeciduousPhenology] = useState([]);

    const arrCircularPhenology = [];

    const [CircularLeastConcern, setCircularLeastConcern] = useState([]);
    const [CircularNotknown, setCircularNotknown] = useState([]);
    const [CircularNearThreatened, setCircularNearThreatened] = useState([]);
    const [CircularVulnerable, setCircularVulnerable] = useState([]);
    const [CircularCriticallyEndangered, setCircularCriticallyEndangered] = useState([]);
    const [CircularConservationDependent, setCircularConservationDependent] = useState([]);

    const arrCircularConservation = [];

    // 

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

    const arrDogPhenology = [];

    const [dogLeastConcern, setdogLeastConcern] = useState([]);
    const [dogNotknown, setdogNotknown] = useState([]);
    const [dogNearThreatened, setdogNearThreatened] = useState([]);
    const [dogVulnerable, setdogVulnerable] = useState([]);
    const [dogCriticallyEndangered, setdogCriticallyEndangered] = useState([]);
    const [dogConservationDependent, setdogConservationDependent] = useState([]);

    const arrDogConservation = [];

    //   

    const [EdwardData, setEdwardData] = useState([]);
    const [EdwardEvergreen, setEdwardEvergreen] = useState([]);
    const [EdwardDeciduous, setEdwardDeciduous] = useState([]);
    const [EdwardEndemic, setEdwardEndemic] = useState([]);
    const [EdwardIndigenous, setEdwardIndigenous] = useState([]);
    const [EdwardExotic, setEdwardExotic] = useState([]);
    const [EdwardEndangered, setEdwardEndangered] = useState([]);

    const arrEdward = [];

    const [EdwardEvergreenPhenology, setEdwardEvergreenPhenology] = useState([]);
    const [EdwardDeciduousPhenology, setEdwardDeciduousPhenology] = useState([]);

    const arrEdwardPhenology = [];

    const [EdwardLeastConcern, setEdwardLeastConcern] = useState([]);
    const [EdwardNotknown, setEdwardNotknown] = useState([]);
    const [EdwardNearThreatened, setEdwardNearThreatened] = useState([]);
    const [EdwardVulnerable, setEdwardVulnerable] = useState([]);
    const [EdwardCriticallyEndangered, setEdwardCriticallyEndangered] = useState([]);
    const [EdwardConservationDependent, setEdwardConservationDependent] = useState([]);

    const arrEdwardConservation = [];

    // 

    const [High_courtData, setHigh_courtData] = useState([]);
    const [High_courtEvergreen, setHigh_courtEvergreen] = useState([]);
    const [High_courtDeciduous, setHigh_courtDeciduous] = useState([]);
    const [High_courtEndemic, setHigh_courtEndemic] = useState([]);
    const [High_courtIndigenous, setHigh_courtIndigenous] = useState([]);
    const [High_courtExotic, setHigh_courtExotic] = useState([]);
    const [High_courtEndangered, setHigh_courtEndangered] = useState([]);

    const arrHigh_court = [];

    const [High_courtEvergreenPhenology, setHigh_courtEvergreenPhenology] = useState([]);
    const [High_courtDeciduousPhenology, setHigh_courtDeciduousPhenology] = useState([]);

    const arrHigh_courtPhenology = [];

    const [High_courtLeastConcern, setHigh_courtLeastConcern] = useState([]);
    const [High_courtNotknown, setHigh_courtNotknown] = useState([]);
    const [High_courtNearThreatened, setHigh_courtNearThreatened] = useState([]);
    const [High_courtVulnerable, setHigh_courtVulnerable] = useState([]);
    const [High_courtCriticallyEndangered, setHigh_courtCriticallyEndangered] = useState([]);
    const [High_courtConservationDependent, setHigh_courtConservationDependent] = useState([]);

    const arrHigh_courtConservation = [];

    //

    const [Kslta_hort_deptData, setKslta_hort_deptData] = useState([]);
    const [Kslta_hort_deptEvergreen, setKslta_hort_deptEvergreen] = useState([]);
    const [Kslta_hort_deptDeciduous, setKslta_hort_deptDeciduous] = useState([]);
    const [Kslta_hort_deptEndemic, setKslta_hort_deptEndemic] = useState([]);
    const [Kslta_hort_deptIndigenous, setKslta_hort_deptIndigenous] = useState([]);
    const [Kslta_hort_deptExotic, setKslta_hort_deptExotic] = useState([]);
    const [Kslta_hort_deptEndangered, setKslta_hort_deptEndangered] = useState([]);

    const arrKslta_hort_dept = [];

    const [Kslta_hort_deptEvergreenPhenology, setKslta_hort_deptEvergreenPhenology] = useState([]);
    const [Kslta_hort_deptDeciduousPhenology, setKslta_hort_deptDeciduousPhenology] = useState([]);

    const arrKslta_hort_deptPhenology = [];

    const [Kslta_hort_deptLeastConcern, setKslta_hort_deptLeastConcern] = useState([]);
    const [Kslta_hort_deptNotknown, setKslta_hort_deptNotknown] = useState([]);
    const [Kslta_hort_deptNearThreatened, setKslta_hort_deptNearThreatened] = useState([]);
    const [Kslta_hort_deptVulnerable, setKslta_hort_deptVulnerable] = useState([]);
    const [Kslta_hort_deptCriticallyEndangered, setKslta_hort_deptCriticallyEndangered] = useState([]);
    const [Kslta_hort_deptConservationDependent, setKslta_hort_deptConservationDependent] = useState([]);

    const arrKslta_hort_deptConservation = [];

    //   
    const [Park_1Data, setPark_1Data] = useState([]);
    const [Park_1Evergreen, setPark_1Evergreen] = useState([]);
    const [Park_1Deciduous, setPark_1Deciduous] = useState([]);
    const [Park_1Endemic, setPark_1Endemic] = useState([]);
    const [Park_1Indigenous, setPark_1Indigenous] = useState([]);
    const [Park_1Exotic, setPark_1Exotic] = useState([]);
    const [Park_1Endangered, setPark_1Endangered] = useState([]);

    const arrPark_1 = [];

    const [Park_1EvergreenPhenology, setPark_1EvergreenPhenology] = useState([]);
    const [Park_1DeciduousPhenology, setPark_1DeciduousPhenology] = useState([]);

    const arrPark_1Phenology = [];

    const [Park_1LeastConcern, setPark_1LeastConcern] = useState([]);
    const [Park_1Notknown, setPark_1Notknown] = useState([]);
    const [Park_1NearThreatened, setPark_1NearThreatened] = useState([]);
    const [Park_1Vulnerable, setPark_1Vulnerable] = useState([]);
    const [Park_1CriticallyEndangered, setPark_1CriticallyEndangered] = useState([]);
    const [Park_1ConservationDependent, setPark_1ConservationDependent] = useState([]);

    const arrPark_1Conservation = [];

    //   
    const [Park_2Data, setPark_2Data] = useState([]);
    const [Park_2Evergreen, setPark_2Evergreen] = useState([]);
    const [Park_2Deciduous, setPark_2Deciduous] = useState([]);
    const [Park_2Endemic, setPark_2Endemic] = useState([]);
    const [Park_2Indigenous, setPark_2Indigenous] = useState([]);
    const [Park_2Exotic, setPark_2Exotic] = useState([]);
    const [Park_2Endangered, setPark_2Endangered] = useState([]);

    const arrPark_2 = [];

    const [Park_2EvergreenPhenology, setPark_2EvergreenPhenology] = useState([]);
    const [Park_2DeciduousPhenology, setPark_2DeciduousPhenology] = useState([]);

    const arrPark_2Phenology = [];

    const [Park_2LeastConcern, setPark_2LeastConcern] = useState([]);
    const [Park_2Notknown, setPark_2Notknown] = useState([]);
    const [Park_2NearThreatened, setPark_2NearThreatened] = useState([]);
    const [Park_2Vulnerable, setPark_2Vulnerable] = useState([]);
    const [Park_2CriticallyEndangered, setPark_2CriticallyEndangered] = useState([]);
    const [Park_2ConservationDependent, setPark_2ConservationDependent] = useState([]);

    const arrPark_2Conservation = [];
    // 

    const [Park_opp_snake_parkData, setPark_opp_snake_parkData] = useState([]);
    const [Park_opp_snake_parkEvergreen, setPark_opp_snake_parkEvergreen] = useState([]);
    const [Park_opp_snake_parkDeciduous, setPark_opp_snake_parkDeciduous] = useState([]);
    const [Park_opp_snake_parkEndemic, setPark_opp_snake_parkEndemic] = useState([]);
    const [Park_opp_snake_parkIndigenous, setPark_opp_snake_parkIndigenous] = useState([]);
    const [Park_opp_snake_parkExotic, setPark_opp_snake_parkExotic] = useState([]);
    const [Park_opp_snake_parkEndangered, setPark_opp_snake_parkEndangered] = useState([]);

    const arrPark_opp_snake_park = [];

    const [Park_opp_snake_parkEvergreenPhenology, setPark_opp_snake_parkEvergreenPhenology] = useState([]);
    const [Park_opp_snake_parkDeciduousPhenology, setPark_opp_snake_parkDeciduousPhenology] = useState([]);

    const arrPark_opp_snake_parkPhenology = [];

    const [Park_opp_snake_parkLeastConcern, setPark_opp_snake_parkLeastConcern] = useState([]);
    const [Park_opp_snake_parkNotknown, setPark_opp_snake_parkNotknown] = useState([]);
    const [Park_opp_snake_parkNearThreatened, setPark_opp_snake_parkNearThreatened] = useState([]);
    const [Park_opp_snake_parkVulnerable, setPark_opp_snake_parkVulnerable] = useState([]);
    const [Park_opp_snake_parkCriticallyEndangered, setPark_opp_snake_parkCriticallyEndangered] = useState([]);
    const [Park_opp_snake_parkConservationDependent, setPark_opp_snake_parkConservationDependent] = useState([]);

    const arrPark_opp_snake_parkConservation = [];

    //

    const [Park_opp_wine_boardData, setPark_opp_wine_boardData] = useState([]);
    const [Park_opp_wine_boardEvergreen, setPark_opp_wine_boardEvergreen] = useState([]);
    const [Park_opp_wine_boardDeciduous, setPark_opp_wine_boardDeciduous] = useState([]);
    const [Park_opp_wine_boardEndemic, setPark_opp_wine_boardEndemic] = useState([]);
    const [Park_opp_wine_boardIndigenous, setPark_opp_wine_boardIndigenous] = useState([]);
    const [Park_opp_wine_boardExotic, setPark_opp_wine_boardExotic] = useState([]);
    const [Park_opp_wine_boardEndangered, setPark_opp_wine_boardEndangered] = useState([]);

    const arrPark_opp_wine_board = [];

    const [Park_opp_wine_boardEvergreenPhenology, setPark_opp_wine_boardEvergreenPhenology] = useState([]);
    const [Park_opp_wine_boardDeciduousPhenology, setPark_opp_wine_boardDeciduousPhenology] = useState([]);

    const arrPark_opp_wine_boardPhenology = [];

    const [Park_opp_wine_boardLeastConcern, setPark_opp_wine_boardLeastConcern] = useState([]);
    const [Park_opp_wine_boardNotknown, setPark_opp_wine_boardNotknown] = useState([]);
    const [Park_opp_wine_boardNearThreatened, setPark_opp_wine_boardNearThreatened] = useState([]);
    const [Park_opp_wine_boardVulnerable, setPark_opp_wine_boardVulnerable] = useState([]);
    const [Park_opp_wine_boardCriticallyEndangered, setPark_opp_wine_boardCriticallyEndangered] = useState([]);
    const [Park_opp_wine_boardConservationDependent, setPark_opp_wine_boardConservationDependent] = useState([]);

    const arrPark_opp_wine_boardConservation = [];

    //   

    const [Park_opp_workers_clubData, setPark_opp_workers_clubData] = useState([]);
    const [Park_opp_workers_clubEvergreen, setPark_opp_workers_clubEvergreen] = useState([]);
    const [Park_opp_workers_clubDeciduous, setPark_opp_workers_clubDeciduous] = useState([]);
    const [Park_opp_workers_clubEndemic, setPark_opp_workers_clubEndemic] = useState([]);
    const [Park_opp_workers_clubIndigenous, setPark_opp_workers_clubIndigenous] = useState([]);
    const [Park_opp_workers_clubExotic, setPark_opp_workers_clubExotic] = useState([]);
    const [Park_opp_workers_clubEndangered, setPark_opp_workers_clubEndangered] = useState([]);

    const arrPark_opp_workers_club = [];

    const [Park_opp_workers_clubEvergreenPhenology, setPark_opp_workers_clubEvergreenPhenology] = useState([]);
    const [Park_opp_workers_clubDeciduousPhenology, setPark_opp_workers_clubDeciduousPhenology] = useState([]);

    const arrPark_opp_workers_clubPhenology = [];

    const [Park_opp_workers_clubLeastConcern, setPark_opp_workers_clubLeastConcern] = useState([]);
    const [Park_opp_workers_clubNotknown, setPark_opp_workers_clubNotknown] = useState([]);
    const [Park_opp_workers_clubNearThreatened, setPark_opp_workers_clubNearThreatened] = useState([]);
    const [Park_opp_workers_clubVulnerable, setPark_opp_workers_clubVulnerable] = useState([]);
    const [Park_opp_workers_clubCriticallyEndangered, setPark_opp_workers_clubCriticallyEndangered] = useState([]);
    const [Park_opp_workers_clubConservationDependent, setPark_opp_workers_clubConservationDependent] = useState([]);

    const arrPark_opp_workers_clubConservation = [];

    //   

    const [RoseData, setRoseData] = useState([]);
    const [RoseEvergreen, setRoseEvergreen] = useState([]);
    const [RoseDeciduous, setRoseDeciduous] = useState([]);
    const [RoseEndemic, setRoseEndemic] = useState([]);
    const [RoseIndigenous, setRoseIndigenous] = useState([]);
    const [RoseExotic, setRoseExotic] = useState([]);
    const [RoseEndangered, setRoseEndangered] = useState([]);

    const arrRose = [];

    const [RoseEvergreenPhenology, setRoseEvergreenPhenology] = useState([]);
    const [RoseDeciduousPhenology, setRoseDeciduousPhenology] = useState([]);

    const arrRosePhenology = [];

    const [RoseLeastConcern, setRoseLeastConcern] = useState([]);
    const [RoseNotknown, setRoseNotknown] = useState([]);
    const [RoseNearThreatened, setRoseNearThreatened] = useState([]);
    const [RoseVulnerable, setRoseVulnerable] = useState([]);
    const [RoseCriticallyEndangered, setRoseCriticallyEndangered] = useState([]);
    const [RoseConservationDependent, setRoseConservationDependent] = useState([]);

    const arrRoseConservation = [];

    // 

    const [SecretaryData, setSecretaryData] = useState([]);
    const [SecretaryEvergreen, setSecretaryEvergreen] = useState([]);
    const [SecretaryDeciduous, setSecretaryDeciduous] = useState([]);
    const [SecretaryEndemic, setSecretaryEndemic] = useState([]);
    const [SecretaryIndigenous, setSecretaryIndigenous] = useState([]);
    const [SecretaryExotic, setSecretaryExotic] = useState([]);
    const [SecretaryEndangered, setSecretaryEndangered] = useState([]);

    const arrSecretary = [];

    const [SecretaryEvergreenPhenology, setSecretaryEvergreenPhenology] = useState([]);
    const [SecretaryDeciduousPhenology, setSecretaryDeciduousPhenology] = useState([]);

    const arrSecretaryPhenology = [];

    const [SecretaryLeastConcern, setSecretaryLeastConcern] = useState([]);
    const [SecretaryNotknown, setSecretaryNotknown] = useState([]);
    const [SecretaryNearThreatened, setSecretaryNearThreatened] = useState([]);
    const [SecretaryVulnerable, setSecretaryVulnerable] = useState([]);
    const [SecretaryCriticallyEndangered, setSecretaryCriticallyEndangered] = useState([]);
    const [SecretaryConservationDependent, setSecretaryConservationDependent] = useState([]);

    const arrSecretaryConservation = [];

    //   

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

    const arrSnakePhenology = [];

    const [SnakeLeastConcern, setSnakeLeastConcern] = useState([]);
    const [SnakeNotknown, setSnakeNotknown] = useState([]);
    const [SnakeNearThreatened, setSnakeNearThreatened] = useState([]);
    const [SnakeVulnerable, setSnakeVulnerable] = useState([]);
    const [SnakeCriticallyEndangered, setSnakeCriticallyEndangered] = useState([]);
    const [SnakeConservationDependent, setSnakeConservationDependent] = useState([]);

    const arrSnakeConservation = [];

    // 

    const [TriangularData, setTriangularData] = useState([]);
    const [TriangularEvergreen, setTriangularEvergreen] = useState([]);
    const [TriangularDeciduous, setTriangularDeciduous] = useState([]);
    const [TriangularEndemic, setTriangularEndemic] = useState([]);
    const [TriangularIndigenous, setTriangularIndigenous] = useState([]);
    const [TriangularExotic, setTriangularExotic] = useState([]);
    const [TriangularEndangered, setTriangularEndangered] = useState([]);

    const arrTriangular = [];

    const [TriangularEvergreenPhenology, setTriangularEvergreenPhenology] = useState([]);
    const [TriangularDeciduousPhenology, setTriangularDeciduousPhenology] = useState([]);

    const arrTriangularPhenology = [];

    const [TriangularLeastConcern, setTriangularLeastConcern] = useState([]);
    const [TriangularNotknown, setTriangularNotknown] = useState([]);
    const [TriangularNearThreatened, setTriangularNearThreatened] = useState([]);
    const [TriangularVulnerable, setTriangularVulnerable] = useState([]);
    const [TriangularCriticallyEndangered, setTriangularCriticallyEndangered] = useState([]);
    const [TriangularConservationDependent, setTriangularConservationDependent] = useState([]);

    const arrTriangularConservation = [];

    // 

    const [VictoriaData, setVictoriaData] = useState([]);
    const [VictoriaEvergreen, setVictoriaEvergreen] = useState([]);
    const [VictoriaDeciduous, setVictoriaDeciduous] = useState([]);
    const [VictoriaEndemic, setVictoriaEndemic] = useState([]);
    const [VictoriaIndigenous, setVictoriaIndigenous] = useState([]);
    const [VictoriaExotic, setVictoriaExotic] = useState([]);
    const [VictoriaEndangered, setVictoriaEndangered] = useState([]);

    const arrVictoria = [];

    const [VictoriaEvergreenPhenology, setVictoriaEvergreenPhenology] = useState([]);
    const [VictoriaDeciduousPhenology, setVictoriaDeciduousPhenology] = useState([]);

    const arrVictoriaPhenology = [];

    const [VictoriaLeastConcern, setVictoriaLeastConcern] = useState([]);
    const [VictoriaNotknown, setVictoriaNotknown] = useState([]);
    const [VictoriaNearThreatened, setVictoriaNearThreatened] = useState([]);
    const [VictoriaVulnerable, setVictoriaVulnerable] = useState([]);
    const [VictoriaCriticallyEndangered, setVictoriaCriticallyEndangered] = useState([]);
    const [VictoriaConservationDependent, setVictoriaConservationDependent] = useState([]);

    const arrVictoriaConservation = [];

    //   

    const [WineData, setWineData] = useState([]);
    const [WineEvergreen, setWineEvergreen] = useState([]);
    const [WineDeciduous, setWineDeciduous] = useState([]);
    const [WineEndemic, setWineEndemic] = useState([]);
    const [WineIndigenous, setWineIndigenous] = useState([]);
    const [WineExotic, setWineExotic] = useState([]);
    const [WineEndangered, setWineEndangered] = useState([]);

    const arrWine = [];

    const [WineEvergreenPhenology, setWineEvergreenPhenology] = useState([]);
    const [WineDeciduousPhenology, setWineDeciduousPhenology] = useState([]);

    const arrWinePhenology = [];

    const [WineLeastConcern, setWineLeastConcern] = useState([]);
    const [WineNotknown, setWineNotknown] = useState([]);
    const [WineNearThreatened, setWineNearThreatened] = useState([]);
    const [WineVulnerable, setWineVulnerable] = useState([]);
    const [WineCriticallyEndangered, setWineCriticallyEndangered] = useState([]);
    const [WineConservationDependent, setWineConservationDependent] = useState([]);

    const arrWineConservation = [];


    //   

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

    const [WorkersLeastConcern, setWorkersLeastConcern] = useState([]);
    const [WorkersNotknown, setWorkersNotknown] = useState([]);
    const [WorkersNearThreatened, setWorkersNearThreatened] = useState([]);
    const [WorkersVulnerable, setWorkersVulnerable] = useState([]);
    const [WorkersCriticallyEndangered, setWorkersCriticallyEndangered] = useState([]);
    const [WorkersConservationDependent, setWorkersConservationDependent] = useState([]);

    const arrWorkersConservation = [];

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

    const arrCentral_libraryPhenology = [];

    const [Central_libraryLeastConcern, setCentral_libraryLeastConcern] = useState([]);
    const [Central_libraryNotknown, setCentral_libraryNotknown] = useState([]);
    const [Central_libraryNearThreatened, setCentral_libraryNearThreatened] = useState([]);
    const [Central_libraryVulnerable, setCentral_libraryVulnerable] = useState([]);
    const [Central_libraryCriticallyEndangered, setCentral_libraryCriticallyEndangered] = useState([]);
    const [Central_libraryConservationDependent, setCentral_libraryConservationDependent] = useState([]);

    const arrCentral_libraryConservation = [];


    useEffect(() => {
        axios.get("https://afternoon-mountain-93761.herokuapp.com/Avenue_trees_Evergreen").then((res) => {
            console.log(res.data.length);
            setAvenue_treesEvergreen([res.data.length]);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/Avenue_trees_Deciduous").then((res) => {
            console.log(res.data.length);
            setAvenue_treesDeciduous(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/Avenue_trees_Endemic").then((res) => {
            console.log(res.data.length);
            setAvenue_treesEndemic(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/Avenue_trees_Indigenous").then((res) => {
            console.log(res.data.length);
            setAvenue_treesIndigenous(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/Avenue_trees_Exotic").then((res) => {
            console.log(res.data.length);
            setAvenue_treesExotic(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/Avenue_trees_Endangered").then((res) => {
            console.log(res.data.length);
            setAvenue_treesEndangered(res.data.length);
        });


        axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/Avenue_trees_Evergreen").then((res) => {
            console.log(res.data.length);
            setAvenue_treesEvergreenPhenology([res.data.length]);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/Avenue_trees_Deciduous").then((res) => {
            console.log(res.data.length);
            setAvenue_treesDeciduousPhenology(res.data.length);
        });


        axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Avenue_treesLeastConcern").then(res => {
            console.log(res.data.length)
            setAvenue_treesLeastConcern(res.data.length)

        })
        axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Avenue_treesNotknown").then(res => {
            console.log(res.data)
            setAvenue_treesNotknown(res.data.length)
        })
        axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Avenue_treesNearThreatened").then(res => {
            console.log(res.data.length)
            setAvenue_treesNearThreatened(res.data.length)
        })
        axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Avenue_treesVulnerable").then(res => {
            console.log(res.data.length)
            setAvenue_treesVulnerable(res.data.length)
        })
        axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Avenue_treesCriticallyEndangered").then(res => {
            console.log(res.data.length)
            setAvenue_treesCriticallyEndangered(res.data.length)
        })
        axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Avenue_treesConservationDependent").then(res => {
            console.log(res.data.length)
            setAvenue_treesConservationDependent(res.data.length)
        })


        // 

        axios.get("https://afternoon-mountain-93761.herokuapp.com/bal_bhavan_Evergreen").then((res) => {
            console.log(res.data.length);
            setBal_bhavanEvergreen([res.data.length]);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/bal_bhavan_Deciduous").then((res) => {
            console.log(res.data.length);
            setBal_bhavanDeciduous(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/bal_bhavan_Endemic").then((res) => {
            console.log(res.data.length);
            setBal_bhavanEndemic(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/bal_bhavan_Indigenous").then((res) => {
            console.log(res.data.length);
            setBal_bhavanIndigenous(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/bal_bhavan_Exotic").then((res) => {
            console.log(res.data.length);
            setBal_bhavanExotic(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/bal_bhavan_Endangered").then((res) => {
            console.log(res.data.length);
            setBal_bhavanEndangered(res.data.length);
        });


        axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/bal_bhavan_Evergreen").then((res) => {
            console.log(res.data.length);
            setBal_bhavanEvergreenPhenology([res.data.length]);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/bal_bhavan_Deciduous").then((res) => {
            console.log(res.data.length);
            setBal_bhavanDeciduousPhenology(res.data.length);
        });


        axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Bal_bhavanLeastConcern").then(res => {
            console.log(res.data.length)
            setBal_bhavanLeastConcern(res.data.length)

        })
        axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Bal_bhavanNotknown").then(res => {
            console.log(res.data)
            setBal_bhavanNotknown(res.data.length)
        })
        axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Bal_bhavanNearThreatened").then(res => {
            console.log(res.data.length)
            setBal_bhavanNearThreatened(res.data.length)
        })
        axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Bal_bhavanVulnerable").then(res => {
            console.log(res.data.length)
            setBal_bhavanVulnerable(res.data.length)
        })
        axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Bal_bhavanCriticallyEndangered").then(res => {
            console.log(res.data.length)
            setBal_bhavanCriticallyEndangered(res.data.length)
        })
        axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Bal_bhavanConservationDependent").then(res => {
            console.log(res.data.length)
            setBal_bhavanConservationDependent(res.data.length)
        })
        // 

        axios.get("https://afternoon-mountain-93761.herokuapp.com/CircularEvergreen").then((res) => {
            console.log(res.data.length);
            setCircularEvergreen([res.data.length]);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/CircularDeciduous").then((res) => {
            console.log(res.data.length);
            setCircularDeciduous(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/CircularEndemic").then((res) => {
            console.log(res.data.length);
            setCircularEndemic(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/CircularIndigenous").then((res) => {
            console.log(res.data.length);
            setCircularIndigenous(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/CircularExotic").then((res) => {
            console.log(res.data.length);
            setCircularExotic(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/CircularEndangered").then((res) => {
            console.log(res.data.length);
            setCircularEndangered(res.data.length);
        });



        axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/CircularEvergreen").then((res) => {
            console.log(res.data.length);
            setCircularEvergreenPhenology([res.data.length]);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/CircularDeciduous").then((res) => {
            console.log(res.data.length);
            setCircularDeciduousPhenology(res.data.length);
        });

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

        // 
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

        //   

        axios.get("https://afternoon-mountain-93761.herokuapp.com/edward_park_Evergreen").then((res) => {
            console.log(res.data.length);
            setEdwardEvergreen([res.data.length]);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/edward_park_Deciduous").then((res) => {
            console.log(res.data.length);
            setEdwardDeciduous(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/edward_park_Endemic").then((res) => {
            console.log(res.data.length);
            setEdwardEndemic(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/edward_park_Indigenous").then((res) => {
            console.log(res.data.length);
            setEdwardIndigenous(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/edward_park_Exotic").then((res) => {
            console.log(res.data.length);
            setEdwardExotic(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/edward_park_Endangered").then((res) => {
            console.log(res.data.length);
            setEdwardEndangered(res.data.length);
        });


        axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/edward_park_Evergreen").then((res) => {
            console.log(res.data.length);
            setEdwardEvergreenPhenology([res.data.length]);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/edward_park_Deciduous").then((res) => {
            console.log(res.data.length);
            setEdwardDeciduousPhenology(res.data.length);
        });


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

        //   
        axios.get("https://afternoon-mountain-93761.herokuapp.com/high_court_park_Evergreen").then((res) => {
            console.log(res.data.length);
            setHigh_courtEvergreen([res.data.length]);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/high_court_park_Deciduous").then((res) => {
            console.log(res.data.length);
            setHigh_courtDeciduous(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/high_court_park_Endemic").then((res) => {
            console.log(res.data.length);
            setHigh_courtEndemic(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/high_court_park_Indigenous").then((res) => {
            console.log(res.data.length);
            setHigh_courtIndigenous(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/high_court_park_Exotic").then((res) => {
            console.log(res.data.length);
            setHigh_courtExotic(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/high_court_park_Endangered").then((res) => {
            console.log(res.data.length);
            setHigh_courtEndangered(res.data.length);
        });


        axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/high_court_park_Evergreen").then((res) => {
            console.log(res.data.length);
            setHigh_courtEvergreenPhenology([res.data.length]);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/high_court_park_Deciduous").then((res) => {
            console.log(res.data.length);
            setHigh_courtDeciduousPhenology(res.data.length);
        });


        axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/high_court_parkLeastConcern").then(res => {
            console.log(res.data.length)
            setHigh_courtLeastConcern(res.data.length)

        })
        axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/high_court_parkNotknown").then(res => {
            console.log(res.data)
            setHigh_courtNotknown(res.data.length)
        })
        axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/high_court_parkNearThreatened").then(res => {
            console.log(res.data.length)
            setHigh_courtNearThreatened(res.data.length)
        })
        axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/high_court_parkVulnerable").then(res => {
            console.log(res.data.length)
            setHigh_courtVulnerable(res.data.length)
        })
        axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/high_court_parkCriticallyEndangered").then(res => {
            console.log(res.data.length)
            setHigh_courtCriticallyEndangered(res.data.length)
        })
        axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/high_court_parkConservationDependent").then(res => {
            console.log(res.data.length)
            setHigh_courtConservationDependent(res.data.length)
        })

        //   


        axios.get("https://afternoon-mountain-93761.herokuapp.com/Kslta_hort_dept_Evergreen").then((res) => {
            console.log(res.data.length);
            setKslta_hort_deptEvergreen([res.data.length]);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/Kslta_hort_dept_Deciduous").then((res) => {
            console.log(res.data.length);
            setKslta_hort_deptDeciduous(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/Kslta_hort_dept_Endemic").then((res) => {
            console.log(res.data.length);
            setKslta_hort_deptEndemic(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/Kslta_hort_dept_Indigenous").then((res) => {
            console.log(res.data.length);
            setKslta_hort_deptIndigenous(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/Kslta_hort_dept_Exotic").then((res) => {
            console.log(res.data.length);
            setKslta_hort_deptExotic(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/Kslta_hort_dept_Endangered").then((res) => {
            console.log(res.data.length);
            setKslta_hort_deptEndangered(res.data.length);
        });


        axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/Kslta_hort_dept_Evergreen").then((res) => {
            console.log(res.data.length);
            setKslta_hort_deptEvergreenPhenology([res.data.length]);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/Kslta_hort_dept_Deciduous").then((res) => {
            console.log(res.data.length);
            setKslta_hort_deptDeciduousPhenology(res.data.length);
        });


        axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Kslta_hort_deptLeastConcern").then(res => {
            console.log(res.data.length)
            setKslta_hort_deptLeastConcern(res.data.length)

        })
        axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Kslta_hort_deptNotknown").then(res => {
            console.log(res.data)
            setKslta_hort_deptNotknown(res.data.length)
        })
        axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Kslta_hort_deptNearThreatened").then(res => {
            console.log(res.data.length)
            setKslta_hort_deptNearThreatened(res.data.length)
        })
        axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Kslta_hort_deptVulnerable").then(res => {
            console.log(res.data.length)
            setKslta_hort_deptVulnerable(res.data.length)
        })
        axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Kslta_hort_deptCriticallyEndangered").then(res => {
            console.log(res.data.length)
            setKslta_hort_deptCriticallyEndangered(res.data.length)
        })
        axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Kslta_hort_deptConservationDependent").then(res => {
            console.log(res.data.length)
            setKslta_hort_deptConservationDependent(res.data.length)
        })
        // 

        axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_1Evergreen").then((res) => {
            console.log(res.data.length);
            setPark_1Evergreen([res.data.length]);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_1Deciduous").then((res) => {
            console.log(res.data.length);
            setPark_1Deciduous(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_1Endemic").then((res) => {
            console.log(res.data.length);
            setPark_1Endemic(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_1Indigenous").then((res) => {
            console.log(res.data.length);
            setPark_1Indigenous(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_1Exotic").then((res) => {
            console.log(res.data.length);
            setPark_1Exotic(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_1Endangered").then((res) => {
            console.log(res.data.length);
            setPark_1Endangered(res.data.length);
        });


        axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/Park_1Evergreen").then((res) => {
            console.log(res.data.length);
            setPark_1EvergreenPhenology([res.data.length]);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/Park_1Deciduous").then((res) => {
            console.log(res.data.length);
            setPark_1DeciduousPhenology(res.data.length);
        });


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

        // 

        axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_2Evergreen").then((res) => {
            console.log(res.data.length);
            setPark_2Evergreen([res.data.length]);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_2Deciduous").then((res) => {
            console.log(res.data.length);
            setPark_2Deciduous(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_2Endemic").then((res) => {
            console.log(res.data.length);
            setPark_2Endemic(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_2Indigenous").then((res) => {
            console.log(res.data.length);
            setPark_2Indigenous(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_2Exotic").then((res) => {
            console.log(res.data.length);
            setPark_2Exotic(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_2Endangered").then((res) => {
            console.log(res.data.length);
            setPark_2Endangered(res.data.length);
        });


        axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/Park_2Evergreen").then((res) => {
            console.log(res.data.length);
            setPark_2EvergreenPhenology([res.data.length]);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/Park_2Deciduous").then((res) => {
            console.log(res.data.length);
            setPark_2DeciduousPhenology(res.data.length);
        });


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

        //   

        axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_opp_snake_park_Evergreen").then((res) => {
            console.log(res.data.length);
            setPark_opp_snake_parkEvergreen([res.data.length]);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_opp_snake_park_Deciduous").then((res) => {
            console.log(res.data.length);
            setPark_opp_snake_parkDeciduous(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_opp_snake_park_Endemic").then((res) => {
            console.log(res.data.length);
            setPark_opp_snake_parkEndemic(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_opp_snake_park_Indigenous").then((res) => {
            console.log(res.data.length);
            setPark_opp_snake_parkIndigenous(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_opp_snake_park_Exotic").then((res) => {
            console.log(res.data.length);
            setPark_opp_snake_parkExotic(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_opp_snake_park_Endangered").then((res) => {
            console.log(res.data.length);
            setPark_opp_snake_parkEndangered(res.data.length);
        });


        axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/Park_opp_snake_park_Evergreen").then((res) => {
            console.log(res.data.length);
            setPark_opp_snake_parkEvergreenPhenology([res.data.length]);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/Park_opp_snake_park_Deciduous").then((res) => {
            console.log(res.data.length);
            setPark_opp_snake_parkDeciduousPhenology(res.data.length);
        });


        axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_opp_snake_parkLeastConcern").then(res => {
            console.log(res.data.length)
            setPark_opp_snake_parkLeastConcern(res.data.length)

        })
        axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_opp_snake_parkNotknown").then(res => {
            console.log(res.data)
            setPark_opp_snake_parkNotknown(res.data.length)
        })
        axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_opp_snake_parkNearThreatened").then(res => {
            console.log(res.data.length)
            setPark_opp_snake_parkNearThreatened(res.data.length)
        })
        axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_opp_snake_parkVulnerable").then(res => {
            console.log(res.data.length)
            setPark_opp_snake_parkVulnerable(res.data.length)
        })
        axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_opp_snake_parkCriticallyEndangered").then(res => {
            console.log(res.data.length)
            setPark_opp_snake_parkCriticallyEndangered(res.data.length)
        })
        axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_opp_snake_parkConservationDependent").then(res => {
            console.log(res.data.length)
            setPark_opp_snake_parkConservationDependent(res.data.length)
        })

        axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_opp_wine_board_Evergreen").then((res) => {
            console.log(res.data.length);
            setPark_opp_wine_boardEvergreen([res.data.length]);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_opp_wine_board_Deciduous").then((res) => {
            console.log(res.data.length);
            setPark_opp_wine_boardDeciduous(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_opp_wine_board_Endemic").then((res) => {
            console.log(res.data.length);
            setPark_opp_wine_boardEndemic(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_opp_wine_board_Indigenous").then((res) => {
            console.log(res.data.length);
            setPark_opp_wine_boardIndigenous(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_opp_wine_board_Exotic").then((res) => {
            console.log(res.data.length);
            setPark_opp_wine_boardExotic(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_opp_wine_board_Endangered").then((res) => {
            console.log(res.data.length);
            setPark_opp_wine_boardEndangered(res.data.length);
        });


        axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/Park_opp_wine_board_Evergreen").then((res) => {
            console.log(res.data.length);
            setPark_opp_wine_boardEvergreenPhenology([res.data.length]);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/Park_opp_wine_board_Deciduous").then((res) => {
            console.log(res.data.length);
            setPark_opp_wine_boardDeciduousPhenology(res.data.length);
        });


        axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_opp_wine_boardLeastConcern").then(res => {
            console.log(res.data.length)
            setPark_opp_wine_boardLeastConcern(res.data.length)

        })
        axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_opp_wine_boardNotknown").then(res => {
            console.log(res.data)
            setPark_opp_wine_boardNotknown(res.data.length)
        })
        axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_opp_wine_boardNearThreatened").then(res => {
            console.log(res.data.length)
            setPark_opp_wine_boardNearThreatened(res.data.length)
        })
        axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_opp_wine_boardVulnerable").then(res => {
            console.log(res.data.length)
            setPark_opp_wine_boardVulnerable(res.data.length)
        })
        axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_opp_wine_boardCriticallyEndangered").then(res => {
            console.log(res.data.length)
            setPark_opp_wine_boardCriticallyEndangered(res.data.length)
        })
        axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_opp_wine_boardConservationDependent").then(res => {
            console.log(res.data.length)
            setPark_opp_wine_boardConservationDependent(res.data.length)
        })

        // 

        axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_opp_workers_club_Evergreen").then((res) => {
            console.log(res.data.length);
            setPark_opp_workers_clubEvergreen([res.data.length]);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_opp_workers_club_Deciduous").then((res) => {
            console.log(res.data.length);
            setPark_opp_workers_clubDeciduous(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_opp_workers_club_Endemic").then((res) => {
            console.log(res.data.length);
            setPark_opp_workers_clubEndemic(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_opp_workers_club_Indigenous").then((res) => {
            console.log(res.data.length);
            setPark_opp_workers_clubIndigenous(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_opp_workers_club_Exotic").then((res) => {
            console.log(res.data.length);
            setPark_opp_workers_clubExotic(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_opp_workers_club_Endangered").then((res) => {
            console.log(res.data.length);
            setPark_opp_workers_clubEndangered(res.data.length);
        });


        axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/Park_opp_workers_club_Evergreen").then((res) => {
            console.log(res.data.length);
            setPark_opp_workers_clubEvergreenPhenology([res.data.length]);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/Park_opp_workers_club_Deciduous").then((res) => {
            console.log(res.data.length);
            setPark_opp_workers_clubDeciduousPhenology(res.data.length);
        });


        axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_opp_workers_clubLeastConcern").then(res => {
            console.log(res.data.length)
            setPark_opp_workers_clubLeastConcern(res.data.length)

        })
        axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_opp_workers_clubNotknown").then(res => {
            console.log(res.data)
            setPark_opp_workers_clubNotknown(res.data.length)
        })
        axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_opp_workers_clubNearThreatened").then(res => {
            console.log(res.data.length)
            setPark_opp_workers_clubNearThreatened(res.data.length)
        })
        axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_opp_workers_clubVulnerable").then(res => {
            console.log(res.data.length)
            setPark_opp_workers_clubVulnerable(res.data.length)
        })
        axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_opp_workers_clubCriticallyEndangered").then(res => {
            console.log(res.data.length)
            setPark_opp_workers_clubCriticallyEndangered(res.data.length)
        })
        axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_opp_workers_clubConservationDependent").then(res => {
            console.log(res.data.length)
            setPark_opp_workers_clubConservationDependent(res.data.length)
        })

        // 

        axios.get("https://afternoon-mountain-93761.herokuapp.com/RoseEvergreen").then((res) => {
            console.log(res.data.length);
            setRoseEvergreen([res.data.length]);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/RoseDeciduous").then((res) => {
            console.log(res.data.length);
            setRoseDeciduous(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/RoseEndemic").then((res) => {
            console.log(res.data.length);
            setRoseEndemic(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/RoseIndigenous").then((res) => {
            console.log(res.data.length);
            setRoseIndigenous(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/RoseExotic").then((res) => {
            console.log(res.data.length);
            setRoseExotic(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/RoseEndangered").then((res) => {
            console.log(res.data.length);
            setRoseEndangered(res.data.length);
        });


        axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/RoseEvergreen").then((res) => {
            console.log(res.data.length);
            setRoseEvergreenPhenology([res.data.length]);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/RoseDeciduous").then((res) => {
            console.log(res.data.length);
            setRoseDeciduousPhenology(res.data.length);
        });

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
        // 

        axios.get("https://afternoon-mountain-93761.herokuapp.com/secretary_club_Evergreen").then((res) => {
            console.log(res.data.length);
            setSecretaryEvergreen([res.data.length]);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/secretary_club_Deciduous").then((res) => {
            console.log(res.data.length);
            setSecretaryDeciduous(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/secretary_club_Endemic").then((res) => {
            console.log(res.data.length);
            setSecretaryEndemic(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/secretary_club_Indigenous").then((res) => {
            console.log(res.data.length);
            setSecretaryIndigenous(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/secretary_club_Exotic").then((res) => {
            console.log(res.data.length);
            setSecretaryExotic(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/secretary_club_Endangered").then((res) => {
            console.log(res.data.length);
            setSecretaryEndangered(res.data.length);
        });


        axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/secretary_club_Evergreen").then((res) => {
            console.log(res.data.length);
            setSecretaryEvergreenPhenology([res.data.length]);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/secretary_club_Deciduous").then((res) => {
            console.log(res.data.length);
            setSecretaryDeciduousPhenology(res.data.length);
        });


        axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/SecretaryLeastConcern").then(res => {
            console.log(res.data.length)
            setSecretaryLeastConcern(res.data.length)

        })
        axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/SecretaryNotknown").then(res => {
            console.log(res.data)
            setSecretaryNotknown(res.data.length)
        })
        axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/SecretaryNearThreatened").then(res => {
            console.log(res.data.length)
            setSecretaryNearThreatened(res.data.length)
        })
        axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/SecretaryVulnerable").then(res => {
            console.log(res.data.length)
            setSecretaryVulnerable(res.data.length)
        })
        axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/SecretaryCriticallyEndangered").then(res => {
            console.log(res.data.length)
            setSecretaryCriticallyEndangered(res.data.length)
        })
        axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/SecretaryConservationDependent").then(res => {
            console.log(res.data.length)
            setSecretaryConservationDependent(res.data.length)
        })

        //   

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


        //   


        axios.get("https://afternoon-mountain-93761.herokuapp.com/TriangularEvergreen").then((res) => {
            console.log(res.data.length);
            setTriangularEvergreen([res.data.length]);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/TriangularDeciduous").then((res) => {
            console.log(res.data.length);
            setTriangularDeciduous(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/TriangularEndemic").then((res) => {
            console.log(res.data.length);
            setTriangularEndemic(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/TriangularIndigenous").then((res) => {
            console.log(res.data.length);
            setTriangularIndigenous(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/TriangularExotic").then((res) => {
            console.log(res.data.length);
            setTriangularExotic(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/TriangularEndangered").then((res) => {
            console.log(res.data.length);
            setTriangularEndangered(res.data.length);
        });


        axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/TriangularEvergreen").then((res) => {
            console.log(res.data.length);
            setTriangularEvergreenPhenology([res.data.length]);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/TriangularDeciduous").then((res) => {
            console.log(res.data.length);
            setTriangularDeciduousPhenology(res.data.length);
        });


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

        // 

        axios.get("https://afternoon-mountain-93761.herokuapp.com/Victoria_park_Evergreen").then((res) => {
            console.log(res.data.length);
            setVictoriaEvergreen([res.data.length]);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/Victoria_park_Deciduous").then((res) => {
            console.log(res.data.length);
            setVictoriaDeciduous(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/Victoria_park_Endemic").then((res) => {
            console.log(res.data.length);
            setVictoriaEndemic(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/Victoria_park_Indigenous").then((res) => {
            console.log(res.data.length);
            setVictoriaIndigenous(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/Victoria_park_Exotic").then((res) => {
            console.log(res.data.length);
            setVictoriaExotic(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/Victoria_park_Endangered").then((res) => {
            console.log(res.data.length);
            setVictoriaEndangered(res.data.length);
        });


        axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/Victoria_park_Evergreen").then((res) => {
            console.log(res.data.length);
            setVictoriaEvergreenPhenology([res.data.length]);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/Victoria_park_Deciduous").then((res) => {
            console.log(res.data.length);
            setVictoriaDeciduousPhenology(res.data.length);
        });

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

        //   

        axios.get("https://afternoon-mountain-93761.herokuapp.com/wine_board_Evergreen").then((res) => {
            console.log(res.data.length);
            setWineEvergreen([res.data.length]);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/wine_board_Deciduous").then((res) => {
            console.log(res.data.length);
            setWineDeciduous(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/wine_board_Endemic").then((res) => {
            console.log(res.data.length);
            setWineEndemic(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/wine_board_Indigenous").then((res) => {
            console.log(res.data.length);
            setWineIndigenous(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/wine_board_Exotic").then((res) => {
            console.log(res.data.length);
            setWineExotic(res.data.length);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/wine_board_Endangered").then((res) => {
            console.log(res.data.length);
            setWineEndangered(res.data.length);
        });


        axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/wine_board_Evergreen").then((res) => {
            console.log(res.data.length);
            setWineEvergreenPhenology([res.data.length]);
        });
        axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/wine_board_Deciduous").then((res) => {
            console.log(res.data.length);
            setWineDeciduousPhenology(res.data.length);
        });


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
        // 

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

        // 

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


    // semi deciduous
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/semiDeciduous?Park=avenue_trees").then((res) => {
        console.log(res.data.length);
        setAvenue_treesSemiDeciduousPhenology(res.data.length);
      });
      axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/semiDeciduous?Park=bal_bhavan").then((res) => {
        console.log(res.data.length);
        setbal_bhavanSemiDeciduousPhenology(res.data.length);
      });
      axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/semiDeciduous?Park=central_library").then((res) => {
        console.log(res.data.length);
        setcentral_librarySemiDeciduousPhenology(res.data.length);
      });
      axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/semiDeciduous?Park=circular_Park").then((res) => {
        console.log(res.data.length);
        setcircular_ParkSemiDeciduousPhenology(res.data.length);
      });
      axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/semiDeciduous?Park=dog_park").then((res) => {
        console.log(res.data.length);
        setdog_parkSemiDeciduousPhenology(res.data.length);
      });
      axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/semiDeciduous?Park=edward_park").then((res) => {
        console.log(res.data.length);
        setedward_parkSemiDeciduousPhenology(res.data.length);
      });
      axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/semiDeciduous?Park=high_court_park").then((res) => {
        console.log(res.data.length);
        sethigh_court_parkSemiDeciduousPhenology(res.data.length);
      });
      axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/semiDeciduous?Park=kslta_hort_dept").then((res) => {
        console.log(res.data.length);
        setkslta_hort_deptSemiDeciduousPhenology(res.data.length);
      });
      axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/semiDeciduous?Park=lotus_pond_kargadhakunte").then((res) => {
        console.log(res.data.length);
        setlotus_pond_kargadhakunteSemiDeciduousPhenology(res.data.length);
      });
      axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/semiDeciduous?Park=park_1").then((res) => {
        console.log(res.data.length);
        setpark_1SemiDeciduousPhenology(res.data.length);
      });
      axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/semiDeciduous?Park=park_2").then((res) => {
        console.log(res.data.length);
        setpark_2SemiDeciduousPhenology(res.data.length);
      });
      axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/semiDeciduous?Park=park_opp_snake_park").then((res) => {
        console.log(res.data.length);
        setpark_opp_snake_parkSemiDeciduousPhenology(res.data.length);
      });
      axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/semiDeciduous?Park=park_opp_wine_board").then((res) => {
        console.log(res.data.length);
        setpark_opp_wine_boardSemiDeciduousPhenology(res.data.length);
      });
      axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/semiDeciduous?Park=park_opp_workers_club").then((res) => {
        console.log(res.data.length);
        setpark_opp_workers_clubSemiDeciduousPhenology(res.data.length);
      });
      axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/semiDeciduous?Park=rose_park").then((res) => {
        console.log(res.data.length);
        setrose_parkSemiDeciduousPhenology(res.data.length);
      });
      axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/semiDeciduous?Park=secretary_club").then((res) => {
        console.log(res.data.length);
        setsecretary_clubSemiDeciduousPhenology(res.data.length);
      });
      axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/semiDeciduous?Park=snake_park").then((res) => {
        console.log(res.data.length);
        setsnake_parkSemiDeciduousPhenology(res.data.length);
      });
      axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/semiDeciduous?Park=triangular_Park").then((res) => {
        console.log(res.data.length);
        settriangular_ParkSemiDeciduousPhenology(res.data.length);
      });
      axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/semiDeciduous?Park=victoria_park").then((res) => {
        console.log(res.data.length);
        setvictoria_parkSemiDeciduousPhenology(res.data.length);
      });
      axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/semiDeciduous?Park=wine_board").then((res) => {
        console.log(res.data.length);
        setwine_boardSemiDeciduousPhenology(res.data.length);
      });
      axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/semiDeciduous?Park=workers_club").then((res) => {
        console.log(res.data.length);
        setworkers_clubSemiDeciduousPhenology(res.data.length);
      });


    }, []);

    arrMaster.push(
        parseInt(Avenue_treesEvergreen) + parseInt(Bal_bhavanEvergreen) + parseInt(CircularEvergreen) + parseInt(dogEvergreen) + parseInt(EdwardEvergreen) + parseInt(High_courtEvergreen) + parseInt(Kslta_hort_deptEvergreen) + parseInt(Park_1Evergreen) + parseInt(Park_2Evergreen) + parseInt(Park_opp_snake_parkEvergreen) + parseInt(Park_opp_wine_boardEvergreen) + parseInt(Park_opp_workers_clubEvergreen) + parseInt(RoseEvergreen) + parseInt(SecretaryEvergreen) + parseInt(SnakeEvergreen) + parseInt(TriangularEvergreen) + parseInt(VictoriaEvergreen) + parseInt(WineEvergreen) + parseInt(WorkersEvergreen) + parseInt(Central_libraryEvergreen),
        parseInt(Avenue_treesDeciduous) + parseInt(Bal_bhavanDeciduous) + parseInt(CircularDeciduous) + parseInt(dogDeciduous) + parseInt(EdwardDeciduous) + parseInt(High_courtDeciduous) + parseInt(Kslta_hort_deptDeciduous) + parseInt(Park_1Deciduous) + parseInt(Park_2Deciduous) + parseInt(Park_opp_snake_parkDeciduous) + parseInt(Park_opp_wine_boardDeciduous) + parseInt(Park_opp_workers_clubDeciduous) + parseInt(RoseDeciduous) + parseInt(SecretaryDeciduous) + parseInt(SnakeDeciduous) + parseInt(TriangularDeciduous) + parseInt(VictoriaDeciduous) + parseInt(WineDeciduous) + parseInt(WorkersDeciduous) + parseInt(Central_libraryDeciduous),
        parseInt(Avenue_treesEndemic) + parseInt(Bal_bhavanEndemic) + parseInt(CircularEndemic) + parseInt(dogEndemic) + parseInt(EdwardEndemic) + parseInt(High_courtEndemic) + parseInt(Kslta_hort_deptEndemic) + parseInt(Park_1Endemic) + parseInt(Park_2Endemic) + parseInt(Park_opp_snake_parkEndemic) + parseInt(Park_opp_wine_boardEndemic) + parseInt(Park_opp_workers_clubEndemic) + parseInt(RoseEndemic) + parseInt(SecretaryEndemic) + parseInt(SnakeEndemic) + parseInt(TriangularEndemic) + parseInt(VictoriaEndemic) + parseInt(WineEndemic) + parseInt(WorkersEndemic) + parseInt(Central_libraryEndemic),
        parseInt(Avenue_treesIndigenous) + parseInt(Bal_bhavanIndigenous) + parseInt(CircularIndigenous) + parseInt(dogIndigenous) + parseInt(EdwardIndigenous) + parseInt(High_courtIndigenous) + parseInt(Kslta_hort_deptIndigenous) + parseInt(Park_1Indigenous) + parseInt(Park_2Indigenous) + parseInt(Park_opp_snake_parkIndigenous) + parseInt(Park_opp_wine_boardIndigenous) + parseInt(Park_opp_workers_clubIndigenous) + parseInt(RoseIndigenous) + parseInt(SecretaryIndigenous) + parseInt(SnakeIndigenous) + parseInt(TriangularIndigenous) + parseInt(VictoriaIndigenous) + parseInt(WineIndigenous) + parseInt(WorkersIndigenous) + parseInt(Central_libraryIndigenous),
        parseInt(Avenue_treesExotic) + parseInt(Bal_bhavanExotic) + parseInt(CircularExotic) + parseInt(dogExotic) + parseInt(EdwardExotic) + parseInt(High_courtExotic) + parseInt(Kslta_hort_deptExotic) + parseInt(Park_1Exotic) + parseInt(Park_2Exotic) + parseInt(Park_opp_snake_parkExotic) + parseInt(Park_opp_wine_boardExotic) + parseInt(Park_opp_workers_clubExotic) + parseInt(RoseExotic) + parseInt(SecretaryExotic) + parseInt(SnakeExotic) + parseInt(TriangularExotic) + parseInt(VictoriaExotic) + parseInt(WineExotic) + parseInt(WorkersExotic) + parseInt(Central_libraryExotic),
        parseInt(Avenue_treesEndangered) + parseInt(Bal_bhavanEndangered) + parseInt(CircularEndangered) + parseInt(dogEndangered) + parseInt(EdwardEndangered) + parseInt(High_courtEndangered) + parseInt(Kslta_hort_deptEndangered) + parseInt(Park_1Endangered) + parseInt(Park_2Endangered) + parseInt(Park_opp_snake_parkEndangered) + parseInt(Park_opp_wine_boardEndangered) + parseInt(Park_opp_workers_clubEndangered) + parseInt(RoseEndangered) + parseInt(SecretaryEndangered) + parseInt(SnakeEndangered) + parseInt(TriangularEndangered) + parseInt(VictoriaEndangered) + parseInt(WineEndangered) + parseInt(WorkersEndangered) + parseInt(Central_libraryEndangered),
    )
    console.log("master",arrMaster);

    arrMasterPhenology.push(
        parseInt(Avenue_treesEvergreenPhenology) + parseInt(Bal_bhavanEvergreenPhenology) + parseInt(CircularEvergreenPhenology) + parseInt(dogEvergreenPhenology) + parseInt(EdwardEvergreenPhenology) + parseInt(High_courtEvergreenPhenology) + parseInt(Kslta_hort_deptEvergreenPhenology) + parseInt(Park_1EvergreenPhenology) + parseInt(Park_2EvergreenPhenology) + parseInt(Park_opp_snake_parkEvergreenPhenology) + parseInt(Park_opp_wine_boardEvergreenPhenology) + parseInt(Park_opp_workers_clubEvergreenPhenology) + parseInt(RoseEvergreenPhenology) + parseInt(SecretaryEvergreenPhenology) + parseInt(SnakeEvergreenPhenology) + parseInt(TriangularEvergreenPhenology) + parseInt(VictoriaEvergreenPhenology) + parseInt(WineEvergreenPhenology) + parseInt(WorkersEvergreenPhenology) + parseInt(Central_libraryEvergreenPhenology),
        parseInt(Avenue_treesDeciduousPhenology) + parseInt(Bal_bhavanDeciduousPhenology) + parseInt(CircularDeciduousPhenology) + parseInt(dogDeciduousPhenology) + parseInt(EdwardDeciduousPhenology) + parseInt(High_courtDeciduousPhenology) + parseInt(Kslta_hort_deptDeciduousPhenology) + parseInt(Park_1DeciduousPhenology) + parseInt(Park_2DeciduousPhenology) + parseInt(Park_opp_snake_parkDeciduousPhenology) + parseInt(Park_opp_wine_boardDeciduousPhenology) + parseInt(Park_opp_workers_clubDeciduousPhenology) + parseInt(RoseDeciduousPhenology) + parseInt(SecretaryDeciduousPhenology) + parseInt(SnakeDeciduousPhenology) + parseInt(TriangularDeciduousPhenology) + parseInt(VictoriaDeciduousPhenology) + parseInt(WineDeciduousPhenology) + parseInt(WorkersDeciduousPhenology) + parseInt(Central_libraryDeciduousPhenology),
        parseInt(Avenue_treesSemiDeciduousPhenology) + parseInt(bal_bhavanSemiDeciduousPhenology) + parseInt(circular_ParkSemiDeciduousPhenology) + parseInt(dog_parkSemiDeciduousPhenology) + parseInt(edward_parkSemiDeciduousPhenology) + parseInt(high_court_parkSemiDeciduousPhenology) + parseInt(kslta_hort_deptSemiDeciduousPhenology) + parseInt(park_1SemiDeciduousPhenology) + parseInt(park_2SemiDeciduousPhenology) + parseInt(park_opp_snake_parkSemiDeciduousPhenology) + parseInt(park_opp_wine_boardSemiDeciduousPhenology) + parseInt(park_opp_workers_clubSemiDeciduousPhenology) + parseInt(rose_parkSemiDeciduousPhenology) + parseInt(secretary_clubSemiDeciduousPhenology) + parseInt(snake_parkSemiDeciduousPhenology) + parseInt(triangular_ParkSemiDeciduousPhenology) + parseInt(victoria_parkSemiDeciduousPhenology) + parseInt(wine_boardSemiDeciduousPhenology) + parseInt(workers_clubSemiDeciduousPhenology) + parseInt(central_librarySemiDeciduousPhenology),

    )

    console.log("master phenology",arrMasterPhenology);

    arrMasterConservation.push(
        parseInt(Avenue_treesLeastConcern) + parseInt(Bal_bhavanLeastConcern) + parseInt(CircularLeastConcern) + parseInt(dogLeastConcern) + parseInt(EdwardLeastConcern) + parseInt(High_courtLeastConcern) + parseInt(Kslta_hort_deptLeastConcern) + parseInt(Park_1LeastConcern) + parseInt(Park_2LeastConcern) + parseInt(Park_opp_snake_parkLeastConcern) + parseInt(Park_opp_wine_boardLeastConcern) + parseInt(Park_opp_workers_clubLeastConcern) + parseInt(RoseLeastConcern) + parseInt(SecretaryLeastConcern) + parseInt(SnakeLeastConcern) + parseInt(TriangularLeastConcern) + parseInt(VictoriaLeastConcern) + parseInt(WineLeastConcern) + parseInt(WorkersLeastConcern) + parseInt(Central_libraryLeastConcern),
        parseInt(Avenue_treesNotknown) + parseInt(Bal_bhavanNotknown) + parseInt(CircularNotknown) + parseInt(dogNotknown) + parseInt(EdwardNotknown) + parseInt(High_courtNotknown) + parseInt(Kslta_hort_deptNotknown) + parseInt(Park_1Notknown) + parseInt(Park_2Notknown) + parseInt(Park_opp_snake_parkNotknown) + parseInt(Park_opp_wine_boardNotknown) + parseInt(Park_opp_workers_clubNotknown) + parseInt(RoseNotknown) + parseInt(SecretaryNotknown) + parseInt(SnakeNotknown) + parseInt(TriangularNotknown) + parseInt(VictoriaNotknown) + parseInt(WineNotknown) + parseInt(WorkersNotknown) + parseInt(Central_libraryNotknown),
        parseInt(Avenue_treesNearThreatened) + parseInt(Bal_bhavanNearThreatened) + parseInt(CircularNearThreatened) + parseInt(dogNearThreatened) + parseInt(EdwardNearThreatened) + parseInt(High_courtNearThreatened) + parseInt(Kslta_hort_deptNearThreatened) + parseInt(Park_1NearThreatened) + parseInt(Park_2NearThreatened) + parseInt(Park_opp_snake_parkNearThreatened) + parseInt(Park_opp_wine_boardNearThreatened) + parseInt(Park_opp_workers_clubNearThreatened) + parseInt(RoseNearThreatened) + parseInt(SecretaryNearThreatened) + parseInt(SnakeNearThreatened) + parseInt(TriangularNearThreatened) + parseInt(VictoriaNearThreatened) + parseInt(WineNearThreatened) + parseInt(WorkersNearThreatened) + parseInt(Central_libraryNearThreatened),
        parseInt(Avenue_treesVulnerable) + parseInt(Bal_bhavanVulnerable) + parseInt(CircularVulnerable) + parseInt(dogVulnerable) + parseInt(EdwardVulnerable) + parseInt(High_courtVulnerable) + parseInt(Kslta_hort_deptVulnerable) + parseInt(Park_1Vulnerable) + parseInt(Park_2Vulnerable) + parseInt(Park_opp_snake_parkVulnerable) + parseInt(Park_opp_wine_boardVulnerable) + parseInt(Park_opp_workers_clubVulnerable) + parseInt(RoseVulnerable) + parseInt(SecretaryVulnerable) + parseInt(SnakeVulnerable) + parseInt(TriangularVulnerable) + parseInt(VictoriaVulnerable) + parseInt(WineVulnerable) + parseInt(WorkersVulnerable) + parseInt(Central_libraryVulnerable),
        parseInt(Avenue_treesCriticallyEndangered) + parseInt(Bal_bhavanCriticallyEndangered) + parseInt(CircularCriticallyEndangered) + parseInt(dogCriticallyEndangered) + parseInt(EdwardCriticallyEndangered) + parseInt(High_courtCriticallyEndangered) + parseInt(Kslta_hort_deptCriticallyEndangered) + parseInt(Park_1CriticallyEndangered) + parseInt(Park_2CriticallyEndangered) + parseInt(Park_opp_snake_parkCriticallyEndangered) + parseInt(Park_opp_wine_boardCriticallyEndangered) + parseInt(Park_opp_workers_clubCriticallyEndangered) + parseInt(RoseCriticallyEndangered) + parseInt(SecretaryCriticallyEndangered) + parseInt(SnakeCriticallyEndangered) + parseInt(TriangularCriticallyEndangered) + parseInt(VictoriaCriticallyEndangered) + parseInt(WineCriticallyEndangered) + parseInt(WorkersCriticallyEndangered) + parseInt(Central_libraryCriticallyEndangered),
        parseInt(Avenue_treesConservationDependent) + parseInt(Bal_bhavanConservationDependent) + parseInt(CircularConservationDependent) + parseInt(dogConservationDependent) + parseInt(EdwardConservationDependent) + parseInt(High_courtConservationDependent) + parseInt(Kslta_hort_deptConservationDependent) + parseInt(Park_1ConservationDependent) + parseInt(Park_2ConservationDependent) + parseInt(Park_opp_snake_parkConservationDependent) + parseInt(Park_opp_wine_boardConservationDependent) + parseInt(Park_opp_workers_clubConservationDependent) + parseInt(RoseConservationDependent) + parseInt(SecretaryConservationDependent) + parseInt(SnakeConservationDependent) + parseInt(TriangularConservationDependent) + parseInt(VictoriaConservationDependent) + parseInt(WineConservationDependent) + parseInt(WorkersConservationDependent) + parseInt(Central_libraryConservationDependent),
    )

    console.log("master conservation",arrMasterConservation);



    return (
        <div className="Avenue_trees__Park">
      <SubBanner Title="Generate report" subTitle="Consolidated Overview" imgURL="https://images.unsplash.com/photo-1547455330-944224181fbf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />

      <div className="Avenue_trees__Park-main" style={{ display: 'flex', placeItems: 'center', justifyContent: "space-around" }}>
        <DonutChart
          title="Trees"
          values={arrMaster}
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
          title="Trees (Phenology)"
          values={arrMasterPhenology}
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
        <AllTrees_Table 
            num1={parseInt(Avenue_treesEvergreenPhenology) + parseInt(Bal_bhavanEvergreenPhenology) + parseInt(CircularEvergreenPhenology) + parseInt(dogEvergreenPhenology) + parseInt(EdwardEvergreenPhenology) + parseInt(High_courtEvergreenPhenology) + parseInt(Kslta_hort_deptEvergreenPhenology) + parseInt(Park_1EvergreenPhenology) + parseInt(Park_2EvergreenPhenology) + parseInt(Park_opp_snake_parkEvergreenPhenology) + parseInt(Park_opp_wine_boardEvergreenPhenology) + parseInt(Park_opp_workers_clubEvergreenPhenology) + parseInt(RoseEvergreenPhenology) + parseInt(SecretaryEvergreenPhenology) + parseInt(SnakeEvergreenPhenology) + parseInt(TriangularEvergreenPhenology) + parseInt(VictoriaEvergreenPhenology) + parseInt(WineEvergreenPhenology) + parseInt(WorkersEvergreenPhenology)}
            num2={parseInt(Avenue_treesDeciduousPhenology) + parseInt(Bal_bhavanDeciduousPhenology) + parseInt(CircularDeciduousPhenology) + parseInt(dogDeciduousPhenology) + parseInt(EdwardDeciduousPhenology) + parseInt(High_courtDeciduousPhenology) + parseInt(Kslta_hort_deptDeciduousPhenology) + parseInt(Park_1DeciduousPhenology) + parseInt(Park_2DeciduousPhenology) + parseInt(Park_opp_snake_parkDeciduousPhenology) + parseInt(Park_opp_wine_boardDeciduousPhenology) + parseInt(Park_opp_workers_clubDeciduousPhenology) + parseInt(RoseDeciduousPhenology) + parseInt(SecretaryDeciduousPhenology) + parseInt(SnakeDeciduousPhenology) + parseInt(TriangularDeciduousPhenology) + parseInt(VictoriaDeciduousPhenology) + parseInt(WineDeciduousPhenology) + parseInt(WorkersDeciduousPhenology)}
            num3={parseInt(Avenue_treesEndemic) + parseInt(Bal_bhavanEndemic) + parseInt(CircularEndemic) + parseInt(dogEndemic) + parseInt(EdwardEndemic) + parseInt(High_courtEndemic) + parseInt(Kslta_hort_deptEndemic) + parseInt(Park_1Endemic) + parseInt(Park_2Endemic) + parseInt(Park_opp_snake_parkEndemic) + parseInt(Park_opp_wine_boardEndemic) + parseInt(Park_opp_workers_clubEndemic) + parseInt(RoseEndemic) + parseInt(SecretaryEndemic) + parseInt(SnakeEndemic) + parseInt(TriangularEndemic) + parseInt(VictoriaEndemic) + parseInt(WineEndemic) + parseInt(WorkersEndemic)}
            num4={parseInt(Avenue_treesIndigenous) + parseInt(Bal_bhavanIndigenous) + parseInt(CircularIndigenous) + parseInt(dogIndigenous) + parseInt(EdwardIndigenous) + parseInt(High_courtIndigenous) + parseInt(Kslta_hort_deptIndigenous) + parseInt(Park_1Indigenous) + parseInt(Park_2Indigenous) + parseInt(Park_opp_snake_parkIndigenous) + parseInt(Park_opp_wine_boardIndigenous) + parseInt(Park_opp_workers_clubIndigenous) + parseInt(RoseIndigenous) + parseInt(SecretaryIndigenous) + parseInt(SnakeIndigenous) + parseInt(TriangularIndigenous) + parseInt(VictoriaIndigenous) + parseInt(WineIndigenous) + parseInt(WorkersIndigenous)}
            num5={parseInt(Avenue_treesExotic) + parseInt(Bal_bhavanExotic) + parseInt(CircularExotic) + parseInt(dogExotic) + parseInt(EdwardExotic) + parseInt(High_courtExotic) + parseInt(Kslta_hort_deptExotic) + parseInt(Park_1Exotic) + parseInt(Park_2Exotic) + parseInt(Park_opp_snake_parkExotic) + parseInt(Park_opp_wine_boardExotic) + parseInt(Park_opp_workers_clubExotic) + parseInt(RoseExotic) + parseInt(SecretaryExotic) + parseInt(SnakeExotic) + parseInt(TriangularExotic) + parseInt(VictoriaExotic) + parseInt(WineExotic) + parseInt(WorkersExotic)}
            num6={parseInt(Avenue_treesEndangered) + parseInt(Bal_bhavanEndangered) + parseInt(CircularEndangered) + parseInt(dogEndangered) + parseInt(EdwardEndangered) + parseInt(High_courtEndangered) + parseInt(Kslta_hort_deptEndangered) + parseInt(Park_1Endangered) + parseInt(Park_2Endangered) + parseInt(Park_opp_snake_parkEndangered) + parseInt(Park_opp_wine_boardEndangered) + parseInt(Park_opp_workers_clubEndangered) + parseInt(RoseEndangered) + parseInt(SecretaryEndangered) + parseInt(SnakeEndangered) + parseInt(TriangularEndangered) + parseInt(VictoriaEndangered) + parseInt(WineEndangered) + parseInt(WorkersEndangered)} 
            num7={parseInt(Avenue_treesSemiDeciduousPhenology) + parseInt(bal_bhavanSemiDeciduousPhenology) + parseInt(circular_ParkSemiDeciduousPhenology) + parseInt(dog_parkSemiDeciduousPhenology) + parseInt(edward_parkSemiDeciduousPhenology) + parseInt(high_court_parkSemiDeciduousPhenology) + parseInt(kslta_hort_deptSemiDeciduousPhenology) + parseInt(park_1SemiDeciduousPhenology) + parseInt(park_2SemiDeciduousPhenology) + parseInt(park_opp_snake_parkSemiDeciduousPhenology) + parseInt(park_opp_wine_boardSemiDeciduousPhenology) + parseInt(park_opp_workers_clubSemiDeciduousPhenology) + parseInt(rose_parkSemiDeciduousPhenology) + parseInt(secretary_clubSemiDeciduousPhenology) + parseInt(snake_parkSemiDeciduousPhenology) + parseInt(triangular_ParkSemiDeciduousPhenology) + parseInt(victoria_parkSemiDeciduousPhenology) + parseInt(wine_boardSemiDeciduousPhenology) + parseInt(workers_clubSemiDeciduousPhenology) + parseInt(central_librarySemiDeciduousPhenology)} 

        />
      </div>

      <div style={{ padding: "50px" }}>
        <h2>Conservation Status</h2>
        <div style={{ display: 'flex', margin: "50px" }}>
          <DonutChart
            title="Trees (conservation status)"
            values={arrMasterConservation}
            labels={[
              "Least Concern",
              "Not known",
              "Near Threatened",
              "Vulnerable",
              "Critically endangered",
              "Conservation dependent",
            ]}
          />
          <AllTrees_Table_ConservationStatus 
            num1={parseInt(Avenue_treesLeastConcern) + parseInt(Bal_bhavanLeastConcern) + parseInt(CircularLeastConcern) + parseInt(dogLeastConcern) + parseInt(EdwardLeastConcern) + parseInt(High_courtLeastConcern) + parseInt(Kslta_hort_deptLeastConcern) + parseInt(Park_1LeastConcern) + parseInt(Park_2LeastConcern) + parseInt(Park_opp_snake_parkLeastConcern) + parseInt(Park_opp_wine_boardLeastConcern) + parseInt(Park_opp_workers_clubLeastConcern) + parseInt(RoseLeastConcern) + parseInt(SecretaryLeastConcern) + parseInt(SnakeLeastConcern) + parseInt(TriangularLeastConcern) + parseInt(VictoriaLeastConcern) + parseInt(WineLeastConcern) + parseInt(WorkersLeastConcern)}
            num2={parseInt(Avenue_treesNotknown) + parseInt(Bal_bhavanNotknown) + parseInt(CircularNotknown) + parseInt(dogNotknown) + parseInt(EdwardNotknown) + parseInt(High_courtNotknown) + parseInt(Kslta_hort_deptNotknown) + parseInt(Park_1Notknown) + parseInt(Park_2Notknown) + parseInt(Park_opp_snake_parkNotknown) + parseInt(Park_opp_wine_boardNotknown) + parseInt(Park_opp_workers_clubNotknown) + parseInt(RoseNotknown) + parseInt(SecretaryNotknown) + parseInt(SnakeNotknown) + parseInt(TriangularNotknown) + parseInt(VictoriaNotknown) + parseInt(WineNotknown) + parseInt(WorkersNotknown)}
            num3={parseInt(Avenue_treesNearThreatened) + parseInt(Bal_bhavanNearThreatened) + parseInt(CircularNearThreatened) + parseInt(dogNearThreatened) + parseInt(EdwardNearThreatened) + parseInt(High_courtNearThreatened) + parseInt(Kslta_hort_deptNearThreatened) + parseInt(Park_1NearThreatened) + parseInt(Park_2NearThreatened) + parseInt(Park_opp_snake_parkNearThreatened) + parseInt(Park_opp_wine_boardNearThreatened) + parseInt(Park_opp_workers_clubNearThreatened) + parseInt(RoseNearThreatened) + parseInt(SecretaryNearThreatened) + parseInt(SnakeNearThreatened) + parseInt(TriangularNearThreatened) + parseInt(VictoriaNearThreatened) + parseInt(WineNearThreatened) + parseInt(WorkersNearThreatened)}
            num4={parseInt(Avenue_treesVulnerable) + parseInt(Bal_bhavanVulnerable) + parseInt(CircularVulnerable) + parseInt(dogVulnerable) + parseInt(EdwardVulnerable) + parseInt(High_courtVulnerable) + parseInt(Kslta_hort_deptVulnerable) + parseInt(Park_1Vulnerable) + parseInt(Park_2Vulnerable) + parseInt(Park_opp_snake_parkVulnerable) + parseInt(Park_opp_wine_boardVulnerable) + parseInt(Park_opp_workers_clubVulnerable) + parseInt(RoseVulnerable) + parseInt(SecretaryVulnerable) + parseInt(SnakeVulnerable) + parseInt(TriangularVulnerable) + parseInt(VictoriaVulnerable) + parseInt(WineVulnerable) + parseInt(WorkersVulnerable)}
            num5={parseInt(Avenue_treesCriticallyEndangered) + parseInt(Bal_bhavanCriticallyEndangered) + parseInt(CircularCriticallyEndangered) + parseInt(dogCriticallyEndangered) + parseInt(EdwardCriticallyEndangered) + parseInt(High_courtCriticallyEndangered) + parseInt(Kslta_hort_deptCriticallyEndangered) + parseInt(Park_1CriticallyEndangered) + parseInt(Park_2CriticallyEndangered) + parseInt(Park_opp_snake_parkCriticallyEndangered) + parseInt(Park_opp_wine_boardCriticallyEndangered) + parseInt(Park_opp_workers_clubCriticallyEndangered) + parseInt(RoseCriticallyEndangered) + parseInt(SecretaryCriticallyEndangered) + parseInt(SnakeCriticallyEndangered) + parseInt(TriangularCriticallyEndangered) + parseInt(VictoriaCriticallyEndangered) + parseInt(WineCriticallyEndangered) + parseInt(WorkersCriticallyEndangered)}
            num6={parseInt(Avenue_treesConservationDependent) + parseInt(Bal_bhavanConservationDependent) + parseInt(CircularConservationDependent) + parseInt(dogConservationDependent) + parseInt(EdwardConservationDependent) + parseInt(High_courtConservationDependent) + parseInt(Kslta_hort_deptConservationDependent) + parseInt(Park_1ConservationDependent) + parseInt(Park_2ConservationDependent) + parseInt(Park_opp_snake_parkConservationDependent) + parseInt(Park_opp_wine_boardConservationDependent) + parseInt(Park_opp_workers_clubConservationDependent) + parseInt(RoseConservationDependent) + parseInt(SecretaryConservationDependent) + parseInt(SnakeConservationDependent) + parseInt(TriangularConservationDependent) + parseInt(VictoriaConservationDependent) + parseInt(WineConservationDependent) + parseInt(WorkersConservationDependent)}
          
          />
        </div>

      </div>


    </div>
    )
}


export default AllTrees;
