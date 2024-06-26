import NavBar from '../components/NavBar'
import FetchData from '../components/FetchData'
import ProductCard from '../components/ProductCard';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import Spinner from '../components/Spinner';
import Arrow from '../components/svgs/Arrow';

function Results() {
    const { terminoBusqueda } = useParams(),
        [data, setData] = useState(null),
        [offset, setOffset] = useState(0),
        [sort, setSort] = useState(''),
        [contadorPagina, setContadorPagina] = useState(1);

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

    const getData = async () => {
        try {
            const response = await FetchData(`https://api.mercadolibre.com/sites/MLA/search?q=${terminoBusqueda}&limit=15&offset=${offset}&sort=${sort}`);
            setData(response)
        } catch (error) {
            console.error('Error al obtener los datos:', error);
        }
    }

    useEffect(() => {
        if(offset===0 && sort ===''){
            getData()
        }
        setOffset(0);
        setSort('');
        setContadorPagina(1);
    }, [terminoBusqueda])

    useEffect(() => {
        getData();
    }, [offset, sort]);

    return (
        <>
            <div id='top' className='flex justify-center'>
                <NavBar />
            </div>
            <div className='flex pt-2.5 flex-col items-center bg-[#EDEDED]'>
                <h1 >Resultados de búsqueda para "{terminoBusqueda}".</h1>
                {data?.results.length > 0 ? <>
                    <p className='font-bold'>Filtros</p>
                    <div className='flex'>
                        {data?.available_sorts.map((sort) => (
                            <p key={sort.id} onClick={() => { handleSort(sort.id) }} className=' mx-2 cursor-pointer'>{sort.name}</p>
                        ))}
                    </div>
                </>
                    : ''
                }
            </div>

            <div className='bg-[#EDEDED] min-h-screen '>
                <div className='flex justify-center'>
                    <div className="flex flex-wrap  w-full justify-around py-3 container">
                        {data ?
                            (data.results.length > 0 ? data.results.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            )) : <div className='text-2xl'>Lo sentimos, no hay artículos que coincidan con tu búsqueda.</div>)
                            : <Spinner />}
                    </div>
                </div>
                {data?.results.length > 0 ?
                    <div className='flex justify-center bg-[#ffe600] py-5'>
                        <div onClick={() => handleOffset(false, 15)} className=' cursor-pointer rotate-180 my-auto'>
                            <Arrow />
                        </div>
                        <h1 className='mx-2'>Productos de la página {contadorPagina}</h1>
                        <div onClick={() => handleOffset(true, 15)} className=' cursor-pointer my-auto '>
                            <Arrow />
                        </div>
                    </div> : ''
                }
            </div>
        </>
    )
}

export default Results