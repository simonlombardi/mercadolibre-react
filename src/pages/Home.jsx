import NavBar from '../components/NavBar'
import FetchData from '../components/FetchData'
import { useEffect, useState } from 'react';
function Home() {
	const [inputUser, setInputUser] = useState('boca')
	const [data, setData] = useState([])
	const [isSearch, setIsSearch] = useState(false)
	const [offset, setOffset] = useState(0)

	const getInputUser = (inputUser) => {
		setInputUser(inputUser)
		setIsSearch(true)
	}

	useEffect(() => {
		if (inputUser == null || inputUser == "") {
		}
		else{
			const getData = async () => {
			try {
				const response = await FetchData(`https://api.mercadolibre.com/sites/MLA/search?q=${inputUser}&limit=${isSearch ? 20 : 5}&offset=${offset}`);
				setData(response)
				console.log(response);
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
				{isSearch ? <h1>lista de productos</h1> : <h1>homepage</h1>}
				<button onClick={() => setOffset(offset+5)}>flechita para la derecha</button>
				{JSON.stringify(data.results)}
		</>
	)
}

export default Home