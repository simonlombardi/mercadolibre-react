import { Link } from "react-router-dom"

const ProductCard = ({ product }) => {

  return (
      <Link to={`/product/${product.id}`}>
        <div className="m-3 w-[250px] min-w-[250px] max-w-[250px] h-[350px] max-h-[350px] hover:text-[#3483FA] bg-white border border-gray-200 rounded-lg shadow-xs hover:shadow-2xl transition-shadow duration-500">
          <div className="flex justify-center mt-5 ">
            <img className="rounded-t-lg h-[150px] w-auto" src={product.thumbnail} alt={'imagen de ' + product.title.slice(0, 10) + '...'} />
          </div>
          <div className="p-5 text-justify">
            <p className="mb-2 text-sm font-light">{product.title.length > 50 ? product.title.slice(0, 50) + '...' : product.title}</p>
            {product.original_price ? <div className="flex"><p className="text-gray-500 line-through">${product.original_price.toLocaleString('es-AR')}</p><p className="text-[#31B771] ml-2 my-auto items-center rounded text-xs">DESCUENTO</p></div> : ''}
            <p className="mb-3 text-black text-2xl ">${product.price.toLocaleString('es-AR')}</p>
            {product.shipping.free_shipping ? <p className="text-[#31B771] font-semibold text-sm ">Envío gratis</p> : ''}
          </div>
        </div>
      </Link>
  )
}

export default ProductCard