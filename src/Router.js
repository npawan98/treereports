
import { Route, Routes } from "react-router-dom"
import App from "./App"
import ReportsByZone from "./Components/ReportsByZone/ReportsByZone"
import Dashboard from "./pages/Dashboard"
import Dog_Park from "./pages/data/Dog_Park"
import Dog_park_deciduous from "./pages/data/Dog_park_deciduous"
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
                <Route path="/Dog_Park" element={<Dog_Park />} />
                <Route path="/Dog_Park/Dog_Park-deciduous" element={<Dog_park_deciduous />} />
                {/* <Route path="/Dog_Park/temp/:new" element={<Temp/>} />
                <Route path="/Dog_Park/temp/:new/:hey" element={<Hey/>} /> */}
            </Routes>
        </div>
    )
}

export default Router
