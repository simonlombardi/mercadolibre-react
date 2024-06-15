import NavBar from '../components/NavBar'
import FetchData from '../components/FetchData'
import ProductCard from '../components/ProductCard';
import { useEffect, useState } from 'react';
import Spinner from '../components/Spinner';
import Arrow from '../components/svgs/Arrow';

function Home() {
	const [inputUser, setInputUser] = useState('boca'),
		[data, setData] = useState(null),
		[isSearch, setIsSearch] = useState(false),
		[offset, setOffset] = useState(0),
		[contadorPagina, setContadorPagina] = useState(1),
		[sort, setSort] = useState('');

	const getInputUser = (inputUser) => {
		setInputUser(inputUser)
		setIsSearch(true)
		setOffset(0)
		setContadorPagina(1)
		setSort('')
	}
	const handleSort = (sortId) => {
		setSort(sortId)
		setOffset(0)
		setContadorPagina(1)
	}
	const handleOffset = (isForward, jumps) => {
		if (isForward) {
			setOffset(offset + jumps)
			setContadorPagina(contadorPagina + 1)
		} else {
			contadorPagina > 1 ? setOffset(offset - jumps) : setOffset(0)
			contadorPagina > 1 ? setContadorPagina(contadorPagina - 1) : setContadorPagina(1)

		}
		location.hash = "#top"
	}

	useEffect(() => {
		if (inputUser == null || inputUser == "") {
		}
		else {
			const getData = async () => {
				try {
					const response = await FetchData(`https://api.mercadolibre.com/sites/MLA/search?q=${inputUser}&limit=${isSearch ? 15 : 5}&offset=${offset}&sort=${sort}`);
					setData(response)
				} catch (error) {
					console.error('Error al obtener los datos:', error);
				}
			}
			getData();
		}
	}, [inputUser, offset, sort]);

	return (
		<>
			<div id='top' className='flex justify-center'>
				<NavBar getInputUser={getInputUser} />
			</div>
			{!isSearch && <img className='' src="/banner.jpg" alt="banner oferta día del padre" />}
			<div className={`flex flex-col items-center ${!isSearch ? 'bg-gradient-to-b from-[#DEF0FF] to-[#EDEDED]' : 'bg-[#EDEDED]'}`}>
				{isSearch ? <><h1 >Resultados de búsqueda.</h1><p className='font-bold'>Filtros</p></> : <h1>Estás en la homepage.</h1>}
				<div className='flex '>
					{isSearch ?
						data.available_sorts.map((sort) => (
							<p key={sort.id} onClick={() => { handleSort(sort.id) }} className=' mx-2 cursor-pointer'>{sort.name}</p>
						))
						: ''}
				</div>
			</div>

			<div className='bg-[#EDEDED] min-h-screen '>
				<div className='flex justify-center'>
					<div className="flex flex-wrap  w-full justify-around py-3 container">
						{data ? data.results.map((product) => (
							<ProductCard key={product.id} product={product} />
						)) :  <Spinner />}
					</div>
				</div>
				<div className='flex justify-center justify-center bg-[#ffe600] py-5'>
					<div onClick={() => handleOffset(false, (isSearch ? 15 : 5))} className=' cursor-pointer rotate-180 my-auto'>
						<Arrow />
					</div>
					<h1 className='mx-2'>Productos de la página {contadorPagina}</h1>
					<div onClick={() => handleOffset(true, (isSearch ? 15 : 5))} className=' cursor-pointer my-auto '>
						<Arrow />
					</div>
				</div>
			</div>
		</>
	)
}

export default Home