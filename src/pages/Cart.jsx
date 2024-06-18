import { useState } from "react"
import NavBar from "../components/NavBar"

const Cart = () => {
  const [cartProducts, setCartProducts] = useState(localStorage.getItem("cartProducts") ? JSON.parse(localStorage.getItem("cartProducts")) : [])

  const getTotal = () => {
    if (cartProducts.length > 0) {
      let precios = cartProducts.map((p) => { return p.price * p.selected_quantity })
      const suma = precios.reduce((acumulador, valoractual)=> acumulador+valoractual)
      return suma
    }
  }

  const increaseQuantity = (product) => {
    let cartProductsUpdate = cartProducts.map(p => {
      if (p.id == product.id) {
        return{...p, selected_quantity: product.selected_quantity + 1}
      }
      return p
    })
    setCartProducts(cartProductsUpdate)
  }

  const decreaseQuantity = (product) => {
    let cartProductsUpdate = cartProducts.map(p => {
      if (p.id == product.id) {
        return{...p, selected_quantity: product.selected_quantity - 1}
      }
      return p
    })
    setCartProducts(cartProductsUpdate)
  }

  return (
    <>
      <NavBar />
      {(cartProducts.length == 0) ? <h1 className="text-center">El carrito esta vacio</h1> : 
      <div className="bg-[#EDEDED] h-fit flex justify-around px-28 py-11">
        <div className=" w-7/12 bg-white rounded">
          productos
          <hr />
          {cartProducts.map((p) => (<div className="pt-2" key={p.id}>
            <div className="flex h-28 justify-center items-center flex-wrap">
              <div className=" w-2/12  object-contain"> <img className="m-auto w-min-11 max-h-20 max-w-20" src={p.pictures[0].url} alt="" /></div>
              <p className="w-6/12 truncate">
                {p.title}
              </p>
              <div className="flex justify-center items-center text-center w-2/12">
                <button onClick={() => decreaseQuantity(p)} className="bg-red-500 hover:bg-red-600 text-white flex justify-center items-center font-bold h-6 w-6">-</button>
                <p className="mx-2">{p.selected_quantity}</p>
                <button onClick={() => increaseQuantity(p)} className="bg-green-500 hover:bg-green-600 flex justify-center items-center text-white font-bold h-6 w-6">+</button>
              </div>
              <div className="w-2/12 text-center">
                {/* PONER SI TIENE DESCUENTO */}
                <p>precio: ${p.price}</p>
                <p>total: ${p.price * p.selected_quantity}</p>
              </div>
            </div>
            <hr />
          </div>
          ))}

        </div>
        <div className="w-4/12 bg-white rounded">
          checkout
          <hr />
          <p>total:</p>
          <p>${ getTotal()}</p>
        </div>

      </div>
      }
      
    </>
  )
}

export default Cart