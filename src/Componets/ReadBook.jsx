
import UseLocalStorageData from "./CustomHooks/UseLocalStorageData";
import ReadBookSingleItem from "./ReadBookSingleItem";

const ReadBook = () => {

    const { localData } = UseLocalStorageData();
    return (
          <div className="space-y-5 max-w-6xl mx-auto">
                {
                    localData.map(item => <ReadBookSingleItem key={item.bookId} item={item}></ReadBookSingleItem>)
                }
            </div>
    );
};

export default ReadBook;