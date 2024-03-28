import { useEffect, useState } from "react";
import { getWishlistLoCalStorage } from "../../utilyty/localStorage";


const useLocalWishlist = () => {
    const [wishlistData, setWishtlistData] = useState([]);
    useEffect(()=> {
        setWishtlistData(getWishlistLoCalStorage)
    },[])
    return {wishlistData}
};

export default useLocalWishlist;