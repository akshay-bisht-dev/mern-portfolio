import { lazy } from "react"
const Navbar = lazy(() => import("./Navbar"))
const Footer = lazy(() => import("./Footer"))
import { Outlet } from "react-router-dom"

const Common = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Common