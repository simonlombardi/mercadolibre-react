import NavBar from '../components/NavBar'
import FetchData from '../components/FetchData'
import ProductCard from '../components/ProductCard';
import { useEffect, useState } from 'react';
import Spinner from '../components/Spinner';
import Arrow from '../components/svgs/Arrow';

function Home() {
	const [data, setData] = useState(null),
		[offset, setOffset] = useState(0),
		[contadorPagina, setContadorPagina] = useState(1);

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
		const getData = async () => {
			try {
				const response = await FetchData(`https://api.mercadolibre.com/sites/MLA/search?q=Velez&limit=4&offset=${offset}`);
				setData(response)
			} catch (error) {
				console.error('Error al obtener los datos:', error);
			}
		}
		getData();
	}, [offset]);

	return (
		<>
			<div id='top' className='flex justify-center'>
				<NavBar />
			</div>
			<img src="/banner.jpg" alt="banner oferta día del padre" />
			<div className={'flex flex-col items-center bg-gradient-to-b from-[#DEF0FF] to-[#EDEDED]'}>
				<h1 className='text-2xl'>¡Bienvenido a Mercado Libre!</h1>
				<h1 className='text-xl'>Mostrando productos de 'Velez'</h1>
			</div>

			<div className='bg-[#EDEDED]'>
				<div className='flex justify-center'>
					<div className="flex flex-wrap  w-full justify-around py-3 container">
						{data ? data.results.map((product) => (
							<ProductCard key={product.id} product={product} />
						)) : <Spinner />}
					</div>
				</div>
				<div className='flex justify-center bg-[#ffe600] py-5'>
					<div onClick={() => handleOffset(false, 4)} className=' cursor-pointer rotate-180 my-auto'>
						<Arrow />
					</div>
					<h1 className='mx-2'>Productos de la página {contadorPagina}</h1>
					<div onClick={() => handleOffset(true, 4)} className='cursor-pointer my-auto '>
						<Arrow />
					</div>
				</div>
			</div>
		</>
	)
}

export default Home