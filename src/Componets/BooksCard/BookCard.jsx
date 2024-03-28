import PropTypes from 'prop-types';

import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';

const BookCard = ({ items }) => {
    const {bookId, bookName, author, image, rating, category, tags} = items || {};
    // console.log(bookId)
    return (
      <Link to={`/booksDetails/${bookId}`}>
                  <Card className="mt-12 p-6">
            <CardHeader color="" className="relative w-full items-center flex justify-center mx-auto h-56 bg-[#F3F3F3] shadow-none">
                <img
                    src={image}
                    alt="card-image"
                />
            </CardHeader>
            <div className='my-3 flex gap-3'>
                <Button variant="outlined" size='sm' className="rounded-full border-[#23BE0A] text-[#23BE0A]">
                    {tags[1]}
                </Button>
                <Button variant="outlined" size='sm' className="rounded-full border-[#23BE0A] text-[#23BE0A]">
                    {tags[0]}
                </Button>
            </div>
            <p>By: {author}</p>
            <hr className='mt-5' />
            <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                    {bookName}
                </Typography>
            </CardBody>
            <div className='flex justify-between'>
                <p>{category}</p>
                <p className='flex gap-2'>{rating}

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>

                </p>
            </div>

        </Card>
      </Link>
    );
};

BookCard.propTypes = {
    items: PropTypes.object
  };

export default BookCard;


