import { useNavigate } from "react-router-dom";

const Page404 =()=>{

    const navigate = useNavigate();

    const redirectHome =()=>{
        navigate("/");
    }

    return(
        < div className='flex flex-col text-center align-middle justify-center h-screen' >
        <h2 className="text-3xl font-bold mt-5 text-emerald-800">Upss... La pagina que estas buscando no existe o ha ocurrido un error.</h2>

        <img className="p-4 max-w-70 h-80 self-center" src={require('../assets/backgrounds/404.svg').default} alt="404" />
        

        <button 
        onClick={redirectHome}
        className="bg-emerald-600 rounded p-1 text-white w-20 m-2 border-yellow-50 font-bold hover:bg-emerald-800 self-center"
        type="submit">
        Volver a Home
        </button>
        </ div>
        
    )
}

export default Page404;