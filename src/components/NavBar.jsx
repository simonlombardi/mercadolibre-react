import { useState } from "react"
import Carrito from "./svgs/Carrito"
import Lupa from "./svgs/Lupa"

const NavBar = () => {
  const [input, setInput] = useState(null)
  return (
    <div className="flex bg-[#ffe600] w-full justify-around pt-3">
      <div>
        <img src="/pngwing.com.png" alt="mercadolibre logo" className="w-[80px]" />
      </div>
      <div className="flex flex-row w-1/4 bg-white border-1 rounded h-7">
        <form action="" className="flex-grow">
          <input type="text" placeholder="Buscar productos, marcas y más..." className="w-full" onChange={(e) => {
            setInput(e.target.value)
          }}/>
        </form>
        <Lupa />
      </div>
      <div>
        <Carrito />
      </div>
    </div>
  )
}

export default NavBar