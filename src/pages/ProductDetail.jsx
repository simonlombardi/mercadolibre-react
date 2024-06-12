import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import FetchData from "../components/FetchData"
import NavBar from "../components/NavBar"
import Spinner from "../components/Spinner"


const ProductDetail = () => {
    const { id } = useParams()
    const [data, setData] = useState(null)

    const getData = async () => {
                try {
                    const response = await FetchData(`https://api.mercadolibre.com/items/${id}`)
                    console.log(response.title);
                    setData(response)
                } 
                catch (error) {
                    console.error(`Error al obtener el dato del producto ${id}:`, error)
                }
            }
console.log(data);
    useEffect(() => {
        getData()
    }, [])

    return(
        <>
            <NavBar />
            {!data ? <Spinner /> : 
            <div className="w-screen h-full flex justify-center items-center flex-row bg-gray-300">
                <div className="w-10/12 flex flex-row bg-gray-50">
                    <div className="w-10/12 flex justify-center">
                        <img className="w-auto" src={data.pictures[0].url} alt={`${data.title} imagen`} />
                    </div>
                    <div className="flex text-left w-6/12 border rounded border-gray-300 flex-col gap-y-4">
                        <h1 className="text-2xl font-bold pl-4 pt-4">{data.title}</h1>
                        <h4 className="text-md line-through pl-4 font-light">${data.original_price}</h4>
                        <h2 className="text-2xl font-light pl-4 ">${data.price}</h2>
                        <h4 className="text-md text-[#00a650] pl-4 font-medium">Devolución gratis</h4>
                        <h4 className="font-bold pl-4 ">{(data.initial_quantity) > 0 ? "Stock disponible" : "No hay stock"}</h4>

                    </div>
                </div>
            </div>
            }
            
        </>
    )
}

export default ProductDetail