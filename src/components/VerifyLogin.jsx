import { useNavigate } from "react-router-dom";


const VerifyLogin =()=>{

    const navigate = useNavigate();

    const redirectLogin =()=>{
        navigate("/login");
    }
    const redirectRegister =()=>{
        navigate("/Register");
    }

    return(
        <div className="flex flex-col text-center h-screen">
        <h2 className="text-3xl font-bold mt-5">Upss... parece que aun no haz iniciado sesion</h2>
        <h4 className="text-xl font-semibold">Crea una cuenta para iniciar sesion y poder crear notas!</h4>

        <img className="p-4 max-w-70 h-80 self-center" src={require('../assets/backgrounds/404.svg').default} alt="404" />
        
        <button 
        onClick={redirectRegister}
        className="bg-emerald-600 rounded p-1 text-white w-20 m-2 border-yellow-50 font-bold hover:bg-emerald-800 self-center"
        type="submit">
        Crear cuenta
        </button>

        <p>Ya tienes una cuenta? Inicia sesion:</p>

        <button 
        onClick={redirectLogin}
        className="bg-cyan-600 rounded p-1 text-white w-20 self-center m-2 border-yellow-50 font-bold hover:bg-cyan-700"
        type="submit">
        Iniciar sesion
        </button>
        </div>
    )
}

export default VerifyLogin;