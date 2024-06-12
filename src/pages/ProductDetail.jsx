import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import FetchData from "../components/FetchData"
import NavBar from "../components/NavBar"


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
            {!data ? <h1>cargando...</h1> : 
            <div className="w-screen flex justify-center items-center flex-row">
                <div className="w-10/12 flex flex-row">
                    <div className="w-10/12">
                        <img className="w-full" src={data.pictures[0].url} alt={`${data.title} imagen`} />
                    </div>
                    <div className="flex text-left w-6/12 border rounded border-gray-300 flex-col">
                        <h1 className="text-2xl font-bold">{data.title}</h1>
                        <h2 className="text-2xl font-light">${data.price}</h2>    
                    </div>
                </div>
            </div>
            }
            
        </>
    )
}

export default ProductDetail