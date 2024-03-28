import useLocalWishlist from "./CustomHooks/useLocalWishlist";
import WishlistBooksLocoal from "./WishlistBooksLocoal";


const WishListBook = () => {
    const {wishlistData} = useLocalWishlist();
    // console.log(wishlistData)
    return (
        <div className="space-y-5 max-w-4xl mx-auto">
           {
            wishlistData.map(item => <WishlistBooksLocoal key={item.bookId} item={item} />)
           }
        </div>
    );
};

export default WishListBook;