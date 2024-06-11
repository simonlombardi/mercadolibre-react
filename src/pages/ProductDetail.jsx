import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import FetchData from "../components/FetchData"


const ProductDetail = () => {
    const { id } = useParams()
    const [data, setData] = useState(null)
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await FetchData(`https://api.mercadolibre.com/items/${id}`)
                console.log(response);
                setData(response)
            } 
            catch (error) {
                console.error(`Error al obtener el dato del producto ${id}:`, error)
            }
        }
        getData()
    }, [])
    return(
        <h1>{data.title}</h1>
    )
}

export default ProductDetail