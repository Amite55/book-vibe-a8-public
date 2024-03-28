import { useState } from "react";

import { Link, Outlet } from "react-router-dom";


const ListedBooks = () => {

    const [tabIndex, setTabindex] = useState(0);


    return (
        <div className="mt-10 max-w-6xl mx-auto">

            <div className="text-center">
            <details className="dropdown">
                <summary className="m-1 btn bg-green-700 text-white">Short By</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li><a>Rating</a></li>
                    <li><a>Number of Page</a></li>
                    <li><a>Publisher Year</a></li>
                </ul>
            </details>
            </div>

            {/* ------Read tab and whitelist tab---------- */}
            <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800 my-8">
                <Link to=''
                    onClick={() => setTabindex(0)}
                    className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0' : 'border-b'} dark:border-gray-600 dark:text-gray-600 : ''}`}>

                    <span>Read Book</span>
                </Link>
                <Link to='wishlist'
                    onClick={() => setTabindex(1)}
                    className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                    <span>Wishlist Book</span>
                </Link>
            </div>

            <Outlet></Outlet>
        </div>
    );
};

export default ListedBooks;