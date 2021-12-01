
import { Route, Routes } from "react-router-dom"
import App from "./App"
import Dashboard from "./pages/Dashboard"
import GenerateReports from "./pages/GenerateReports"

function Router() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/generate" element={<GenerateReports />} />
            </Routes>
        </div>
    )
}

export default Router
