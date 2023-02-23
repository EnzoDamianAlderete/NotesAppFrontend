import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const LoginComponent =()=>{

    const [inputs, setInputs ] = useState({
        email:"",
        password:""
    });
    const [mensaje, setMensaje ]=useState();
    const [loading, setLoading ] = useState(false);
    const navigate = useNavigate();
    const { email , password } = inputs;

    const HandleChange =(e)=>{
        setInputs({...inputs, [e.target.name]:e.target.value});
    }

    const onSubmit = async(e)=>{
        e.preventDefault();
        console.log(email)
        console.log(password)
         if(email===""  || password===""){
             setMensaje("Por favor complete todos los campos");
             setTimeout(()=>{
                 setMensaje("");
             },3000);
         }else if( email!=="" && password!==""){
             const User = {
                 email,
                 password
             }
             console.log(User);
             setLoading(true);
             await axios.post('http://localhost:3500/login',User).then((res)=>{
                 const {data} = res;
                 setMensaje(data.mensaje);
                 console.log(data);
                 setTimeout(()=>{
                    setMensaje("");
                    localStorage.setItem("token",data?.user.token);
                    navigate("/myNotes");
                 },2000);
             })
             .catch((error)=>{
                 console.error("error",error);
                 setMensaje("Correo o contraseña incorrecta");
                 setTimeout(()=>{
                     setMensaje("");
                 },3000);
             });
             setInputs({email:"", password:""});
             setLoading(false);
         }
    }


    return( 
        <div className="grid  grid-cols-1 sm:grid-cols-3 login--component m-4 shadow-xl">
            <div className="p-8 col-span-2 sm:rounded-l-lg rounded-t-lg  bg-slate-50 login--component__form">
                <svg className="text-emerald-500 self-center" width="96" height="96" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="m3 5 9-4 9 4v6c0 5.55-3.84 10.74-9 12-5.16-1.26-9-6.45-9-12V5Zm3 8 4 4 8-8-1.41-1.42L10 14.17l-2.59-2.58L6 13Z" clipRule="evenodd"></path>
                </svg>
                <h2 className="text-3xl font-bold p-2 text-emerald-500">Hola de nuevo!</h2>
                <p>Ingresa tus datos para iniciar sesion y ver tus notas.</p>
                <form onSubmit={(e)=>onSubmit(e)} className="flex col-auto flex-wrap justify-center" >
                    <input 
                    type="email"
                    placeholder="email"
                    value={email}
                    name="email"
                    id="email"
                    onChange={(e)=>(HandleChange(e))}
                    className=" p-1 rounded-lg m-2 bg-slate-200 input--class"
                    />
                    <input 
                    type="password" 
                    placeholder="password"
                    value={password}
                    name="password"
                    id="password"
                    onChange={(e)=>(HandleChange(e))}
                    className="p-1 rounded-lg m-2  bg-slate-200 input--class"
                    />
                    <button 
                    type="submit" 
                    className=" uppercase text-blue-100 font-bold bg-emerald-500 hover:bg-emerald-600 py-2 px-10 rounded-2xl mt-4">
                        Login
                    </button>
                </form>
                {loading && <div className="bg-blue-500 mt-2 text-cyan-50 font-bold p-3 rounded-lg" >Cargando...</div>}
                {mensaje && <div className="bg-red-500 mt-2 text-cyan-50 font-bold p-3 rounded-lg" >{mensaje}</div>}
            </div>
            

            <div className="toRegisterClass text-blue-100 p-8 sm:rounded-r-lg rounded-b-lg">
                <h2 className="text-slate-200 font-bold text-2xl">Aun no tiene cuenta?</h2>
                <p>Create una cuenta para usar nuestro sitio web.</p>

                <img className="p-4 max-w-70 h-40 self-center" id="imgToRegister" src={require('../assets/crearCuenta.svg').default} alt="login" />

                <Link to={'/register'} className="font-bold  py-2 px-10 border-solid border-slate-200 border-2  rounded-2xl hover:bg-emerald-500 ">
                    Crear cuenta
                </Link>

            </div>
        </div>
        
    )
}

export default LoginComponent;
