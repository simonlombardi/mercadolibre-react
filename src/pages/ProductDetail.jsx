import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import FetchData from "../components/FetchData"
import NavBar from "../components/NavBar"
import Spinner from "../components/Spinner"
import Select from "../components/Select"
import getInputUser from "../pages/Home"

const ProductDetail = () => {
    const { id } = useParams(),
        [data, setData] = useState(null),
        [principalImg, setPrincipalImg] = useState(null),
        [description, setDescription] = useState(null),
        [quantity, setQuantity] = useState(0)

    const getData = async () => {
        try {
            const response = await FetchData(`https://api.mercadolibre.com/items/${id}`)
            setData(response)
            if (response.initial_quantity > 0) {
                setQuantity(1)
            }
            setPrincipalImg(response.pictures[0].url)
        }
        catch (error) {
            console.error(`Error al obtener el dato del producto ${id}:`, error)
        }
    }

    const getDescription = async () => {
        try {
            const response = await FetchData(`https://api.mercadolibre.com/items/${id}/description`)
            setDescription(response)
        }
        catch (error) {
            console.error(`Error al obtener el dato del producto ${id}:`, error)
        }
    }

    const getQuantity = (selectQuantity) => {
        setQuantity(selectQuantity)
    }

    const handleImage = (e) => {
        setPrincipalImg(e.target.src)
    }

    useEffect(() => {
        getData()
        getDescription()
    }, [])

    return (
        <>
            <NavBar getInputUser={getInputUser} />
            {!data ? <Spinner /> :
                <div className=" h-screen flex justify-center items-center flex-col bg-gray-300">
                    <div className="w-10/12 overflow-y-auto mt-5 flex flex-col sm:flex-row flex-grow sm:flex-grow-0 bg-gray-50">
                        <div className="flex sm:flex-col flex-row w-full sm:w-2/12 justify-center gap-4 p-4 ">
                            {data.pictures.slice(0, 6).map((picture, index) => {
                                return (
                                    <div key={index} className=" hover:border-blue-400 hover:border-4 border-2 rounded hover:scale-105 object-scale-down h-14 w-14 transition duration-500 flex justify-center">
                                        <img src={picture.url} onMouseEnter={(e) => handleImage(e)} className="h-auto w-auto" alt="Selección de imagen del producto" />
                                    </div>
                                )
                            })}
                        </div>
                        <div className="flex justify-center w-full sm:w-6/12 p-4">
                            <img className=" max-h-96 h-full max-w-96 my-auto " src={principalImg} alt={`${data.title} imagen`} />
                        </div>
                        <div className="sm:m-4 flex text-left w-full sm:w-4/12 md:border border-grey-700 p-4 flex-col items-start justify-around gap-y-4  rounded-md ">
                            <h1 className="text-2xl font-bold pt-4">{data.title}</h1>
                            {data.shipping.free_shipping ? <div className="text-[#31B771] font-semi-bold">Envío gratis.</div> : ''}
                            <div>
                                {data.original_price ? <div className="flex"><p className="text-md line-through font-light inline">${data.original_price}</p><p className="text-[#31B771] ml-2 text-xs">DESCUENTO</p> </div> : <></>}
                                <h2 className="text-2xl font-light ">${data.price}</h2>
                            </div>
                            <h4 className="font-bold">{(data.initial_quantity) > 0 ? `Stock disponible (${data.initial_quantity})` : "No hay stock"}</h4>
                            <Select getQuantity = {getQuantity}/>
                            <button onClick={()=>console.log(data, quantity)} class="bg-blue-500 h-12 w-full px-2 hover:bg-blue-700 text-white self-center rounded">
                                Agregar al carrito
                            </button>
                            <div className="block">
                                <p className="text-md text-[#5386D3] inline m-0 p-0">Devolución gratis. </p>
                                <p className="text-[#929292] inline font-light">Tenés 30 días desde que lo recibís.</p>
                            </div>
                            {data.warranty?.includes(":") ?
                                <div className="block">
                                    <p className="text-md text-[#5386D3] inline m-0 p-0">{data.warranty.substring(0, data.warranty.indexOf(":") + 1)}</p>
                                    <p className="text-[#929292] inline font-light">{data.warranty.substring(data.warranty.indexOf(":") + 1)}</p>
                                </div>
                                : <p className="text-[#929292] pb-4 inline font-light">Este producto no ofrece garantía.</p>}
                        </div>
                    </div>
                    {!description ? <Spinner /> :
                        <div className="w-10/12 mb-auto h-auto bg-[#ffffff] border-t p-4">
                            <h1 className="font-bold text-lg">Descripcion del producto</h1>
                            <p className="text-gray-800">{description.plain_text}</p>
                        </div>
                    }
                </div>
            }
        </>
    )
}

export default ProductDetail