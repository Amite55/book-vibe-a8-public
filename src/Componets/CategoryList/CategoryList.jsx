import BookCard from "../BooksCard/BookCard";
import UseBooksDats from "../CustomHooks/UseBooksDats";


const CategoryList = () => {
    const {data} = UseBooksDats();
    return (
        <div className="grid grid-cols-3 gap-4">
            {
                data.map(items => <BookCard key={items.id} items={items}></BookCard>)
            }
        </div>
    );
};

export default CategoryList;