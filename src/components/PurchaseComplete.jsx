

const PurchaseComplete = () => {
    return (
        <div className="w-screen h-screen flex justify-center items-center flex-col">
            <div className="w-6/12 h-96 bg-[#EDEDED] flex justify-evenly items-center flex-col">
                <img src="public/verificado.png" className="w-36" alt="imagen de verificacion" />
                <p className="text-center text-xl">¡La compra se realizó correctamente!</p>
                <p className="text-center text-xl">¡Muchas Gracias!</p>
            </div>
        </div> 
    )
}
export default PurchaseComplete