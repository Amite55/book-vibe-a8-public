import PropTypes from 'prop-types';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";

import { MdFindInPage } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";


const ReadBookSingleItem = ({ item }) => {

    
    const { bookName, image, author, totalPages, rating, category, publisher, yearOfPublication, tags } = item;
    return (
        <Card className="w-full flex-row ">
            <CardHeader
                shadow={false}
                floated={false}
                className=" rounded-r-none"
            >
                <div className="w-[200px] h-full flex justify-center items-center">
                    <img
                        src={image}
                        alt="card-image"
                        className=""
                    />
                </div>
            </CardHeader>
            <CardBody className="space-y-4">
                <Typography variant="h4" color="blue-gray" className="mb-2">
                    {bookName}
                </Typography>
                <p>By : {author}</p>
                <div className="flex gap-8">
                    <p><span className="font-bold">Tag: </span><span className="text-green-600 underline cursor-pointer ">#{tags[1]}   #{tags[0]}</span></p>
                     <p className="font-bold">Year Of Publishing : {yearOfPublication}</p>
                </div>
                <div className="flex gap-10">
                    <p className="flex gap-1"> <MdManageAccounts />Publisher : {publisher}</p>
                    <p className="flex gap-1"><MdFindInPage /> Page : {totalPages}</p>
                </div>
                <hr />
                <div className="flex gap-4">
                    <p className="p-1 rounded-full bg-light-green-100 text-green-700">Category : {category}</p>
                    <p className="p-1 rounded-full bg-orange-100  text-orange-800">Rating : {rating}</p>
                    <button className="bg-green-800 text-white rounded-full p-1">view Details</button>
                </div>
            </CardBody>
        </Card>
    );
};

ReadBookSingleItem.propTypes = {
    item: PropTypes.object
  };

export default ReadBookSingleItem;