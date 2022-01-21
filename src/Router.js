/* eslint-disable react/jsx-pascal-case */

import { Route, Routes } from "react-router-dom"
import App from "./App"
import ReportsByZone from "./Components/ReportsByZone/ReportsByZone"
import Dashboard from "./pages/Dashboard"
import Circular_Park from "./pages/data/Circular_Park/Circular_Park"
import Circular_park_deciduous from "./pages/data/Circular_Park/Circular_park_deciduous"
import Circular_park_endangered from "./pages/data/Circular_Park/Circular_park_endangered"
import Circular_park_endemic from "./pages/data/Circular_Park/Circular_park_endemic"
import Circular_park_evergreen from "./pages/data/Circular_Park/Circular_park_evergreen"
import Circular_park_exotic from "./pages/data/Circular_Park/Circular_park_exotic"
import Circular_park_indigenous from "./pages/data/Circular_Park/Circular_park_indigenous"
import Dog_Park from "./pages/data/Dog_Park/Dog_Park"
import Dog_park_deciduous from "./pages/data/Dog_Park/Dog_park_deciduous"
import Dog_park_evergreen from "./pages/data/Dog_Park/Dog_park_evergreen"
import Edward_park_deciduous from "./pages/data/Edward_Park/Edward_park_deciduous"
import Edward_park_endangered from "./pages/data/Edward_Park/Edward_park_endangered"
import Edward_park_endemic from "./pages/data/Edward_Park/Edward_park_endemic"
import Edward_park_evergreen from "./pages/data/Edward_Park/Edward_park_evergreen"
import Edward_park_exotic from "./pages/data/Edward_Park/Edward_park_exotic"
import Edward_park_indigenous from "./pages/data/Edward_Park/Edward_park_indigenous"
import Edward_Park from "./pages/data/Edward_Park/Edward_Park"
import Park_1_Park from "./pages/data/Park_1/Park_1_Park"
import Park_1_park_deciduous from "./pages/data/Park_1/Park_1_park_deciduous"
import Park_1_park_endangered from "./pages/data/Park_1/Park_1_park_endangered"
import Park_1_park_endemic from "./pages/data/Park_1/Park_1_park_endemic"
import Park_1_park_evergreen from "./pages/data/Park_1/Park_1_park_evergreen"
import Park_1_park_exotic from "./pages/data/Park_1/Park_1_park_exotic"
import Park_1_park_indigenous from "./pages/data/Park_1/Park_1_park_indigenous"
import Park_2_Park from "./pages/data/Park_2/Park_2_Park"
import Park_2_park_deciduous from "./pages/data/Park_2/Park_2_park_deciduous"
import Park_2_park_endangered from "./pages/data/Park_2/Park_2_park_endangered"
import Park_2_park_endemic from "./pages/data/Park_2/Park_2_park_endemic"
import Park_2_park_evergreen from "./pages/data/Park_2/Park_2_park_evergreen"
import Park_2_park_exotic from "./pages/data/Park_2/Park_2_park_exotic"
import Park_2_park_indigenous from "./pages/data/Park_2/Park_2_park_indigenous"
import Rose_Park from "./pages/data/Rose_Park/Rose_Park"
import Rose_park_deciduous from "./pages/data/Rose_Park/Rose_park_deciduous"
import Rose_park_endangered from "./pages/data/Rose_Park/Rose_park_endangered"
import Rose_park_endemic from "./pages/data/Rose_Park/Rose_park_endemic"
import Rose_park_evergreen from "./pages/data/Rose_Park/Rose_park_evergreen"
import Rose_park_exotic from "./pages/data/Rose_Park/Rose_park_exotic"
import Rose_park_indigenous from "./pages/data/Rose_Park/Rose_park_indigenous"
import Workers_Park from "./pages/data/Workers_Park/Workers_Park"
import Workers_park_deciduous from "./pages/data/Workers_Park/Workers_park_deciduous"
import Workers_park_endangered from "./pages/data/Workers_Park/Workers_park_endangered"
import Workers_park_endemic from "./pages/data/Workers_Park/Workers_park_endemic"
import Workers_park_evergreen from "./pages/data/Workers_Park/Workers_park_evergreen"
import Workers_park_exotic from "./pages/data/Workers_Park/Workers_park_exotic"
import Workers_park_indigenous from "./pages/data/Workers_Park/Workers_park_indigenous"
import GenerateReports from "./pages/GenerateReports"
import Species from "./pages/Species"
import Victoria_Park from "./pages/data/Victoria_Park/Victoria_Park"
import Victoria_park_deciduous from "./pages/data/Victoria_Park/Victoria_park_deciduous"
import Victoria_park_evergreen from "./pages/data/Victoria_Park/Victoria_park_evergreen"
import Victoria_park_endemic from "./pages/data/Victoria_Park/Victoria_park_endemic"
import Victoria_park_indigenous from "./pages/data/Victoria_Park/Victoria_park_indigenous"
import Victoria_park_exotic from "./pages/data/Victoria_Park/Victoria_park_exotic"
import Victoria_park_endangered from "./pages/data/Victoria_Park/Victoria_park_endangered"
import Snake_Park from "./pages/data/Snake_Park/Snake_Park"
import Snake_park_deciduous from "./pages/data/Snake_Park/Snake_park_deciduous"
import Snake_park_evergreen from "./pages/data/Snake_Park/Snake_park_evergreen"
import Snake_park_endemic from "./pages/data/Snake_Park/Snake_park_endemic"
import Snake_park_indigenous from "./pages/data/Snake_Park/Snake_park_indigenous"
import Snake_park_endangered from "./pages/data/Snake_Park/Snake_park_endangered"
import Snake_park_exotic from "./pages/data/Snake_Park/Snake_park_exotic"
import DownloadSpecie from "./pages/DownloadSpecie"
import Dog_park_endemic from "./pages/data/Dog_Park/Dog_park_endemic"
import Dog_park_indigenous from "./pages/data/Dog_Park/Dog_park_indigenous"
import Dog_park_exotic from "./pages/data/Dog_Park/Dog_park_exotic"
import Dog_park_endangered from "./pages/data/Dog_Park/Dog_park_endangered"
import Triangular_Park from "./pages/data/Triangular_Park/Triangular_Park"
import Triangular_Park_deciduous from "./pages/data/Triangular_Park/Triangular_Park_deciduous"
import Triangular_Park_evergreen from "./pages/data/Triangular_Park/Triangular_Park_evergreen"
import Triangular_Park_endemic from "./pages/data/Triangular_Park/Triangular_Park_endemic"
import Triangular_Park_indigenous from "./pages/data/Triangular_Park/Triangular_Park_indigenous"
import Triangular_Park_exotic from "./pages/data/Triangular_Park/Triangular_Park_exotic"
import Triangular_Park_endangered from "./pages/data/Triangular_Park/Triangular_Park_endangered"
import Wine_Board from "./pages/data/Wine_Board/Wine_Board"
import Wine_Board_deciduous from "./pages/data/Wine_Board/Wine_Board_deciduous"
import Wine_Board_evergreen from "./pages/data/Wine_Board/Wine_Board_evergreen"
import Wine_Board_endemic from "./pages/data/Wine_Board/Wine_Board_endemic"
import Wine_Board_indigenous from "./pages/data/Wine_Board/Wine_Board_indigenous"
import Wine_Board_exotic from "./pages/data/Wine_Board/Wine_Board_exotic"
import Wine_Board_endangered from "./pages/data/Wine_Board/Wine_Board_endangered"
import Dog_park_ConservationDependent from "./pages/data/Dog_Park/conservationStatus/Dog_park_ConservationDependent"
import Dog_park_CriticallyEndangered from "./pages/data/Dog_Park/conservationStatus/Dog_park_CriticallyEndangered"
import Dog_park_LeastConcern from "./pages/data/Dog_Park/conservationStatus/Dog_park_LeastConcern"
import Dog_park_NearThreatened from "./pages/data/Dog_Park/conservationStatus/Dog_park_NearThreatened"
import Dog_park_NotKnown from "./pages/data/Dog_Park/conservationStatus/Dog_park_NotKnown"
import Dog_park_Vulnerable from "./pages/data/Dog_Park/conservationStatus/Dog_park_Vulnerable"
import Snake_park_ConservationDependent from "./pages/data/Snake_Park/conservationStatus/Snake_park_ConservationDependent"
import Snake_park_CriticallyEndangered from "./pages/data/Snake_Park/conservationStatus/Snake_park_CriticallyEndangered"
import Snake_park_LeastConcern from "./pages/data/Snake_Park/conservationStatus/Snake_park_LeastConcern"
import Snake_park_NearThreatened from "./pages/data/Snake_Park/conservationStatus/Snake_park_NearThreatened"
import Snake_park_NotKnown from "./pages/data/Snake_Park/conservationStatus/Snake_park_NotKnown"
import Snake_park_Vulnerable from "./pages/data/Snake_Park/conservationStatus/Snake_park_Vulnerable"
import Rose_park_ConservationDependent from "./pages/data/Rose_Park/conservationStatus/Rose_park_ConservationDependent"
import Rose_park_CriticallyEndangered from "./pages/data/Rose_Park/conservationStatus/Rose_park_CriticallyEndangered"
import Rose_park_LeastConcern from "./pages/data/Rose_Park/conservationStatus/Rose_park_LeastConcern"
import Rose_park_NearThreatened from "./pages/data/Rose_Park/conservationStatus/Rose_park_NearThreatened"
import Rose_park_NotKnown from "./pages/data/Rose_Park/conservationStatus/Rose_park_NotKnown"
import Rose_park_Vulnerable from "./pages/data/Rose_Park/conservationStatus/Rose_park_Vulnerable"
import Triangular_park_ConservationDependent from "./pages/data/Triangular_Park/conservationStatus/Triangular_park_ConservationDependent"
import Triangular_park_CriticallyEndangered from "./pages/data/Triangular_Park/conservationStatus/Triangular_park_CriticallyEndangered"
import Triangular_park_LeastConcern from "./pages/data/Triangular_Park/conservationStatus/Triangular_park_LeastConcern"
import Triangular_park_NearThreatened from "./pages/data/Triangular_Park/conservationStatus/Triangular_park_NearThreatened"
import Triangular_park_NotKnown from "./pages/data/Triangular_Park/conservationStatus/Triangular_park_NotKnown"
import Triangular_park_Vulnerable from "./pages/data/Triangular_Park/conservationStatus/Triangular_park_Vulnerable"
import Circular_park_ConservationDependent from "./pages/data/Circular_Park/conservationStatus/Circular_park_ConservationDependent"
import Circular_park_CriticallyEndangered from "./pages/data/Circular_Park/conservationStatus/Circular_park_CriticallyEndangered"
import Circular_park_LeastConcern from "./pages/data/Circular_Park/conservationStatus/Circular_park_LeastConcern"
import Circular_park_NearThreatened from "./pages/data/Circular_Park/conservationStatus/Circular_park_NearThreatened"
import Circular_park_NotKnown from "./pages/data/Circular_Park/conservationStatus/Circular_park_NotKnown"
import Circular_park_Vulnerable from "./pages/data/Circular_Park/conservationStatus/Circular_park_Vulnerable"
import Workers_park_ConservationDependent from "./pages/data/Workers_Park/conservationStatus/Workers_park_ConservationDependent"
import Workers_park_CriticallyEndangered from "./pages/data/Workers_Park/conservationStatus/Workers_park_CriticallyEndangered"
import Workers_park_LeastConcern from "./pages/data/Workers_Park/conservationStatus/Workers_park_LeastConcern"
import Workers_park_NearThreatened from "./pages/data/Workers_Park/conservationStatus/Workers_park_NearThreatened"
import Workers_park_NotKnown from "./pages/data/Workers_Park/conservationStatus/Workers_park_NotKnown"
import Workers_park_Vulnerable from "./pages/data/Workers_Park/conservationStatus/Workers_park_Vulnerable"
import Park_1_park_ConservationDependent from "./pages/data/Park_1/conservationStatus/Park_1_ConservationDependent"
import Park_1_park_CriticallyEndangered from "./pages/data/Park_1/conservationStatus/Park_1_CriticallyEndangered"
import Park_1_park_LeastConcern from "./pages/data/Park_1/conservationStatus/Park_1_LeastConcern"
import Park_1_park_NearThreatened from "./pages/data/Park_1/conservationStatus/Park_1_NearThreatened"
import Park_1_park_NotKnown from "./pages/data/Park_1/conservationStatus/Park_1_NotKnown"
import Park_1_park_Vulnerable from "./pages/data/Park_1/conservationStatus/Park_1_Vulnerable"
import Park_2_park_ConservationDependent from "./pages/data/Park_2/conservationStatus/Park_2_ConservationDependent"
import Park_2_park_CriticallyEndangered from "./pages/data/Park_2/conservationStatus/Park_2_CriticallyEndangered"
import Park_2_park_LeastConcern from "./pages/data/Park_2/conservationStatus/Park_2_LeastConcern"
import Park_2_park_NearThreatened from "./pages/data/Park_2/conservationStatus/Park_2_NearThreatened"
import Park_2_park_NotKnown from "./pages/data/Park_2/conservationStatus/Park_2_NotKnown"
import Park_2_park_Vulnerable from "./pages/data/Park_2/conservationStatus/Park_2_Vulnerable"
import Edward_park_ConservationDependent from "./pages/data/Edward_Park/conservationStatus/Edward_park_ConservationDependent"
import Edward_park_CriticallyEndangered from "./pages/data/Edward_Park/conservationStatus/Edward_park_CriticallyEndangered"
import Edward_park_LeastConcern from "./pages/data/Edward_Park/conservationStatus/Edward_park_LeastConcern"
import Edward_park_NearThreatened from "./pages/data/Edward_Park/conservationStatus/Edward_park_NearThreatened"
import Edward_park_NotKnown from "./pages/data/Edward_Park/conservationStatus/Edward_park_NotKnown"
import Edward_park_Vulnerable from "./pages/data/Edward_Park/conservationStatus/Edward_park_Vulnerable"
import Victoria_park_ConservationDependent from "./pages/data/Victoria_Park/conservationStatus/Victoria_park_ConservationDependent"
import Victoria_park_CriticallyEndangered from "./pages/data/Victoria_Park/conservationStatus/Victoria_park_CriticallyEndangered"
import Victoria_park_LeastConcern from "./pages/data/Victoria_Park/conservationStatus/Victoria_park_LeastConcern"
import Victoria_park_NearThreatened from "./pages/data/Victoria_Park/conservationStatus/Victoria_park_NearThreatened"
import Victoria_park_NotKnown from "./pages/data/Victoria_Park/conservationStatus/Victoria_park_NotKnown"
import Victoria_park_Vulnerable from "./pages/data/Victoria_Park/conservationStatus/Victoria_park_Vulnerable"
import Wine_Board_ConservationDependent from "./pages/data/Wine_Board/conservationStatus/Wine_Board_ConservationDependent"
import Wine_Board_CriticallyEndangered from "./pages/data/Wine_Board/conservationStatus/Wine_Board_CriticallyEndangered"
import Wine_Board_LeastConcern from "./pages/data/Wine_Board/conservationStatus/Wine_Board_LeastConcern"
import Wine_Board_NearThreatened from "./pages/data/Wine_Board/conservationStatus/Wine_Board_NearThreatened"
import Wine_Board_NotKnown from "./pages/data/Wine_Board/conservationStatus/Wine_Board_NotKnown"
import Wine_Board_Vulnerable from "./pages/data/Wine_Board/conservationStatus/Wine_Board_Vulnerable"
import Secretary_club from "./pages/data/Secretary_club/Secretary_club"
import Secretary_club_deciduous from "./pages/data/Secretary_club/Secretary_club_deciduous"
import Secretary_club_evergreen from "./pages/data/Secretary_club/Secretary_club_evergreen"
import Secretary_club_endemic from "./pages/data/Secretary_club/Secretary_club_endemic"
import Secretary_club_indigenous from "./pages/data/Secretary_club/Secretary_club_indigenous"
import Secretary_club_exotic from "./pages/data/Secretary_club/Secretary_club_exotic"
import Secretary_club_endangered from "./pages/data/Secretary_club/Secretary_club_endangered"
import Secretary_club_ConservationDependent from "./pages/data/Secretary_club/conservationStatus/Secretary_club_ConservationDependent"
import Secretary_club_CriticallyEndangered from "./pages/data/Secretary_club/conservationStatus/Secretary_club_CriticallyEndangered"
import Secretary_club_LeastConcern from "./pages/data/Secretary_club/conservationStatus/Secretary_club_LeastConcern"
import Secretary_club_NearThreatened from "./pages/data/Secretary_club/conservationStatus/Secretary_club_NearThreatened"
import Secretary_club_NotKnown from "./pages/data/Secretary_club/conservationStatus/Secretary_club_NotKnown"
import Secretary_club_Vulnerable from "./pages/data/Secretary_club/conservationStatus/Secretary_club_Vulnerable"
import Bal_bhavan from "./pages/data/Bal_bhavan/Bal_bhavan"
import Bal_bhavan_deciduous from "./pages/data/Bal_bhavan/Bal_bhavan_deciduous"
import Bal_bhavan_evergreen from "./pages/data/Bal_bhavan/Bal_bhavan_evergreen"
import Bal_bhavan_endemic from "./pages/data/Bal_bhavan/Bal_bhavan_endemic"
import Bal_bhavan_indigenous from "./pages/data/Bal_bhavan/Bal_bhavan_indigenous"
import Bal_bhavan_exotic from "./pages/data/Bal_bhavan/Bal_bhavan_exotic"
import Bal_bhavan_endangered from "./pages/data/Bal_bhavan/Bal_bhavan_endangered"
import Bal_bhavan_ConservationDependent from "./pages/data/Bal_bhavan/conservationStatus/Bal_bhavan_ConservationDependent"
import Bal_bhavan_CriticallyEndangered from "./pages/data/Bal_bhavan/conservationStatus/Bal_bhavan_CriticallyEndangered"
import Bal_bhavan_LeastConcern from "./pages/data/Bal_bhavan/conservationStatus/Bal_bhavan_LeastConcern"
import Bal_bhavan_NearThreatened from "./pages/data/Bal_bhavan/conservationStatus/Bal_bhavan_NearThreatened"
import Bal_bhavan_NotKnown from "./pages/data/Bal_bhavan/conservationStatus/Bal_bhavan_NotKnown"
import Bal_bhavan_Vulnerable from "./pages/data/Bal_bhavan/conservationStatus/Bal_bhavan_Vulnerable"
import High_court from "./pages/data/High_court/High_court"
import High_court_deciduous from "./pages/data/High_court/High_court_deciduous"
import High_court_evergreen from "./pages/data/High_court/High_court_evergreen"
import High_court_endemic from "./pages/data/High_court/High_court_endemic"
import High_court_indigenous from "./pages/data/High_court/High_court_indigenous"
import High_court_exotic from "./pages/data/High_court/High_court_exotic"
import High_court_endangered from "./pages/data/High_court/High_court_endangered"
import High_court_ConservationDependent from "./pages/data/High_court/conservationStatus/High_court_ConservationDependent"
import High_court_CriticallyEndangered from "./pages/data/High_court/conservationStatus/High_court_CriticallyEndangered"
import High_court_LeastConcern from "./pages/data/High_court/conservationStatus/High_court_LeastConcern"
import High_court_NearThreatened from "./pages/data/High_court/conservationStatus/High_court_NearThreatened"
import High_court_NotKnown from "./pages/data/High_court/conservationStatus/High_court_NotKnown"
import High_court_Vulnerable from "./pages/data/High_court/conservationStatus/High_court_Vulnerable"

