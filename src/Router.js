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
import Traingular_Park from "./pages/data/Traingular_Park/Traingular_Park"
import Traingular_Park_deciduous from "./pages/data/Traingular_Park/Traingular_Park_deciduous"
import Traingular_Park_endangered from "./pages/data/Traingular_Park/Traingular_Park_endangered"
import Traingular_Park_endemic from "./pages/data/Traingular_Park/Traingular_Park_endemic"
import Traingular_Park_evergreen from "./pages/data/Traingular_Park/Traingular_Park_evergreen"
import Traingular_Park_exotic from "./pages/data/Traingular_Park/Traingular_Park_exotic"
import Traingular_Park_indigenous from "./pages/data/Traingular_Park/Traingular_Park_indigenous"
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

                {/* snake park */}
                <Route path="/Snake_Park" element={<Snake_Park />} />
                <Route path="/Snake_Park/Snake_Park-deciduous" element={<Snake_park_deciduous />} />
                <Route path="/Snake_Park/Snake_Park-evergreen" element={<Snake_park_evergreen />} />
                <Route path="/Snake_Park/Snake_Park-endemic" element={<Snake_park_endemic />} />
                <Route path="/Snake_Park/Snake_Park-indigenous" element={<Snake_park_indigenous />} />
                <Route path="/Snake_Park/Snake_Park-exotic" element={<Snake_park_exotic />} />
                <Route path="/Snake_Park/Snake_Park-endangered" element={<Snake_park_endangered />} />
                
                {/* Rose park */}
                <Route path="/Rose_Park" element={<Rose_Park />} />
                <Route path="/Rose_Park/Rose_Park-deciduous" element={<Rose_park_deciduous />} />
                <Route path="/Rose_Park/Rose_Park-evergreen" element={<Rose_park_evergreen />} />
                <Route path="/Rose_Park/Rose_Park-endemic" element={<Rose_park_endemic />} />
                <Route path="/Rose_Park/Rose_Park-indigenous" element={<Rose_park_indigenous />} />
                <Route path="/Rose_Park/Rose_Park-exotic" element={<Rose_park_exotic />} />
                <Route path="/Rose_Park/Rose_Park-endangered" element={<Rose_park_endangered />} />

                {/* Traingular park */}
                <Route path="/Traingular_Park" element={<Traingular_Park />} />
                <Route path="/Traingular_Park/Traingular_Park-deciduous" element={<Traingular_Park_deciduous />} />
                <Route path="/Traingular_Park/Traingular_Park-evergreen" element={<Traingular_Park_evergreen />} />
                <Route path="/Traingular_Park/Traingular_Park-endemic" element={<Traingular_Park_endemic />} />
                <Route path="/Traingular_Park/Traingular_Park-indigenous" element={<Traingular_Park_indigenous />} />
                <Route path="/Traingular_Park/Traingular_Park-exotic" element={<Traingular_Park_exotic />} />
                <Route path="/Traingular_Park/Traingular_Park-endangered" element={<Traingular_Park_endangered />} />

                {/* Circular park */}
                <Route path="/Circular_Park" element={<Circular_Park />} />
                <Route path="/Circular_Park/Circular_Park-deciduous" element={<Circular_park_deciduous />} />
                <Route path="/Circular_Park/Circular_Park-evergreen" element={<Circular_park_evergreen />} />
                <Route path="/Circular_Park/Circular_Park-endemic" element={<Circular_park_endemic />} />
                <Route path="/Circular_Park/Circular_Park-indigenous" element={<Circular_park_indigenous />} />
                <Route path="/Circular_Park/Circular_Park-exotic" element={<Circular_park_exotic />} />
                <Route path="/Circular_Park/Circular_Park-endangered" element={<Circular_park_endangered />} />

                {/* Workers park */}
                <Route path="/Workers_Park" element={<Workers_Park />} />
                <Route path="/Workers_Park/Workers_Park-deciduous" element={<Workers_park_deciduous />} />
                <Route path="/Workers_Park/Workers_Park-evergreen" element={<Workers_park_evergreen />} />
                <Route path="/Workers_Park/Workers_Park-endemic" element={<Workers_park_endemic />} />
                <Route path="/Workers_Park/Workers_Park-indigenous" element={<Workers_park_indigenous />} />
                <Route path="/Workers_Park/Workers_Park-exotic" element={<Workers_park_exotic />} />
                <Route path="/Workers_Park/Workers_Park-endangered" element={<Workers_park_endangered />} />

                {/* Park_1 */}
                <Route path="/Park_1_Park" element={<Park_1_Park />} />
                <Route path="/Park_1_Park/Park_1_Park-deciduous" element={<Park_1_park_deciduous />} />
                <Route path="/Park_1_Park/Park_1_Park-evergreen" element={<Park_1_park_evergreen />} />
                <Route path="/Park_1_Park/Park_1_Park-endemic" element={<Park_1_park_endemic />} />
                <Route path="/Park_1_Park/Park_1_Park-indigenous" element={<Park_1_park_indigenous />} />
                <Route path="/Park_1_Park/Park_1_Park-exotic" element={<Park_1_park_exotic />} />
                <Route path="/Park_1_Park/Park_1_Park-endangered" element={<Park_1_park_endangered />} />

                {/* Park_2 */}
                <Route path="/Park_2_Park" element={<Park_2_Park />} />
                <Route path="/Park_2_Park/Park_2_Park-deciduous" element={<Park_2_park_deciduous />} />
                <Route path="/Park_2_Park/Park_2_Park-evergreen" element={<Park_2_park_evergreen />} />
                <Route path="/Park_2_Park/Park_2_Park-endemic" element={<Park_2_park_endemic />} />
                <Route path="/Park_2_Park/Park_2_Park-indigenous" element={<Park_2_park_indigenous />} />
                <Route path="/Park_2_Park/Park_2_Park-exotic" element={<Park_2_park_exotic />} />
                <Route path="/Park_2_Park/Park_2_Park-endangered" element={<Park_2_park_endangered />} />

                {/* Park_2 */}
                <Route path="/Edward_Park" element={<Edward_Park />} />
                <Route path="/Edward_Park/Edward_Park-deciduous" element={<Edward_park_deciduous />} />
                <Route path="/Edward_Park/Edward_Park-evergreen" element={<Edward_park_evergreen />} />
                <Route path="/Edward_Park/Edward_Park-endemic" element={<Edward_park_endemic />} />
                <Route path="/Edward_Park/Edward_Park-indigenous" element={<Edward_park_indigenous />} />
                <Route path="/Edward_Park/Edward_Park-exotic" element={<Edward_park_exotic />} />
                <Route path="/Edward_Park/Edward_Park-endangered" element={<Edward_park_endangered />} />

                {/* Park_2 */}
                <Route path="/Victoria_Park" element={<Victoria_Park />} />
                <Route path="/Victoria_Park/Victoria_Park-deciduous" element={<Victoria_park_deciduous />} />
                <Route path="/Victoria_Park/Victoria_Park-evergreen" element={<Victoria_park_evergreen />} />
                <Route path="/Victoria_Park/Victoria_Park-endemic" element={<Victoria_park_endemic />} />
                <Route path="/Victoria_Park/Victoria_Park-indigenous" element={<Victoria_park_indigenous />} />
                <Route path="/Victoria_Park/Victoria_Park-exotic" element={<Victoria_park_exotic />} />
                <Route path="/Victoria_Park/Victoria_Park-endangered" element={<Victoria_park_endangered />} />
                
                <Route exact path="/downloadSpecie/:Snum" element={<DownloadSpecie />} />
            </Routes>
        </div>
    )
}

export default Router
