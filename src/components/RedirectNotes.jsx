import React from "react";
import { useNavigate } from "react-router-dom";

const RedirectNotes =()=>{

    const navigate = useNavigate();

    const redirect =()=>{
        navigate("/myNotes");
    }

        return(
            <div className="bg-white rounded p-6 sm:h-auto h-screen">
                <h2 className="text-emerald-400 font-bold text-2xl mb-3"
                >Ya has iniciado sesión!</h2>
                <p className="text-sm">Ya has iniciado sesión con tu usuario. Dirígete a la sección"My notes" para ver tus notas.</p>
                <button 
                onClick={()=>redirect()}
                className="text-white bg-emerald-500 rounded p-2 m-4 hover:bg-emerald-600">
                    Ir a mis notas
                </button>
            </div>
        )
}

export default RedirectNotes;