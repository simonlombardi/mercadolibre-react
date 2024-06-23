import { Link } from "react-router-dom"
import NavBar from "../components/NavBar"


const Error = () => {
    return (
        <>
            <NavBar />
            <div className="w-full flex justify-center flex-col items-center">
                <img src="../../public/404.jpg" alt="404 error" className="w-1/3" />
                <div className=" rounded-2xl p-4 bg-[#ffe600] flex justify-center">
                    <Link to="/" className="text-[#3f3f46] underline  text-2xl " >Ir a la página principal</Link>
                </div>
                <img src="../../public/galperin.avif" alt="galperin 404 error" className=" pt-96 w-1/3" />
            </div>
        </>
    )
}

export default Error