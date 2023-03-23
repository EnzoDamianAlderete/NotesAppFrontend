import React from "react";
import EditNote from "../components/EditNote";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const EditNoteContainer =()=>{

    return(
        <div className="text-center">
        <Navbar/>
        <EditNote/>
        <Footer/>
        </div>
        
    )
}

export default EditNoteContainer;