import NavBar from '../components/NavBar'
import FetchData from '../components/FetchData'
import { useEffect, useState } from 'react';
function Home() {
	const [inputUser, setInputUser] = useState(null)

	const getInputUser = (inputUser) => {
		setInputUser(inputUser)
	}

	useEffect(() => {
		if (inputUser == null || inputUser == "") {
		}
		else{
			const getData = async () => {
			try {
				const response = await FetchData(`https://api.mercadolibre.com/sites/MLA/search?q=${inputUser}/`);
				console.log(response);
			} catch (error) {
				console.error('Error al obtener los datos:', error);
			}
		}
		getData();
		}
	}, [inputUser]);

	return (
		<>
			<div className='flex justify-center'>
				<NavBar getInputUser={getInputUser} />
			</div>
		</>
	)
}

export default Home