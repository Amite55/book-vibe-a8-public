import  { useEffect, useState } from 'react';
import { getLocalStorage } from '../../utilyty/localStorage';

const UseLocalStorageData = () => {
    const [localData, setLocalData] = useState([]);

    useEffect( () =>{
        setLocalData(getLocalStorage())
    },[])
    // console.log(localData);
    return {localData};

};

export default UseLocalStorageData;