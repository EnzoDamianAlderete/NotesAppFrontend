import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const HomeContainer =()=>{
    const navigate = useNavigate();
    return(
        <>
        <Navbar/>
        <div className="p-10 home ">
            <h1 className="text-2xl font-bold text-center">NotesApp</h1>
            <h3 className="text-xl font-bold text-center">Bienvendio a NotesApp!</h3>
            <p className="text-center">Tu app web para guardar tus notas personales, profecionales o lo que quieras esxribir.</p>

            <div className="flex  flex-wrap justify-center">
                <div className="flex justify-center md:flex-nowrap flex-wrap">
                    <img className="max-w-xs p-4" src={require('../assets/backgrounds/notes-wallpaper.svg').default} alt="" />
                    <p className="p-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione cupiditate voluptatum voluptates minus vitae nam quos atque sunt vero a ex, nesciunt ut iste. Eius, est commodi. Natus ratione accusamus enim distinctio molestias. Quis nulla temporibus libero quas dignissimos veniam ex nostrum.</p>
                </div>

                <div>

                    <button 
                    onClick={()=>navigate("/login")}
                    className="class-button">
                        Get started
                        <div className="arrow-wrapper">
                            <div className="arrow"></div>

                        </div>
                    </button>
                </div>

                <div className="flex justify-center align-middle md:flex-nowrap flex-wrap">

                    <p className="p-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione cupiditate voluptatum voluptates minus vitae nam quos atque sunt vero a ex, nesciunt ut iste. Eius, est commodi. Natus ratione accusamus enim distinctio molestias. Quis nulla temporibus libero quas dignissimos veniam ex nostrum.</p>

                    <img className="max-w-xs p-8" src={require('../assets/backgrounds/notes-wallpaper2.svg').default} alt="" />
                </div>
            </div>
        </div>

           
        
        <Footer/>
        </>
    )
}

export default HomeContainer;