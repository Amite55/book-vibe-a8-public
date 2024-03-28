import useLocalWishlist from "./CustomHooks/useLocalWishlist";
import WishlistBooksLocoal from "./WishlistBooksLocoal";


const WishListBook = () => {
    const {wishlistData} = useLocalWishlist();
    // console.log(wishlistData)
    return (
        <div>
           {
            wishlistData.map(item => <WishlistBooksLocoal key={item.bookId} item={item} />)
           }
        </div>
    );
};

export default WishListBook;