import { useState } from "react"
import NavBar from "../components/NavBar"
import PurchaseComplete from "../components/PurchaseComplete"
import EmptyCart from "../components/EmptyCart"

const Cart = () => {
  const [cartProducts, setCartProducts] = useState(localStorage.getItem("cartProducts") ? JSON.parse(localStorage.getItem("cartProducts")) : []),
    [purchaseComplete, setPurchaseComplete] = useState(false)

  const getTotal = () => {
    if (cartProducts.length > 0) {
      let precios = cartProducts.map((p) => { return p.price * p.selected_quantity })
      const suma = precios.reduce((acumulador, valoractual) => acumulador + valoractual)
      return suma
    }
  }

  const saveCartProducts = (cartProductsUpdate) => {
    localStorage.setItem('cartProducts', JSON.stringify(cartProductsUpdate))
  }

  const increaseQuantity = (product) => {
    let cartProductsUpdate = cartProducts.map(p => {
      if (p.id == product.id) {
        return { ...p, selected_quantity: product.selected_quantity + 1 }
      }
      return p
    })
    setCartProducts(cartProductsUpdate)
    saveCartProducts(cartProductsUpdate)
  }

  const decreaseQuantity = (product) => {
    let cartProductsUpdate = cartProducts.map(p => {
      if (p.id == product.id) {
        if (product.selected_quantity == 1) {
        }
        else {
          return { ...p, selected_quantity: product.selected_quantity - 1 }
        }
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

  const purchaseFinish = () => {
    setPurchaseComplete(true)
    setCartProducts([])
    localStorage.clear()
    setTimeout(() => {
      setPurchaseComplete(false)
    }, 2500)

  }

  return (
    <>
      {purchaseComplete ? <PurchaseComplete /> :
        <>
          <NavBar cartProductsQuantity={cartProducts.length} />
          {(cartProducts.length == 0) ? <EmptyCart /> :
            <div className='bg-[#EDEDED] h-fit flex flex-col xl:flex-row justify-around xl:px-28 xl:py-11'>
              {/* Productos */}
              <div className="w-screen xl:w-7/12 bg-white rounded">
                <div className="ml-5 py-3">
                  <p className="font-bold text-xl">Productos ({cartProducts.length})</p>
                </div>

                {/* mapeo de productos */}
                <hr />
                <div className="max-h-[78vh] min-h-28 z-20 overflow-y-auto">
                  {cartProducts.map((p) => (
                    <div className="pt-2 z-10" key={p.id}>
                      <div className="flex h-28 justify-center items-center flex-wrap">
                        <div className=" w-2/12  object-contain"> <img className="m-auto w-min-11 max-h-20 max-w-20" src={p.pictures[0].url} alt="" /></div>
                        <div className="flex w-2/6 truncate flex-col items-start">
                          <p className="w-7/12 md:text-md">
                            {p.title}
                          </p>
                          <button onClick={() => deleteProduct(p)} className="font-semibold text-[#3483fa] hover:underline">Eliminar</button>
                        </div>
                        <div className="flex justify-center items-center text-center w-2/12 ml-4">
                          <button onClick={() => decreaseQuantity(p)} className="bg-red-500 hover:bg-red-600 text-white flex justify-center items-center font-bold h-6 w-6">-</button>
                          <p className="mx-2">{p.selected_quantity}</p>
                          <button onClick={() => increaseQuantity(p)} className="bg-green-500 hover:bg-green-600 flex justify-center items-center text-white font-bold h-6 w-6">+</button>
                        </div>
                        <div className="w-2/12 text-center">
                          {p.original_price ? <div className="flex justify-center"> <p className="text-md line-through font-light inline pr-2">${p.original_price.toLocaleString('es-AR')}</p> <p className="text-[#31B771]">-{Math.round(100 - (p.price * 100 / p.original_price))}% OFF</p></div> : ''}
                          <p className="font-thin md:text-xl">${(p.price.toLocaleString('es-AR'))}</p>
                          {p.selected_quantity > 1 ? <p className="font-thin inline">Total: ${(p.price * p.selected_quantity).toLocaleString('es-AR')}</p> : ''}

                        </div>
                      </div>
                      <hr />
                    </div>
                  ))}
                </div>

              </div>
              {/* Resumen y checkout */}
              <div className="w-screen xl:w-4/12 bg-white rounded">
                <div className="ml-5 py-3">
                  <p className="font-bold text-xl">Resumen de Compra</p>
                </div>
                <hr />
                <div className="flex justify-between px-4 py-4">
                  <p className="font-bold text-lg">Total:</p>
                  <p className="font-bold text-3xl">${getTotal().toLocaleString('es-AR')}</p>
                </div>
                <div className="w-full flex justify-center">
                  <button onClick={purchaseFinish} className="bg-blue-500 m-2 h-12 w-7/12 px-2 hover:bg-blue-700 text-white self-center rounded">
                    Finalizar compra
                  </button>
                </div>
              </div>
            </div>
          }
        </>}
    </>
  )
}

export default Cart