import { Outlet } from "react-router-dom";
import Navbar from "../../companents/navbar";
import Footer from "../../companents/footer";


export default function Layout() {
    return (
        <div>
            <Navbar/>
            <div className="flex flex-col max-w-[1110px] mx-auto">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    )
}