import { useState } from "react"
import IconoCarrito from "./svgs/IconoCarrito"
import Lupa from "./svgs/Lupa"

const NavBar = ({ getInputUser }) => {
  const [input, setInput] = useState(null),
    [isFocused, setIsFocused] = useState(false);

  // agrego states para el outline de la barra de búsqueda
  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleInput = (e) => {
    setInput(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    getInputUser(input)
  }

  return (
    <div className="flex sm:flex-row items-center flex-col bg-[#ffe600] w-full justify-around py-3">
      <div>
        <a href="/">
          <img src="/mercado-libre-logo-1.png" alt="mercadolibre logo" className="w-[110px]" />
        </a>
      </div>
      <div className="my-2 sm:my-0 w-5/6 lg:w-1/2 sm:w-1/3 ">
        <form action="" onSubmit={handleSubmit} className={`flex items-center py-2 bg-white border-1 rounded-sm h-10 shadow-md  ${isFocused ? ' outline outline-1 outline-blue-500' : ''}`}>
          <input type="text" required
            className="w-full pl-3 placeholder-gray-300 focus:outline-none"
            placeholder="Buscar productos, marcas y más..."
            onFocus={handleFocus} onBlur={handleBlur}
            onChange={(e) => {
              handleInput(e)
            }} />
          <p className="text-gray-300 mx-4">|</p>
          <a href="" onClick={handleSubmit} className="mr-2">
            <Lupa />
          </a>
        </form>
      </div>
      <div>
        <a href="/carrito">
          <IconoCarrito />
        </a>
      </div>
    </div>
  )
}

export default NavBar