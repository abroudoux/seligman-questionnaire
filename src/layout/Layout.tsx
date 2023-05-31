// Outlet
import { Outlet } from "react-router";

// Components 
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";


export default function Layout() {

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}