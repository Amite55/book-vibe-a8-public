

import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";


const NavBar = () => {

    const [openNav, setOpenNav] = React.useState(false);
 
    React.useEffect(() => {
      window.addEventListener(
        "resize",
        () => window.innerWidth >= 960 && setOpenNav(false),
      );
    }, []);
   
    const navList = (
      <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <NavLink to='/' className={({isActive}) => isActive ? 'border-b border-t border-green-500 font-bold px-2 py-1 rounded-sm' : 'flex items-center hover:bg-gray-500 rounded-sm px-2 py-1'}>
          Home
          </NavLink>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <NavLink to='/bookList' className= {({isActive}) => isActive ? 'border-b border-t border-green-500 font-bold px-2 py-1 rounded-sm' : 'flex items-center hover:bg-gray-500 rounded-sm px-2 py-1'}>
          Listed Books
          </NavLink >
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <NavLink to='/pageRead' className= {({isActive}) => isActive ? 'border-b border-t border-green-500 font-bold px-2 py-1 rounded-sm' : 'flex items-center hover:bg-gray-500 rounded-sm px-2 py-1'}>
          Pages to Read
          </NavLink>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <NavLink to='/contact' className= {({isActive}) => isActive ? 'border-b border-t border-green-500 font-bold px-2 py-1 rounded-sm' : 'flex items-center hover:bg-gray-500 rounded-sm px-2 py-1'}>
          Contact Us
          </NavLink>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <NavLink to='/blogs' className= {({isActive}) => isActive ? 'border-b border-t border-green-500 font-bold px-2 py-1 rounded-sm' : 'flex items-center hover:bg-gray-500 rounded-sm px-2 py-1'}>
          Blogs
          </NavLink>
        </Typography>
      </ul>
    );

    return (
        <div>
        <Navbar className=" top-0 z-10 h-max max-w-6xl rounded-none mx-auto py-2 lg:px-8 lg:py-4 shadow-none">
          <div className="flex items-center justify-between text-blue-gray-900 ">
            <Typography
              as="a"
              href="#"
              className="mr-4 cursor-pointer hover:bg-gray-500 p-2 font-bold text-2xl rounded-lg border-t border-b border-green-600"
            >
             Book Vibe
            </Typography>
            <div className="flex items-center gap-4">
              <div className="mr-4 hidden lg:block">{navList}</div>
              <div className="flex items-center gap-x-1">
                <Button
                  variant="text"
                  size="sm"
                  className="hidden lg:inline-block"
                >
                  <span>Sign In</span>
                </Button>
                <Button
                  variant="gradient"
                  size="sm"
                  className="hidden lg:inline-block"
                >
                  <span>Sign Up</span>
                </Button>
              </div>
              <IconButton
                variant="text"
                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
              >
                {openNav ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </IconButton>
            </div>
          </div>
          <MobileNav open={openNav}>
            {navList}
            <div className="flex items-center gap-x-1">
              <Button fullWidth variant="text" size="sm" className="">
                <span>Log In</span>
              </Button>
              <Button fullWidth variant="gradient" size="sm" className="">
                <span>Sign in</span>
              </Button>
            </div>
          </MobileNav>
        </Navbar>
      </div>
    );
};

export default NavBar;