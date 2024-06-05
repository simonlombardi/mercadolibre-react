import { useState } from "react"
import Carrito from "./svgs/Carrito"
import Lupa from "./svgs/Lupa"

const NavBar = () => {
  const [input, setInput] = useState(null)
  return (
    <div className="flex sm:flex-row items-center flex-col bg-[#ffe600] w-full justify-around py-3">
      <div>
        <a href="/">
          <img src="/mercado-libre-logo-1.png" alt="mercadolibre logo" className="w-[110px]" />
        </a>
      </div>
      <div className="flex flex-row my-3 sm:my-0 w-full lg:w-1/2 sm:w-1/3 bg-white border-1 rounded h-7">
        <form action="" className="flex-grow pl-2">
          <input type="text" placeholder="Buscar productos, marcas y más..." className="w-full" onChange={(e) => {
            setInput(e.target.value)
          }}/>
        </form>
        <p className="text-gray-300 mx-4">|</p>
        <a href="" className="mr-2">
          <Lupa />
        </a>
      </div>
      <div>
        <Carrito />
      </div>
    </div>
  )
}

export default NavBar