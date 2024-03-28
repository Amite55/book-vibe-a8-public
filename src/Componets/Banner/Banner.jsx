import { Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="h-[500px] max-w-6xl mx-auto flex justify-around items-center">
            <div>
            <Typography className="mb-8" variant="h1">Books to freshen up <br /> your bookshelf</Typography>
            <Link to='/bookList'>
                 <Button color="blue">View The List</Button>
            </Link>
            </div>
            <div className="sm:w-[220px] lg:">
                 <img src="/public/images/banner.png" alt="" />
            </div>

        </div>
    );
};

export default Banner;