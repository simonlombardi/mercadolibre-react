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
            <div>
                <h1>{data ? data.title : "cargando..."}</h1>
            </div>
        </>
    )
}

export default ProductDetail