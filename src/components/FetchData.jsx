
const FetchData = async (url) => {
	try {
		let respuesta = await fetch(url)
		let json = await respuesta.json();
		return json

	} catch (error) {
		console.error('error en el FetchData', error);
		throw error;
	}
};

export default FetchData
