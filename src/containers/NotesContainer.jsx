import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NotesComponent from "../components/NotesComponent";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


const NotesContainer =()=>{
    
    const [idUser, setIdUser] = useState(0);
    const [inputs , setInputs ] = useState({
        title:"",
        description:"",
        UserId:idUser,
    });
    const [mensaje , setMensaje ] = useState();
    const [name, setName] = useState();
    const [notes, setNotes] = useState([]);
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    const {id} = useParams();
    const { title , description ,UserId } = inputs;
    useEffect(()=>{
        if(token){
            axios.get(`http://localhost:3500/user`,{
                headers:{
                    token:token,
                },
            }).then(({data})=> {
                setName(data.dataUser.name);
                setIdUser(data.dataUser.id);
            })
            .catch((error)=> console.error(error));
        }
    },[token]);

     useEffect(()=>{
          axios.get(`http://localhost:3500/users/${idUser}/notes`)
         .then(({data})=>{
             setNotes([...data.notes]);
         })
         .catch((error)=> console.error(error))
         
     },[idUser]);

    

    const redirect =()=>{
        localStorage.removeItem("token");
        navigate('/');
    }

    const onSubmitForm = async(e)=>{
        e.preventDefault();
        if(title==="" &&  description===""){
            setMensaje("Complete todos los campos");
        } else if (title!=="" &&  description!==""){
            const Note = {
                title,
                description,
                UserId:idUser,
            };
            console.log(Note);
             await axios.post('http://localhost:3500/notes',Note).then((res)=>{
                 const {data}= res;
                 setMensaje(data.mensaje);//msj: nota creada correctamente
                 setInputs({ title:"",description:""});
                 setTimeout(()=>{
                     setMensaje("");
                 },2000);
             }).catch((error)=>{
                 console.log(error);
                 setMensaje("Hubo un error");
                 setTimeout(()=>{
                     setMensaje("");
                 },2000);
             });
            
            }
            window.location.reload(false);   
        }

    const HandleChange =(e)=>{
        setInputs({...inputs, [e.target.name]:e.target.value});
    }

    return(
        <>
        <Navbar/>
        <div className="notes--container flex flex-col col-auto gap-1 flex-wrap p-4 text-center min-h-screen">
        {name ? <h2 className="text-2xl font-bold">Bienvenido <span className="text-emerald-700">{name}</span> es un gusto verte de nuevo por aqui!</h2> : <h2 className="text-2xl font-bold"> Bienvenido a NotesApp, tu app para crear notas.</h2>}

            
            <p>Aqui podras ver todas tus notas. Puedes crear, editar o eliminar tus notas cuando quieras.</p>

            <form 
            className="bg-slate-200 flex flex-col flex-wrap rounded justify-center align-middle p-4 md:w-96 self-center "
            onSubmit={(e)=>onSubmitForm(e)}
            >
                
                <h4 className="text-cyan-600 font-bold text-2xl">Crea una nueva nota!</h4>

                <input 
                onChange={(e)=>HandleChange(e)}
                className="rounded outline-none bg-slate-300 p-1 m-2 border-yellow-50 border-2"
                placeholder="Titulo"
                name="title"
                id="title"
                type="text" />
                
               <input 
                onChange={(e)=>HandleChange(e)}
                className="rounded outline-none bg-slate-300 p-2 pb-10 m-2 border-yellow-50 border-2"
                placeholder="Nota"
                name="description"
                id="description"
                type="text" />
               

                <button 
                
                className="bg-cyan-600 rounded p-1 text-white w-20 self-end m-2 border-yellow-50 font-bold hover:bg-cyan-700"
                type="submit">
                Agregar
                </button>
            </form>

            <div className="flex gap-2 flex-wrap justify-center">
             {notes.map((elem)=>{
                return(
                    <span key={elem.id}>
                        <NotesComponent id={elem.id} title={elem.title} description={elem.description} />
                    </span>
                );
            })} 
            
            </div>
        </div>
        {token &&
            
            <div className=" bg-emerald-600 flex justify-center">
            <button 
                onClick={()=>redirect()}
                nav
                className="bg-blue-800 hover:bg-blue-900 p-2 rounded w-36 text-white font-xl self-center flex align-middle justify-center" >     
                    <svg className="pt-1 mr-1" width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 4.008a1 1 0 1 0-2 0l-.003 8.003a1 1 0 0 0 2 0L13 4.009Z"></path>
                    <path d="M4 12.993c0-2.21.895-4.21 2.343-5.657L7.757 8.75a6 6 0 1 0 8.485 0l1.415-1.414A8 8 0 1 1 4 12.993Z"></path>
                    </svg>
                Cerrar sesion
            </button>
            </div>}
        
        <Footer/>
        </>
    )
}

export default NotesContainer;