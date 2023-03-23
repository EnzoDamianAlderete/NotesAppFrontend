
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import FormAndNotesComponent from "../components/FormAndNotesComponent";
import VerifyLogin from "../components/VerifyLogin";


const NotesContainer =()=>{

    const token = localStorage.getItem("token");

    return(
        <>
        <Navbar/>
        {token ?  <FormAndNotesComponent/> : <VerifyLogin/>}
        <Footer/>
        </>
    )
}

export default NotesContainer;