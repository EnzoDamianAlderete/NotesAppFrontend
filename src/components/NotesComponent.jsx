import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NotesComponent =({title, description, id})=>{

    const [mensaje , setMensaje]= useState();
    const navigate = useNavigate();

    const deleteTask =(id)=>{
        console.log(`Se ha eliminado la tarea ${id}`);
        axios.delete(`http://localhost:3500/notes/${id}`).then(({data})=>{
            console.log(data);
            setMensaje("Mensaje elimnado correctamente!");
            setTimeout(()=>{
                setMensaje("");
                window.location.reload(false); 
            },1500) 
        })
        .catch((error)=> console.error(error))
    }

    const editTask=(id)=>{// tengo que traer por ID la data y elegir que editar y hacer una vista de un form con un placeholder o value que traiga de la db y actualizar la nota
        localStorage.setItem("id_note",id);
        navigate('/editNote');
        // console.log(`Se ha editado la tarea ${id}`);
        // axios.put(`http://localhost:3500/notes/${id}`).then(({data})=>{
        //     console.log(data);
        //     setMensaje("Mensaje editado correctamente!");
        //     setTimeout(()=>{
        //         setMensaje("");
        //         window.location.reload(false); 
        //     },1500) 
        // })
        // .catch((error)=> console.error(error))
    }

    return(
        <div className=" bg-yellow-200 p-4 rounded-lg md:w-96">
            <p>📌</p>
            <h3 className=" font-bold">{title}</h3>
            <p className=" text-justify p-2">{description}</p>

            <button
            onClick={()=>editTask(id)}
            className="text-white bg-black rounded-full p-1 mr-2">
            <svg width="25" height="25" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M20.71 5.63c.39.39.39 1.02 0 1.41l-1.83 1.83-3.75-3.75 1.83-1.83a.996.996 0 0 1 1.41 0l2.34 2.34ZM3 21v-3.75L14.06 6.19l3.75 3.75L6.75 21H3Z" clipRule="evenodd"></path>
            </svg>
            </button>

            <button 
            onClick={()=>deleteTask(id)}
            className="text-white bg-red-600 p-1 rounded-full ">
            <svg width="26" height="26" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="m14.5 3 1 1H19v2H5V4h3.5l1-1h5ZM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12Zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12Z" clipRule="evenodd"></path>
            </svg>
            </button>

            {mensaje && <div className="bg-red-500 mt-2 text-cyan-50 font-bold p-3 rounded-lg" >{mensaje}</div>}
        </div>
    );
};

export default NotesComponent;