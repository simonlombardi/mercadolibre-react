
const Select = ({ getQuantity }) => {

    const handleClick = (e) => {
        getQuantity(e.target.value)
    }

    return(
        <>
            <form className=" items-center flex flex-row justify-start ">
            <label htmlFor="quantity" class="font-medium text-md pr-2">Cantidad:</label>
            <select id="quantity" onClick={handleClick} class="bg-green-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#3483fa] dark:border-[#3483fa] dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option defaultValue={1} value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
            </select>
            </form>
        </>
    )
}

export default Select