import NavBar from '../components/NavBar'
import FetchData from '../components/FetchData'
function Home() {

	//no dar bola a este use effect que no anda todavía :P
	useEffect(() => {
		const getData = async () => {
			try {
				const dataPrueba = await FetchData("https://api.mercadolibre.com/sites/MLA/search?q=prueba/");
				console.log(dataPrueba)
			} catch (error) {
				console.error('Error al obtener los datos:', error);
			}
		}
		getData();
	}, []);

	return (
		<>
			<div className='flex justify-center'>
				<NavBar />
			</div>
		</>
	)
}

export default Home