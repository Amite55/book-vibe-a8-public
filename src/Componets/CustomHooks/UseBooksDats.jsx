import { useEffect, useState } from 'react';

const UseBooksDats = () => {
    const [data, setData] = useState([]);

    useEffect( () => {
        const fetchData = async () => {
            const response = await fetch("/public/data.json")
            const data = await response.json()
            setData(data)
        }
        fetchData()
    },[])
    return {data};
};

export default UseBooksDats;