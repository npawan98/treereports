/* eslint-disable react/jsx-pascal-case */

import { Route, Routes } from "react-router-dom"
import App from "./App"
import ReportsByZone from "./Components/ReportsByZone/ReportsByZone"
import Dashboard from "./pages/Dashboard"
import Dog_Park from "./pages/data/Dog_Park/Dog_Park"
import Dog_park_deciduous from "./pages/data/Dog_Park/Dog_park_deciduous"
import Dog_park_evergreen from "./pages/data/Dog_Park/Dog_park_evergreen"
import Rose_Park from "./pages/data/Rose_Park/Rose_Park"
import Rose_park_deciduous from "./pages/data/Rose_Park/Rose_park_deciduous"
import Rose_park_evergreen from "./pages/data/Rose_Park/Rose_park_evergreen"
import Snake_Park from "./pages/data/Snake_Park/Snake_Park"
import Snake_park_deciduous from "./pages/data/Snake_Park/Snake_park_deciduous"
import Snake_park_evergreen from "./pages/data/Snake_Park/Snake_park_evergreen"
import GenerateReports from "./pages/GenerateReports"
// import Hey from "./pages/hey"
// import Temp from "./pages/temp"

function Router() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/generate" element={<GenerateReports />} />
                <Route path="/generate_by_zone" element={<ReportsByZone />} />
                {/* dog park */}
                <Route path="/Dog_Park" element={<Dog_Park />} />
                <Route path="/Dog_Park/Dog_Park-deciduous" element={<Dog_park_deciduous />} />
                <Route path="/Dog_Park/Dog_Park-evergreen" element={<Dog_park_evergreen />} />

                {/* snake park */}
                <Route path="/Snake_Park" element={<Snake_Park />} />
                <Route path="/Snake_Park/Snake_Park-deciduous" element={<Snake_park_deciduous />} />
                <Route path="/Snake_Park/Snake_Park-evergreen" element={<Snake_park_evergreen />} />
                
                {/* Rose park */}
                <Route path="/Rose_Park" element={<Rose_Park />} />
                <Route path="/Snake_Park/Snake_Park-deciduous" element={<Rose_park_deciduous />} />
                <Route path="/Snake_Park/Snake_Park-evergreen" element={<Rose_park_evergreen />} />
            </Routes>
        </div>
    )
}

export default Router
