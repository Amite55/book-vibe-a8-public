import { toast } from "react-toastify";


export const saveLocalStorage = (book) => {
        const saveBooks = JSON.parse(localStorage.getItem("book-card")) || [];
        const existBook = saveBooks.find(item => item.bookId == book.bookId);
        if(!existBook){
            saveBooks.push(book)
            localStorage.setItem("book-card", JSON.stringify(saveBooks))
            toast.success('Book added to Read list')
        }
        else{
            toast.error('You Have Already Read this book')
        }
}

export const getLocalStorage = () =>{
    const bookData = JSON.parse(localStorage.getItem("book-card")) || [];
    return bookData;
}



// wishlist book added a local storage 

export const saveLocalStorageWishlist = (book) =>{
    // console.log(book)
    const saveBooks = JSON.parse(localStorage.getItem("wishlist")) || [];
    const existBook = saveBooks.find(item => item.bookId == book.bookId);
    if(!existBook){
        saveBooks.push(book)
        localStorage.setItem("wishlist", JSON.stringify(saveBooks))
        toast.success('Book added to Read list')
    }
    else{
        toast.error('You have already wishlist this book')
    }
}

export const getWishlistLoCalStorage = () => {
    const bookData = JSON.parse(localStorage.getItem("wishlist")) || [];
    return bookData;
}