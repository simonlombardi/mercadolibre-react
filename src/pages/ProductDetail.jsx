import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import FetchData from "../components/FetchData"
import NavBar from "../components/NavBar"
import Spinner from "../components/Spinner"
import Select from "../components/Select"


const ProductDetail = () => {
    const { id } = useParams(),
     [data, setData] = useState(null),
     [principalImg, setPrincipalImg] = useState(null),
     [description, setDescription] = useState(null)

    const getData = async () => {
                try {
                    const response = await FetchData(`https://api.mercadolibre.com/items/${id}`)
                    console.log(response.pictures[0]);
                    setData(response)
                    setPrincipalImg(response.pictures[0].url)
                } 
                catch (error) {
                    console.error(`Error al obtener el dato del producto ${id}:`, error)
                }
            }

    const getDescription = async () => {
        try {
            const response = await FetchData(`https://api.mercadolibre.com/items/${id}/description`)
            console.log(response);
            setDescription(response)
        } 
        catch (error) {
            console.error(`Error al obtener el dato del producto ${id}:`, error)
        }
    }

    const handleImage = (e) => {
        console.log(e.target.src);
        setPrincipalImg(e.target.src)
    }
    useEffect(() => {
        getData()
        getDescription()
    }, [])

    return(
        <>
            <NavBar />
            {!data ? <Spinner /> : 
            <div className="w-screen h-screen flex justify-center items-center flex-col flex-row bg-gray-300">
                <div className="w-10/12 h-5/6 mt-5 flex flex-row bg-gray-50">
                    <div className="w-10/12 flex justify-center">
                        <img className="w-auto" src={principalImg} alt={`${data.title} imagen`} />
                    </div>
                    <div className="flex text-left w-6/12 border rounded border-gray-300 flex-col items-start justify-around gap-y-4">
                        <h1 className="text-2xl font-bold pl-4 pt-4">{data.title}</h1>
                        {data.original_price ? <h4 className="text-md line-through pl-4 font-light">${data.original_price}</h4> : <></>}
                        <h2 className="text-2xl font-light pl-4 ">${data.price}</h2>
                        <h4 className="text-md text-[#00a650] pl-4 font-medium">Devolución gratis</h4>
                        <div className="flex w-5/6 flex-wrap justify-center gap-4">
                            {data.pictures.slice(0, 6).map((picture, index) => {
                                return <img src={picture.url} key={index} onMouseEnter={(e) => handleImage(e)} className="w-36 border-2 hover:scale-105 transition duration-500" alt="" />
                            })}
                        </div>
                        <h4 className="font-bold pl-4">{(data.initial_quantity) > 0 ? `Stock disponible (${data.initial_quantity})` : "No hay stock"}</h4>
                        <Select />
                        <button class="bg-blue-500 h-12 ml-4 hover:bg-blue-700 text-white px-3 self-center rounded">
                            Agregar al carrito
                        </button>

                    </div>
                </div>
                {!description ? <Spinner /> : 
                    <div className="w-10/12 bg-[#ffffff] border-t p-4">
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