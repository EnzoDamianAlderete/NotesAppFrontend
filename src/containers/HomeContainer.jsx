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
            <h1 className="text-2xl font-bold text-center text-emerald-900">My NotesApp</h1>
            <h3 className="text-xl font-bold text-center">Bienvendio a My NotesApp!</h3>
            <p className="text-center">Tu app web para guardar tus notas personales, profesionales o lo que quieras escribir.</p>

            <div className="flex  flex-wrap justify-center">
                <div className="flex justify-center md:flex-nowrap flex-wrap">
                    <img className="max-w-xs p-4" src={require('../assets/backgrounds/notes-wallpaper.svg').default} alt="" />
                    <p className="p-10 text-lg text-justify font-semibold">¡Bienvenido/a al sitio web de creación de notas más innovador del mercado! Aquí podrás crear, editar y eliminar tus notas de una manera rápida y sencilla. ¿Te imaginas tener tus ideas organizadas en un solo lugar? Con nosotros es posible.

                    ¿Cansado/a de tener tus pensamientos en diferentes lugares y plataformas? Nuestro sitio web es la solución ideal para ti. Con nuestra herramienta podrás crear notas en cuestión de segundos y tenerlas siempre disponibles para cuando las necesites. ¡Nunca más perderás una gran idea por no tener dónde escribirla!
                    </p>
                </div>

                <div>

                    <button 
                    onClick={()=>navigate("/login")}
                    className="class-button m-10">
                        Get started
                        <div className="arrow-wrapper">
                            <div className="arrow"></div>

                        </div>
                    </button>
                </div>

                <div className="flex justify-center align-middle md:flex-nowrap flex-wrap">

                    <p className="p-10 text-justify  text-lg font-semibold">Simplemente creándote una cuenta podrás acceder a la posibilidad de gestionar tus propias notas. Para crearte una cuenta deberás ingresar datos sencillos como tu nombre, nombre de usuario, email e ingresar una contraseña. Luego cuando inicies sesión podrás crear tus notas.</p>

                    <img className="max-w-xs p-8" src={require('../assets/backgrounds/notes-wallpaper2.svg').default} alt="" />
                </div>
            </div>
        </div>

           
        
        <Footer/>
        </>
    )
}

export default HomeContainer;