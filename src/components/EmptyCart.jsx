
const EmptyCart = () => {
    return(
        <>
        <div className="w-screen h-screen flex justify-center items-center flex-col">
            <div className="w-6/12 h-96 bg-[#EDEDED] flex justify-evenly items-center flex-col">
                <img src="public/carro-vacio.png" className="w-36" alt="carrito vacio" /> 
                <h1 className="text-center text-xl">El carrito esta vacio</h1> 
            </div>
        </div>
        </>
    )
}

export default EmptyCart