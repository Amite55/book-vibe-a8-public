import { useParams } from "react-router-dom";
import UseBooksDats from "../../Componets/CustomHooks/UseBooksDats";
import { useEffect, useState } from "react";

import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { saveLocalStorage, saveLocalStorageWishlist } from "../../utilyty/localStorage";

const BooksDetails = () => {
    const {bookId} = useParams();
   const {data} = UseBooksDats();
   const [book, setSingleBook] = useState([]);
   useEffect(() => {
       if(data){
        const singleBook = data.find(item => item.bookId == bookId)
        setSingleBook(singleBook)
       }
   },[bookId, data])


   const handleReadBtn = () => {
    saveLocalStorage(book)
   }

   const handleWishlistBtn = () => {
      saveLocalStorageWishlist(book)
   }


   const {bookName, author, image, review, category, publisher, totalPages, rating, yearOfPublication, tags} = book || {};

    return (
       
        <Card className="max-w-6xl mx-auto  flex-row justify-between gap-5">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
      >
        <div className="w-full h-full flex justify-center items-center">
        <img
          src={image}
          alt="card-image"
          className="w-56"
        />
        </div>
      </CardHeader>
      <CardBody className="space-y-4">
        <Typography variant="h4" color="blue-gray" className="mb-2">
        {bookName}
        </Typography>
        <p>By : {author}</p>
        <hr />
        <p>{category}</p>
        <hr />
        <Typography color="gray" className="mb-8 font-normal">
        <span className="font-bold">Review : </span> {review}
        </Typography>

        <div className='my-3 flex items-center gap-3'>
            <p className="font-bold">Tag</p>
                <p className=" hover:underline text-[#23BE0A]">
                    #{tags}
                </p>
                <p   className="hover:underline text-[#23BE0A]">
                    #{tags}
                </p>
            </div>
            <hr />
            <div className="space-y-5">
                <p className="flex gap-10">Number of Pages : <span>{totalPages}</span></p>
                <p className="flex gap-10">Publisher : <span>{publisher}</span>:</p>
                <p className="flex gap-10">Year of Publishing : <span>{yearOfPublication}</span></p>
                <p className="flex gap-10">Rating :  <span>{rating}</span></p>
            </div>
                <div className="flex gap-5">
                <Button
                  onClick={handleReadBtn}
                 color="blue">Read</Button>


                <Button
                onClick={handleWishlistBtn}
                 color="blue">Wishlist</Button>
                </div>
      </CardBody>
    </Card>
    );
};

export default BooksDetails;