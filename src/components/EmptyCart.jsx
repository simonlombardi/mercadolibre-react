import { Link } from "react-router-dom"

const EmptyCart = () => {
    return(
        <>
        <div className="w-screen h-[90vh] flex justify-center items-center flex-col">
            <div className="w-6/12 h-96 bg-[#EDEDED] flex justify-evenly items-center flex-col">
                <img src="carro-vacio.png" className="w-36" alt="carrito vacio" /> 
                <h1 className="text-center text-xl">El carrito está vacio</h1> 
                <Link to="/" className="text-blue-600 hover:underline"> Volver a Home</Link>
            </div>
        </div>
        </>
    )
}

export default EmptyCart