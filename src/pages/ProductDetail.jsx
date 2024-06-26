import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import FetchData from "../components/FetchData"
import NavBar from "../components/NavBar"
import Spinner from "../components/Spinner"
import Select from "../components/Select"

const ProductDetail = () => {

    const { id } = useParams(),
        navigate = useNavigate(),
        [data, setData] = useState(null),
        [principalImg, setPrincipalImg] = useState(null),
        [description, setDescription] = useState(null),
        [quantity, setQuantity] = useState(0),
        [cartProducts, setCartProducts] = useState(localStorage.getItem("cartProducts") ? JSON.parse(localStorage.getItem("cartProducts")) : []),
        [isInCart, setIsInCart] = useState(false);


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
            navigate("/404")
            console.error(`Error al obtener los datos del producto ${id}:`, error)
        }
    }

    const getDescription = async () => {
        try {
            const response = await FetchData(`https://api.mercadolibre.com/items/${id}/description`)
            setDescription(response)
        }
        catch (error) {
            console.error(`Error al obtener la descripción del producto ${id}:`, error)
        }
    }

    const getQuantity = (selectQuantity) => {
        setQuantity(parseInt(selectQuantity))
    }

    const handleImage = (e) => {
        setPrincipalImg(e.target.src)
    }

    const addToCart = () => {
        if (!isInCart) {
            data.selected_quantity = quantity
            setCartProducts([...cartProducts, data])
        }
    }

    const RemoveFromCart = () => {
        if (isInCart) {
            setCartProducts(cartProducts.filter((p) => { return p.id != id }))
        }
    }

    useEffect(() => {
        getData()
        getDescription()
    }, [])

    useEffect(() => {
        localStorage.setItem("cartProducts", JSON.stringify(cartProducts))
        const cartIds = cartProducts.map((p) => p.id)
        cartIds.includes(id) ? setIsInCart(true) : setIsInCart(false)
    }, [cartProducts])

    return (
        <>
            <NavBar cartProductsQuantity={cartProducts.length} />
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
                        <div className="sm:m-4 flex text-left w-full sm:w-4/12 sm:border border-grey-700 p-4 flex-col gap-y-4 rounded-md sm:overflow-auto ">
                            <p className="text-2xl shrink-0 font-bold ">{data.title}</p>
                            {data.shipping.free_shipping ? <div className="text-[#31B771] font-semi-bold">Envío gratis.</div> : ''}
                            <div>
                                {data.original_price ? <div className="flex"><p className="text-md line-through font-light inline">${data.original_price}</p><p className="text-[#31B771] ml-2 text-xs">DESCUENTO</p> </div> : <></>}
                                <h2 className="text-2xl font-light ">${data.price}</h2>
                            </div>
                            <h4 className="font-bold">{(data.initial_quantity) > 0 ? `Stock disponible (${data.initial_quantity})` : "No hay stock"}</h4>
                            <Select getQuantity={getQuantity} />
                            {
                                isInCart ?
                                    <button onClick={RemoveFromCart} className="bg-red-500 min-h-12 w-full px-2 hover:bg-red-700 text-white self-center rounded">
                                        Quitar del carrito
                                    </button>
                                    :
                                    <button onClick={addToCart} className="bg-blue-500 min-h-12 w-full px-2 hover:bg-blue-700 text-white self-center rounded">
                                        Agregar al carrito
                                    </button>
                            }

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
                        <div className="w-10/12 mb-4 h-1/4 overflow-scroll lg:h-10/12 bg-[#ffffff] border-t p-4">
                            <h1 className="font-bold text-lg">Descripción del producto</h1>
                            <p className="text-gray-800">{description.plain_text}</p>
                        </div>
                    }
                </div>
            }
        </>
    )
}

export default ProductDetail