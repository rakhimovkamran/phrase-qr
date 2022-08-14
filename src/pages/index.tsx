import { Route, Routes } from "react-router-dom"
import { lazy } from "react"

const MainPage = lazy(() => import("./main"))
const GeneratePage = lazy(() => import("./generate"))

export const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/generate" element={<GeneratePage />} />
        </Routes>
    )
}
