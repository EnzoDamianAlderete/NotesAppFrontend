import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import RegisterComponent from "../components/RegisterComponent";

const RegisterContainer =()=>{
    return(
        <>
        <Navbar/>
        <div className=" text-center col-auto container--custom login--container">
            <RegisterComponent/>
        </div>
        <Footer/>
        </>
    )
}

export default RegisterContainer;