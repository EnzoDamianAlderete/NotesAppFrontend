import React from "react";
import { Link } from "react-router-dom";

const Footer =()=>{
    return(
        <footer className="text-white bg-emerald-600 pb-3 pt-3">
            <div className="flex sm:flex-row justify-center align-middle flex-col gap-2">
            <p className="font-semibold text-center pb-3">NotesApp todos los derechos reservados 2023. Enzo Alderete Frontend Developer🚀.</p>
            

        <div className="flex flex-row self-center">
            <Link to={"https://www.linkedin.com/in/enzo-alderete-30014a211"} target="_blank">
            <svg width="26" height="26" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715h-.001ZM7.003 8.575a1.546 1.546 0 0 1-1.287-2.409 1.548 1.548 0 1 1 1.286 2.409h.001Zm1.336 9.764H5.666V9.75H8.34v8.589h-.001ZM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.004Z"></path>
            </svg>
            </Link>

            <Link to={"https://github.com/EnzoDamianAlderete"} target="_blank">
            <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10Z"></path>
            </svg>
            </Link>

            <Link to={"https://enzoalderete.netlify.app/"} target="_blank">
            <svg width="26" height="26" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 7.5h-4.5v-3A1.5 1.5 0 0 0 15 3H9a1.5 1.5 0 0 0-1.5 1.5v3H3A1.5 1.5 0 0 0 1.5 9v10.5A1.5 1.5 0 0 0 3 21h18a1.5 1.5 0 0 0 1.5-1.5V9A1.5 1.5 0 0 0 21 7.5Zm-12-3h6v3H9v-3Zm-6 15V9h18v10.5H3Z"></path>
            </svg>
            </Link>
        </div>
            
            </div>
            
        </footer>
    )
}

export default Footer;