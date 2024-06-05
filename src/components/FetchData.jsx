
const FetchData = async (endpoint) => {
	try {
		let respuesta = await fetch(endpoint)
		let json = await respuesta.json();
		return json

	} catch (error) {
		console.error('error en el FetchData', error);
		throw error;
	}
};

export default FetchData
