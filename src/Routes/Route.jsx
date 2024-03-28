import { createBrowserRouter } from "react-router-dom";
import Roote from "../Layout/Roote";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Shared/Home/Home";
import BooksDetails from "../Pages/BooksDetails/BooksDetails";
import ListedBooks from "../Pages/ListedBooks/ListedBooks";
import ReadBook from "../Componets/ReadBook";
import WishListBook from "../Componets/WishListBook";
import PageToRead from "../Pages/PageToRead";
import ContactUs from "../Pages/ContactUs";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Roote/>,
      errorElement: <ErrorPage/>,
      children:[
        {
            path: "/",
            element: <Home></Home>,
        },
        {
          path: "/bookList",
          element: <ListedBooks/>,
          children: [
            {
              index: true,
              element: <ReadBook/>,
            },
            {
              path: 'wishlist',
              element: <WishListBook/>,
            }
          ]
        },
        {
          path: "/pageRead",
          element: <PageToRead></PageToRead>,
        },
        {
          path: '/contact',
          element: <ContactUs/>
        },
        {
          path: "/booksDetails/:bookId",
          element: <BooksDetails/>,
        }
      ]
    },
  ]);

  export default router;