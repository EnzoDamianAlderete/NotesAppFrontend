import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import RedirectNotes from "./RedirectNotes";

const RegisterComponent =()=>{

    const [inputs, setInputs] = useState({
        name:"",
        userName:"",
        email:"",
        password:"",
        repeatPassword:""
    });
    const [mensaje , setMensaje] = useState("");
    const [loading , setLoading] = useState(false);
    const navigate = useNavigate();
    const { name , userName ,email , password, repeatPassword} = inputs;

    const HandleChange =(e)=>{
        setInputs({...inputs, [e.target.name]:e.target.value});
    }

    const onSubmit = async(e)=>{
        e.preventDefault();
        if( password === repeatPassword){
            if(name ==="" && email ==="" && password ===''){
                setMensaje("Por favor complete todos los campos");
                setTimeout(()=>{
                    setMensaje("");
                },3000)
            }else if (name !=="" && email !=="" && password !==''){
                const User = {
                    name,
                    userName,
                    email,
                    password
                };
                setLoading(true);
                await axios.post('http://localhost:3500/users',User) 
                .then((res)=>{
                    const {data}= res;
                    setMensaje(data.mensaje);//msj: usuario creado correctamente
                    setInputs({ name:"",userName:"",email:"",password:""});
                    setTimeout(()=>{
                        setMensaje("");
                        navigate("/login");
                    },2000);
                })
                .catch((error)=>{
                    console.log(error);
                    setMensaje("Hubo un error");
                    setTimeout(()=>{
                        setMensaje("");
                    },2000);
                });
                setLoading(false);
            }
            } else if(password !== repeatPassword){
                setMensaje("Las contraseñas no coinciden!");
                setTimeout(()=>{
                    setMensaje("");
                },3000)
            }
        
    };



    return(localStorage.token ?
        <RedirectNotes/> :
        <div className="flex flex-col-reverse  sm:grid grid-cols-1 sm:grid-cols-3 login--component m-4 shadow-xl">

            <div className=" toLoginClass text-blue-100 p-8 sm:rounded-l-lg rounded-b-lg">
                <h2 className="text-slate-200 font-bold text-2xl">¿Ya tienes una cuenta?</h2>
                <p>¡Inicia sesión para acceder a tus notas!</p>

                <img className="p-4 max-w-70 h-40 self-center" id="imgToRegister" src={require('../assets/backgrounds/ToLoginImg.svg').default} alt="regiter" />

                <Link to={'/login'} className="font-bold  py-2 px-10 border-solid border-slate-200 border-2  rounded-2xl hover:bg-emerald-600 ">
                    Iniciar sesión
                </Link>

            </div>

            <div className=" p-8 col-span-2  bg-slate-50 regiter--component__form   sm:rounded-r-lg rounded-t-lg">
            <svg className="text-emerald-500" width="86" height="86" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M16 9a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-2 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" clipRule="evenodd"></path>
            <path fillRule="evenodd" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1ZM3 12c0 2.09.713 4.014 1.908 5.542A8.986 8.986 0 0 1 12.065 14a8.984 8.984 0 0 1 7.092 3.458A9 9 0 1 0 3 12Zm9 9a8.963 8.963 0 0 1-5.672-2.012A6.992 6.992 0 0 1 12.065 16a6.991 6.991 0 0 1 5.689 2.92A8.964 8.964 0 0 1 12 21Z" clipRule="evenodd"></path>
            </svg>
                <h2 className="text-3xl font-bold p-2 text-emerald-500">Bienvenid@!</h2>
                <p>Ingresa tus datos para crear una cuenta.</p>
                <form onSubmit={(e)=>onSubmit(e)} 
                    className="flex col-auto flex-wrap justify-center" >
                    <input 
                    onChange={(e)=>HandleChange(e)}
                    type="text"
                    value={name}
                    placeholder="Name"
                    name="name"
                    id="name"
                    className=" p-1 rounded-lg m-2 bg-slate-200 input--class"
                    required
                    autoFocus
                    />

                    <input 
                    onChange={(e)=>HandleChange(e)}
                    value={userName}
                    type="text"
                    placeholder="User name"
                    name="userName"
                    id="userName"
                    className=" p-1 rounded-lg m-2 bg-slate-200 input--class"
                    required/>

                    <input 
                    onChange={(e)=>HandleChange(e)}
                    value={email}
                    type="email"
                    placeholder="Email"
                    name="email"
                    id="email"
                    className=" p-1 rounded-lg m-2 bg-slate-200 input--class"
                    required/>
                    <input 
                    onChange={(e)=>HandleChange(e)}
                    value={password}
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="p-1 rounded-lg m-2  bg-slate-200 input--class"
                    type="password" 
                    required/>

                    <input 
                    onChange={(e)=>HandleChange(e)}
                    //value={repeatPassword}
                    name="repeatPassword"
                    id="repeatPassword"
                    placeholder="Repeat password"
                    className="p-1 rounded-lg m-2  bg-slate-200 input--class"
                    type="password" 
                    required/>

                    <button 
                    type="submit" 
                    className=" uppercase text-blue-100 font-bold bg-emerald-500 hover:bg-emerald-600 py-2 px-10 rounded-2xl mt-4">
                        Crear cuenta
                    </button>
                </form>

                {mensaje && <div className="bg-red-500 mt-2 text-cyan-50 font-bold p-3 rounded-lg" >{mensaje}</div>}
                
            </div>
            
        </div>
    )

}

export default RegisterComponent;