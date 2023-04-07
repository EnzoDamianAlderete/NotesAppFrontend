import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EditNote =()=>{

    const [char,setChar] = useState(0);
    const [title , setTitle] = useState();
    const [description , setDescription] = useState();
    const [mensaje , setMensaje ] = useState();
    const navigate = useNavigate();

    useEffect(()=>{
        const id_note = localStorage.getItem("id_note")
        axios.get(`http://localhost:3500/notes/${id_note}`).then(({data})=> {
            console.log(`la info es`,data);
            setTitle(data.title);
            setDescription(data.description);
            setChar(data.description.length);
        })
        .catch((error)=> console.error(error));
    },[]);

     const onSubmitForm = async(e)=>{
         e.preventDefault();
         if(title==="" &&  description===""){
             setMensaje("Complete todos los campos");
         } else if (title!=="" &&  description!==""){
             const Note = {
                 title,
                 description,
             };
             console.log(Note);
             const id_note = localStorage.getItem("id_note")
              await axios.put(`http://localhost:3500/notes/${id_note}`,Note).then((res)=>{
                  const {data}= res;
                  setMensaje(data.mensaje);//msj: nota creada correctamente
                  alert("Nota editada correctamente!");
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
             navigate('/myNotes');   
         }


     const HandleChangeTitle =(e)=>{
         setTitle(e.target.value);
     }
     const HandleChangeDescription =(e)=>{
         setDescription(e.target.value);
     }
    const lengthNote =(e)=>{
        setChar(e.target.value.length);
    }

    return(
        <div className=" pt-1 mb-1 h-screen flex flex-col align-middle justify-center">
            <form 
            className="bg-slate-200 flex flex-col flex-wrap rounded p-4 w-96 self-center"
            onSubmit={(e)=>onSubmitForm(e)}
            >
                
                <h4 className="text-cyan-600 font-bold text-2xl">Edita tu nota!</h4>

                <input 
                onChange={(e)=>HandleChangeTitle(e)}
                className="rounded outline-none bg-slate-300 p-1 m-2 border-yellow-50 border-2"
                placeholder="Titulo"
                value={title}
                name="title"
                id="title"
                type="text" />
                
               <textarea 
                onChange={(e)=>{HandleChangeDescription(e); lengthNote(e)}}
                className="rounded outline-none bg-slate-300 p-2 pb-10 m-2 border-yellow-50 border-2"
                placeholder="Nota"
                name="description"
                value={description}
                id="description"
                rows="5"
                maxLength={255}
                require
                type="text" />

                <p className="text-blue-500 font-bold text-xs">{char}/255</p>
               

                <button 
                
                className="bg-cyan-600 rounded p-1 text-white w-20 self-end m-2 border-yellow-50 font-bold hover:bg-cyan-700"
                type="submit">
                Editar
                </button>
            </form>

            <img className="p-4 max-w-70 h-80" src={require('../assets/backgrounds/editImg.svg').default} alt="edit" />
        </div>
        
    )
}

export default EditNote;