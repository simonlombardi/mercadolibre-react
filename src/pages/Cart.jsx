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

  return (
    <>
      <NavBar />
      <div className="bg-[#EDEDED] h-fit flex justify-around px-28 py-11">
        <div className=" w-7/12 bg-white rounded">
          render productoooos
          <hr />
          {cartProducts.map((p) => (<div className="pt-2" key={p.id}>
            <div className="flex h-28 flex-wrap">
              <div className=" w-2/12  object-contain"> <img className="m-auto w-min-11 max-h-20 max-w-20" src={p.pictures[0].url} alt="" /></div>
              <p className="w-6/12 truncate">
                {p.title}
              </p>
              <div className=" text-center w-2/12">
                CANTIDAD
                <p>{p.selected_quantity}</p>
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
    </>
  )
}

export default Cart