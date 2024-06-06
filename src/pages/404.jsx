import NavBar from "../components/NavBar"


const Error = () => {
    return(
        <>
            <NavBar />
            <div className="w-full flex justify-center flex-col items-center">
                <img src="../../public/404.jpg" alt="404 error" className="w-1/3" />
                <a href="/home" className="text-[#3f3f46] underline" >Ir a la pagina principal</a>
                <img src="../../public/galperin.avif" alt="404 error" className="w-1/3" />
            </div>
        </>
    )
}

export default Error