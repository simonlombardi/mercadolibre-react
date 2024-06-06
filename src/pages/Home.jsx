import NavBar from '../components/NavBar'
import FetchData from '../components/FetchData'
import ProductCard from '../components/ProductCard';
import { useEffect, useState } from 'react';

function Home() {
	const [inputUser, setInputUser] = useState('boca')
	const [data, setData] = useState(null)
	const [isSearch, setIsSearch] = useState(false)
	const [offset, setOffset] = useState(0)

	const getInputUser = (inputUser) => {
		setInputUser(inputUser)
		setIsSearch(true)
	}

	useEffect(() => {
		if (inputUser == null || inputUser == "") {
		}
		else {
			const getData = async () => {
				try {
					const response = await FetchData(`https://api.mercadolibre.com/sites/MLA/search?q=${inputUser}&limit=${isSearch ? 15 : 5}&offset=${offset}`);
					setData(response)
				} catch (error) {
					console.error('Error al obtener los datos:', error);
				}
			}
			getData();
		}
	}, [inputUser, offset]);

	return (
		<>
			<div className='flex justify-center'>
				<NavBar getInputUser={getInputUser} />
			</div>
			{!isSearch && <img className='' src="/banner.jpg" alt="banner oferta día del padre" />}
			<div className={`flex flex-col items-center ${!isSearch ? 'bg-gradient-to-b from-[#DEF0FF] to-[#EDEDED]' : 'bg-[#EDEDED]'}`}>
				{isSearch ? <h1>Resultados de búsqueda.</h1> : <h1>Estás en la homepage.</h1>}
				<div className='flex'>
					<button onClick={() => setOffset(offset - 5)} className=' rotate-180 pb-1'>⮞⮞⮞</button>
					<h1>Mover artículos</h1>
					<button onClick={() => setOffset(offset + 5)}> ⮞⮞⮞ </button>
				</div>
			</div>
			<div className='bg-[#EDEDED] min-h-screen flex justify-center'>
				<div className="flex flex-wrap  w-full justify-around py-3 container">
					{data ? data.results.map((product) => (
						<ProductCard key={product.id} product={product} />
					)) : <div>cargando...</div>}
				</div>
			</div>
		</>
	)
}

export default Home