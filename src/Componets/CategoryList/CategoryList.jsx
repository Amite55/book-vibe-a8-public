import BookCard from "../BooksCard/BookCard";
import UseBooksDats from "../CustomHooks/UseBooksDats";


const CategoryList = () => {
    const {data} = UseBooksDats();
    return (
        <div>
            <h1 className="text-center text-5xl font-bold">B<span className="text-green-700">oo</span>ks</h1>


            <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {
                data.map(items => <BookCard key={items.id} items={items}></BookCard>)
            }
        </div>
        </div>
    );
};

export default CategoryList;