function Router() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/generate" element={<GenerateReports />} />
                <Route path="/generate_by_zone" element={<ReportsByZone />} />

                {/* species */}
                <Route path="/species" element={<Species />} />
                {/* dog park */}
                <Route path="/Dog_Park" element={<Dog_Park />} />
                <Route path="/Dog_Park/Dog_Park-deciduous" element={<Dog_park_deciduous />} />
                <Route path="/Dog_Park/Dog_Park-evergreen" element={<Dog_park_evergreen />} />
                <Route path="/Dog_Park/Dog_Park-endemic" element={<Dog_park_endemic />} />
                <Route path="/Dog_Park/Dog_Park-indigenous" element={<Dog_park_indigenous />} />
                <Route path="/Dog_Park/Dog_Park-exotic" element={<Dog_park_exotic />} />
                <Route path="/Dog_Park/Dog_Park-endangered" element={<Dog_park_endangered />} />
                {/* dog park conservation status */}
                <Route path="/Dog_Park/conservationstatus/Dog_Park-ConservationDependent" element={<Dog_park_ConservationDependent />} />
                <Route path="/Dog_Park/conservationstatus/Dog_Park-CriticallyEndangered" element={<Dog_park_CriticallyEndangered />} />
                <Route path="/Dog_Park/conservationstatus/Dog_Park-LeastConcern" element={<Dog_park_LeastConcern />} />
                <Route path="/Dog_Park/conservationstatus/Dog_Park-NearThreatened" element={<Dog_park_NearThreatened />} />
                <Route path="/Dog_Park/conservationstatus/Dog_Park-NotKnown" element={<Dog_park_NotKnown />} />
                <Route path="/Dog_Park/conservationstatus/Dog_Park-Vulnerable" element={<Dog_park_Vulnerable />} />

                {/* snake park */}
                <Route path="/Snake_Park" element={<Snake_Park />} />
                <Route path="/Snake_Park/Snake_Park-deciduous" element={<Snake_park_deciduous />} />
                <Route path="/Snake_Park/Snake_Park-evergreen" element={<Snake_park_evergreen />} />
                <Route path="/Snake_Park/Snake_Park-endemic" element={<Snake_park_endemic />} />
                <Route path="/Snake_Park/Snake_Park-indigenous" element={<Snake_park_indigenous />} />
                <Route path="/Snake_Park/Snake_Park-exotic" element={<Snake_park_exotic />} />
                <Route path="/Snake_Park/Snake_Park-endangered" element={<Snake_park_endangered />} />
                {/* snake park conservation status */}
                <Route path="/Snake_Park/conservationstatus/Snake_Park-ConservationDependent" element={<Snake_park_ConservationDependent />} />
                <Route path="/Snake_Park/conservationstatus/Snake_Park-CriticallyEndangered" element={<Snake_park_CriticallyEndangered />} />
                <Route path="/Snake_Park/conservationstatus/Snake_Park-LeastConcern" element={<Snake_park_LeastConcern />} />
                <Route path="/Snake_Park/conservationstatus/Snake_Park-NearThreatened" element={<Snake_park_NearThreatened />} />
                <Route path="/Snake_Park/conservationstatus/Snake_Park-NotKnown" element={<Snake_park_NotKnown />} />
                <Route path="/Snake_Park/conservationstatus/Snake_Park-Vulnerable" element={<Snake_park_Vulnerable />} />
                
                {/* Rose park */}
                <Route path="/Rose_Park" element={<Rose_Park />} />
                <Route path="/Rose_Park/Rose_Park-deciduous" element={<Rose_park_deciduous />} />
                <Route path="/Rose_Park/Rose_Park-evergreen" element={<Rose_park_evergreen />} />
                <Route path="/Rose_Park/Rose_Park-endemic" element={<Rose_park_endemic />} />
                <Route path="/Rose_Park/Rose_Park-indigenous" element={<Rose_park_indigenous />} />
                <Route path="/Rose_Park/Rose_Park-exotic" element={<Rose_park_exotic />} />
                <Route path="/Rose_Park/Rose_Park-endangered" element={<Rose_park_endangered />} />
                {/* rose park conservation status */}
                <Route path="/Rose_Park/conservationstatus/Rose_Park-ConservationDependent" element={<Rose_park_ConservationDependent />} />
                <Route path="/Rose_Park/conservationstatus/Rose_Park-CriticallyEndangered" element={<Rose_park_CriticallyEndangered />} />
                <Route path="/Rose_Park/conservationstatus/Rose_Park-LeastConcern" element={<Rose_park_LeastConcern />} />
                <Route path="/Rose_Park/conservationstatus/Rose_Park-NearThreatened" element={<Rose_park_NearThreatened />} />
                <Route path="/Rose_Park/conservationstatus/Rose_Park-NotKnown" element={<Rose_park_NotKnown />} />
                <Route path="/Rose_Park/conservationstatus/Rose_Park-Vulnerable" element={<Rose_park_Vulnerable />} />

                {/* Triangular park */}
                <Route path="/Triangular_Park" element={<Triangular_Park />} />
                <Route path="/Triangular_Park/Triangular_Park-deciduous" element={<Triangular_Park_deciduous />} />
                <Route path="/Triangular_Park/Triangular_Park-evergreen" element={<Triangular_Park_evergreen />} />
                <Route path="/Triangular_Park/Triangular_Park-endemic" element={<Triangular_Park_endemic />} />
                <Route path="/Triangular_Park/Triangular_Park-indigenous" element={<Triangular_Park_indigenous />} />
                <Route path="/Triangular_Park/Triangular_Park-exotic" element={<Triangular_Park_exotic />} />
                <Route path="/Triangular_Park/Triangular_Park-endangered" element={<Triangular_Park_endangered />} />
                {/* Triangular park conservation status */}
                <Route path="/Triangular_Park/conservationstatus/Triangular_Park-ConservationDependent" element={<Triangular_park_ConservationDependent />} />
                <Route path="/Triangular_Park/conservationstatus/Triangular_Park-CriticallyEndangered" element={<Triangular_park_CriticallyEndangered />} />
                <Route path="/Triangular_Park/conservationstatus/Triangular_Park-LeastConcern" element={<Triangular_park_LeastConcern />} />
                <Route path="/Triangular_Park/conservationstatus/Triangular_Park-NearThreatened" element={<Triangular_park_NearThreatened />} />
                <Route path="/Triangular_Park/conservationstatus/Triangular_Park-NotKnown" element={<Triangular_park_NotKnown />} />
                <Route path="/Triangular_Park/conservationstatus/Triangular_Park-Vulnerable" element={<Triangular_park_Vulnerable />} />

                {/* Circular park */}
                <Route path="/Circular_Park" element={<Circular_Park />} />
                <Route path="/Circular_Park/Circular_Park-deciduous" element={<Circular_park_deciduous />} />
                <Route path="/Circular_Park/Circular_Park-evergreen" element={<Circular_park_evergreen />} />
                <Route path="/Circular_Park/Circular_Park-endemic" element={<Circular_park_endemic />} />
                <Route path="/Circular_Park/Circular_Park-indigenous" element={<Circular_park_indigenous />} />
                <Route path="/Circular_Park/Circular_Park-exotic" element={<Circular_park_exotic />} />
                <Route path="/Circular_Park/Circular_Park-endangered" element={<Circular_park_endangered />} />
                {/* Circular park conservation status */}
                <Route path="/Circular_Park/conservationstatus/Circular_Park-ConservationDependent" element={<Circular_park_ConservationDependent />} />
                <Route path="/Circular_Park/conservationstatus/Circular_Park-CriticallyEndangered" element={<Circular_park_CriticallyEndangered />} />
                <Route path="/Circular_Park/conservationstatus/Circular_Park-LeastConcern" element={<Circular_park_LeastConcern />} />
                <Route path="/Circular_Park/conservationstatus/Circular_Park-NearThreatened" element={<Circular_park_NearThreatened />} />
                <Route path="/Circular_Park/conservationstatus/Circular_Park-NotKnown" element={<Circular_park_NotKnown />} />
                <Route path="/Circular_Park/conservationstatus/Circular_Park-Vulnerable" element={<Circular_park_Vulnerable />} />

                {/* Workers park */}
                <Route path="/Workers_Park" element={<Workers_Park />} />
                <Route path="/Workers_Park/Workers_Park-deciduous" element={<Workers_park_deciduous />} />
                <Route path="/Workers_Park/Workers_Park-evergreen" element={<Workers_park_evergreen />} />
                <Route path="/Workers_Park/Workers_Park-endemic" element={<Workers_park_endemic />} />
                <Route path="/Workers_Park/Workers_Park-indigenous" element={<Workers_park_indigenous />} />
                <Route path="/Workers_Park/Workers_Park-exotic" element={<Workers_park_exotic />} />
                <Route path="/Workers_Park/Workers_Park-endangered" element={<Workers_park_endangered />} />
                {/* Workers  park conservation status */}
                <Route path="/Workers_Park/conservationstatus/Workers_Park-ConservationDependent" element={<Workers_park_ConservationDependent />} />
                <Route path="/Workers_Park/conservationstatus/Workers_Park-CriticallyEndangered" element={<Workers_park_CriticallyEndangered />} />
                <Route path="/Workers_Park/conservationstatus/Workers_Park-LeastConcern" element={<Workers_park_LeastConcern />} />
                <Route path="/Workers_Park/conservationstatus/Workers_Park-NearThreatened" element={<Workers_park_NearThreatened />} />
                <Route path="/Workers_Park/conservationstatus/Workers_Park-NotKnown" element={<Workers_park_NotKnown />} />
                <Route path="/Workers_Park/conservationstatus/Workers_Park-Vulnerable" element={<Workers_park_Vulnerable />} />

                {/* Park_1 */}
                <Route path="/Park_1_Park" element={<Park_1_Park />} />
                <Route path="/Park_1_Park/Park_1_Park-deciduous" element={<Park_1_park_deciduous />} />
                <Route path="/Park_1_Park/Park_1_Park-evergreen" element={<Park_1_park_evergreen />} />
                <Route path="/Park_1_Park/Park_1_Park-endemic" element={<Park_1_park_endemic />} />
                <Route path="/Park_1_Park/Park_1_Park-indigenous" element={<Park_1_park_indigenous />} />
                <Route path="/Park_1_Park/Park_1_Park-exotic" element={<Park_1_park_exotic />} />
                <Route path="/Park_1_Park/Park_1_Park-endangered" element={<Park_1_park_endangered />} />
                {/* Park_1  park conservation status */}
                <Route path="/Park_1_Park/conservationstatus/Park_1_Park-ConservationDependent" element={<Park_1_park_ConservationDependent />} />
                <Route path="/Park_1_Park/conservationstatus/Park_1_Park-CriticallyEndangered" element={<Park_1_park_CriticallyEndangered />} />
                <Route path="/Park_1_Park/conservationstatus/Park_1_Park-LeastConcern" element={<Park_1_park_LeastConcern />} />
                <Route path="/Park_1_Park/conservationstatus/Park_1_Park-NearThreatened" element={<Park_1_park_NearThreatened />} />
                <Route path="/Park_1_Park/conservationstatus/Park_1_Park-NotKnown" element={<Park_1_park_NotKnown />} />
                <Route path="/Park_1_Park/conservationstatus/Park_1_Park-Vulnerable" element={<Park_1_park_Vulnerable />} />

                {/* Park_2 */}
                <Route path="/Park_2_Park" element={<Park_2_Park />} />
                <Route path="/Park_2_Park/Park_2_Park-deciduous" element={<Park_2_park_deciduous />} />
                <Route path="/Park_2_Park/Park_2_Park-evergreen" element={<Park_2_park_evergreen />} />
                <Route path="/Park_2_Park/Park_2_Park-endemic" element={<Park_2_park_endemic />} />
                <Route path="/Park_2_Park/Park_2_Park-indigenous" element={<Park_2_park_indigenous />} />
                <Route path="/Park_2_Park/Park_2_Park-exotic" element={<Park_2_park_exotic />} />
                <Route path="/Park_2_Park/Park_2_Park-endangered" element={<Park_2_park_endangered />} />
                {/* Park_2  park conservation status */}
                <Route path="/Park_2_Park/conservationstatus/Park_2_Park-ConservationDependent" element={<Park_2_park_ConservationDependent />} />
                <Route path="/Park_2_Park/conservationstatus/Park_2_Park-CriticallyEndangered" element={<Park_2_park_CriticallyEndangered />} />
                <Route path="/Park_2_Park/conservationstatus/Park_2_Park-LeastConcern" element={<Park_2_park_LeastConcern />} />
                <Route path="/Park_2_Park/conservationstatus/Park_2_Park-NearThreatened" element={<Park_2_park_NearThreatened />} />
                <Route path="/Park_2_Park/conservationstatus/Park_2_Park-NotKnown" element={<Park_2_park_NotKnown />} />
                <Route path="/Park_2_Park/conservationstatus/Park_2_Park-Vulnerable" element={<Park_2_park_Vulnerable />} />

                {/* Edward */}
                <Route path="/Edward_Park" element={<Edward_Park />} />
                <Route path="/Edward_Park/Edward_Park-deciduous" element={<Edward_park_deciduous />} />
                <Route path="/Edward_Park/Edward_Park-evergreen" element={<Edward_park_evergreen />} />
                <Route path="/Edward_Park/Edward_Park-endemic" element={<Edward_park_endemic />} />
                <Route path="/Edward_Park/Edward_Park-indigenous" element={<Edward_park_indigenous />} />
                <Route path="/Edward_Park/Edward_Park-exotic" element={<Edward_park_exotic />} />
                <Route path="/Edward_Park/Edward_Park-endangered" element={<Edward_park_endangered />} />
                {/* Edward park conservation status */}
                <Route path="/Edward_Park/conservationstatus/Edward_Park-ConservationDependent" element={<Edward_park_ConservationDependent />} />
                <Route path="/Edward_Park/conservationstatus/Edward_Park-CriticallyEndangered" element={<Edward_park_CriticallyEndangered />} />
                <Route path="/Edward_Park/conservationstatus/Edward_Park-LeastConcern" element={<Edward_park_LeastConcern />} />
                <Route path="/Edward_Park/conservationstatus/Edward_Park-NearThreatened" element={<Edward_park_NearThreatened />} />
                <Route path="/Edward_Park/conservationstatus/Edward_Park-NotKnown" element={<Edward_park_NotKnown />} />
                <Route path="/Edward_Park/conservationstatus/Edward_Park-Vulnerable" element={<Edward_park_Vulnerable />} />

                {/* Victoria */}
                <Route path="/Victoria_Park" element={<Victoria_Park />} />
                <Route path="/Victoria_Park/Victoria_Park-deciduous" element={<Victoria_park_deciduous />} />
                <Route path="/Victoria_Park/Victoria_Park-evergreen" element={<Victoria_park_evergreen />} />
                <Route path="/Victoria_Park/Victoria_Park-endemic" element={<Victoria_park_endemic />} />
                <Route path="/Victoria_Park/Victoria_Park-indigenous" element={<Victoria_park_indigenous />} />
                <Route path="/Victoria_Park/Victoria_Park-exotic" element={<Victoria_park_exotic />} />
                <Route path="/Victoria_Park/Victoria_Park-endangered" element={<Victoria_park_endangered />} />
                {/* Victoria park conservation status */}
                <Route path="/Victoria_Park/conservationstatus/Victoria_Park-ConservationDependent" element={<Victoria_park_ConservationDependent />} />
                <Route path="/Victoria_Park/conservationstatus/Victoria_Park-CriticallyEndangered" element={<Victoria_park_CriticallyEndangered />} />
                <Route path="/Victoria_Park/conservationstatus/Victoria_Park-LeastConcern" element={<Victoria_park_LeastConcern />} />
                <Route path="/Victoria_Park/conservationstatus/Victoria_Park-NearThreatened" element={<Victoria_park_NearThreatened />} />
                <Route path="/Victoria_Park/conservationstatus/Victoria_Park-NotKnown" element={<Victoria_park_NotKnown />} />
                <Route path="/Victoria_Park/conservationstatus/Victoria_Park-Vulnerable" element={<Victoria_park_Vulnerable />} />
                

                {/* Wine_Board */}
                <Route path="/Wine_Board" element={<Wine_Board/>} />
                <Route path="/Wine_Board/Wine_Board-deciduous" element={<Wine_Board_deciduous />} />
                <Route path="/Wine_Board/Wine_Board-evergreen" element={<Wine_Board_evergreen />} />
                <Route path="/Wine_Board/Wine_Board-endemic" element={<Wine_Board_endemic />} />
                <Route path="/Wine_Board/Wine_Board-indigenous" element={<Wine_Board_indigenous />} />
                <Route path="/Wine_Board/Wine_Board-exotic" element={<Wine_Board_exotic />} />
                <Route path="/Wine_Board/Wine_Board-endangered" element={<Wine_Board_endangered />} />
                {/* Wine board conservation status */}
                <Route path="/Wine_Board/conservationstatus/Wine_Board-ConservationDependent" element={<Wine_Board_ConservationDependent />} />
                <Route path="/Wine_Board/conservationstatus/Wine_Board-CriticallyEndangered" element={<Wine_Board_CriticallyEndangered />} />
                <Route path="/Wine_Board/conservationstatus/Wine_Board-LeastConcern" element={<Wine_Board_LeastConcern />} />
                <Route path="/Wine_Board/conservationstatus/Wine_Board-NearThreatened" element={<Wine_Board_NearThreatened />} />
                <Route path="/Wine_Board/conservationstatus/Wine_Board-NotKnown" element={<Wine_Board_NotKnown />} />
                <Route path="/Wine_Board/conservationstatus/Wine_Board-Vulnerable" element={<Wine_Board_Vulnerable />} />

                {/* Secretary_club */}
                <Route path="/Secretary_club" element={<Secretary_club/>} />
                <Route path="/Secretary_club/Secretary_club-deciduous" element={<Secretary_club_deciduous />} />
                <Route path="/Secretary_club/Secretary_club-evergreen" element={<Secretary_club_evergreen />} />
                <Route path="/Secretary_club/Secretary_club-endemic" element={<Secretary_club_endemic />} />
                <Route path="/Secretary_club/Secretary_club-indigenous" element={<Secretary_club_indigenous />} />
                <Route path="/Secretary_club/Secretary_club-exotic" element={<Secretary_club_exotic />} />
                <Route path="/Secretary_club/Secretary_club-endangered" element={<Secretary_club_endangered />} />
                {/* Wine board conservation status */}
                <Route path="/Secretary_club/conservationstatus/Secretary_club-ConservationDependent" element={<Secretary_club_ConservationDependent />} />
                <Route path="/Secretary_club/conservationstatus/Secretary_club-CriticallyEndangered" element={<Secretary_club_CriticallyEndangered />} />
                <Route path="/Secretary_club/conservationstatus/Secretary_club-LeastConcern" element={<Secretary_club_LeastConcern />} />
                <Route path="/Secretary_club/conservationstatus/Secretary_club-NearThreatened" element={<Secretary_club_NearThreatened />} />
                <Route path="/Secretary_club/conservationstatus/Secretary_club-NotKnown" element={<Secretary_club_NotKnown />} />
                <Route path="/Secretary_club/conservationstatus/Secretary_club-Vulnerable" element={<Secretary_club_Vulnerable />} />

                {/* Bal_bhavan */}
                <Route path="/Bal_bhavan" element={<Bal_bhavan/>} />
                <Route path="/Bal_bhavan/Bal_bhavan-deciduous" element={<Bal_bhavan_deciduous />} />
                <Route path="/Bal_bhavan/Bal_bhavan-evergreen" element={<Bal_bhavan_evergreen />} />
                <Route path="/Bal_bhavan/Bal_bhavan-endemic" element={<Bal_bhavan_endemic />} />
                <Route path="/Bal_bhavan/Bal_bhavan-indigenous" element={<Bal_bhavan_indigenous />} />
                <Route path="/Bal_bhavan/Bal_bhavan-exotic" element={<Bal_bhavan_exotic />} />
                <Route path="/Bal_bhavan/Bal_bhavan-endangered" element={<Bal_bhavan_endangered />} />
                {/* Wine board conservation status */}
                <Route path="/Bal_bhavan/conservationstatus/Bal_bhavan-ConservationDependent" element={<Bal_bhavan_ConservationDependent />} />
                <Route path="/Bal_bhavan/conservationstatus/Bal_bhavan-CriticallyEndangered" element={<Bal_bhavan_CriticallyEndangered />} />
                <Route path="/Bal_bhavan/conservationstatus/Bal_bhavan-LeastConcern" element={<Bal_bhavan_LeastConcern />} />
                <Route path="/Bal_bhavan/conservationstatus/Bal_bhavan-NearThreatened" element={<Bal_bhavan_NearThreatened />} />
                <Route path="/Bal_bhavan/conservationstatus/Bal_bhavan-NotKnown" element={<Bal_bhavan_NotKnown />} />
                <Route path="/Bal_bhavan/conservationstatus/Bal_bhavan-Vulnerable" element={<Bal_bhavan_Vulnerable />} />

                {/* High_court */}
                <Route path="/High_court" element={<High_court/>} />
                <Route path="/High_court/High_court-deciduous" element={<High_court_deciduous />} />
                <Route path="/High_court/High_court-evergreen" element={<High_court_evergreen />} />
                <Route path="/High_court/High_court-endemic" element={<High_court_endemic />} />
                <Route path="/High_court/High_court-indigenous" element={<High_court_indigenous />} />
                <Route path="/High_court/High_court-exotic" element={<High_court_exotic />} />
                <Route path="/High_court/High_court-endangered" element={<High_court_endangered />} />
                {/* Wine board conservation status */}
                <Route path="/High_court/conservationstatus/High_court-ConservationDependent" element={<High_court_ConservationDependent />} />
                <Route path="/High_court/conservationstatus/High_court-CriticallyEndangered" element={<High_court_CriticallyEndangered />} />
                <Route path="/High_court/conservationstatus/High_court-LeastConcern" element={<High_court_LeastConcern />} />
                <Route path="/High_court/conservationstatus/High_court-NearThreatened" element={<High_court_NearThreatened />} />
                <Route path="/High_court/conservationstatus/High_court-NotKnown" element={<High_court_NotKnown />} />
                <Route path="/High_court/conservationstatus/High_court-Vulnerable" element={<High_court_Vulnerable />} />
                
                <Route exact path="/downloadSpecie/:Snum" element={<DownloadSpecie />} />
            </Routes>
        </div>
    )
}

export default Router
