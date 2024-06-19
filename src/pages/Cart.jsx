import { useState } from "react"
import NavBar from "../components/NavBar"

const Cart = () => {
  const [cartProducts, setCartProducts] = useState(localStorage.getItem("cartProducts") ? JSON.parse(localStorage.getItem("cartProducts")) : [])

  const getTotal = () => {
    if (cartProducts.length > 0) {
      let precios = cartProducts.map((p) => { return p.price * p.selected_quantity })
      const suma = precios.reduce((acumulador, valoractual)=> acumulador+valoractual)
      return suma.toFixed(2)
    }
  }

  const saveCartProducts = (cartProductsUpdate) => {
    localStorage.setItem('cartProducts', JSON.stringify(cartProductsUpdate))
  }

  const increaseQuantity = (product) => {
    let cartProductsUpdate = cartProducts.map(p => {
      if (p.id == product.id) {
        return{...p, selected_quantity: product.selected_quantity + 1}
      }
      return p
    })
    setCartProducts(cartProductsUpdate)
    saveCartProducts(cartProductsUpdate)
  }

  const decreaseQuantity = (product) => {
    let cartProductsUpdate = cartProducts.map(p => {
      if (p.id == product.id) {
        return{...p, selected_quantity: product.selected_quantity - 1}
      }
      return p
    })
    setCartProducts(cartProductsUpdate)
    saveCartProducts(cartProductsUpdate)
  }

  const deleteProduct = (product) => {
    let cartProductsUpdate = cartProducts.filter(p => p.id !== product.id)
    setCartProducts(cartProductsUpdate)
    saveCartProducts(cartProductsUpdate)
  }

  return (
    <>
      <NavBar />
      {(cartProducts.length == 0) ? <h1 className="text-center">El carrito esta vacio</h1> : 
      <div className="bg-[#EDEDED] h-fit flex justify-around px-28 py-11">
        <div className=" w-7/12 bg-white rounded">
          <div className="ml-5">
            <p className="font-bold text-xl">Productos</p>
            
          </div> 
          <hr />
          {cartProducts.map((p) => (<div className="pt-2" key={p.id}>
            <div className="flex h-28 justify-center items-center flex-wrap">
              <div className=" w-2/12  object-contain"> <img className="m-auto w-min-11 max-h-20 max-w-20" src={p.pictures[0].url} alt="" /></div>
              <div className="flex w-6/12 flex-col items-start">
              <p className="w-10/12">
                {p.title}
              </p>
              <button onClick={() => deleteProduct(p)} className="font-semibold text-[#3483fa] hover:underline">Eliminar</button>
              </div>
              <div className="flex justify-center items-center text-center w-2/12">
                <button onClick={() => decreaseQuantity(p)} className="bg-red-500 hover:bg-red-600 text-white flex justify-center items-center font-bold h-6 w-6">-</button>
                <p className="mx-2">{p.selected_quantity}</p>
                <button onClick={() => increaseQuantity(p)} className="bg-green-500 hover:bg-green-600 flex justify-center items-center text-white font-bold h-6 w-6">+</button>
              </div>
              <div className="w-2/12 text-center">
                {p.original_price ? <> <p className="text-[#31B771]">-{Math.round(100-(p.price*100/p.original_price))}%</p> <p className="text-md line-through font-light inline">${p.original_price}</p></>
                : <></>}
                <p className="font-thin">precio: ${(p.price.toFixed(2))}</p>
                <p className="font-thin">total: ${(p.price * p.selected_quantity).toFixed(2)}</p>
              </div>
            </div>
            <hr />
          </div>
          ))}

        </div>
        <div className="w-4/12 bg-white rounded">
          <span className="font-bold ml-4 py-4 text-xl">Resumen de compra</span>
          <hr />
          <div className="flex justify-between px-4 py-4">
            <p className="font-bold text-lg">Total:</p>
            <p className="font-bold">${getTotal()}</p>
          </div>
          <div className="w-full flex justify-center">
            <button className="bg-blue-500 h-12 w-7/12 px-2 hover:bg-blue-700 text-white self-center rounded">
              Finalizar compra
            </button>
          </div>
        </div>
      </div>
      }
      
    </>
  )
}

export default Cart