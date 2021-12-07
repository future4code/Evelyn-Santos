import react from "react";
import {BrowserRouter, Routes, Router, Link} from "react-router-dom";
import HomePage from "./pages/AdminHomePage";
import LoginPage from "./pages/LoginPage";
import ListTripsPage from "./pages/ListTripsPage";
import ApplicationFormPage from "./pages/ApplicationFormPage";
import AdminHomePage from "./pages/AdminHomePage";
import TripDetailsPage from "./pages/TripDetailsPage";
import CreatePage from "./pages/CreatePage";

export const Routers = () => {
    return (
        <BrowserRouter>
    
      <Routes>
        <Route exact path={"/"} element={<HomePage/>}/>
        <Route exact path={"adminhome"} element={<AdminHomePage/>}/>
        <Route exact path={"trips"} element={<ListTripsPage/>}/>
        <Route exact path={"/admin"} element={<LoginPage/>}/>
        <Route exact path={"/form"} element={<ApplicationFormPage/>}/>
        <Route exact path={"/tripdetail"} element={<TripDetailsPage/>}/>
        <Route exact path={"/createtrip"} element={<CreatePage/>}/>
      </Routes>


    
    </BrowserRouter>

    )

}

