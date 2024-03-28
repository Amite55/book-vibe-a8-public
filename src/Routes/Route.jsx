import { createBrowserRouter } from "react-router-dom";
import Roote from "../Layout/Roote";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Shared/Home/Home";
import BooksDetails from "../Pages/BooksDetails/BooksDetails";
import ListedBooks from "../Pages/ListedBooks/ListedBooks";
import ReadBook from "../Componets/ReadBook";
import WishListBook from "../Componets/WishListBook";

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
          element: <h1>Page to read</h1>
        },
        {
          path: "/booksDetails/:bookId",
          element: <BooksDetails/>,
        }
      ]
    },
  ]);

  export default router;