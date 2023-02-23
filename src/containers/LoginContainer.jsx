import React from "react";
import LoginComponent from "../components/LoginComponent";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import RedirectNotes from "../components/RedirectNotes";

const LoginContainer =()=>{
    return(
        <>
        <Navbar/>
        <div className=" text-center col-auto container--custom login--container">
            {
            localStorage.token ?
                <RedirectNotes/> :
                <LoginComponent/>
            }
            
        </div>
        <Footer/>
        </>
        
        
        
    )
}

export default LoginContainer;