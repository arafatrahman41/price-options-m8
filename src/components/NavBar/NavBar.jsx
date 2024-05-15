import PropTypes from "prop-types";
import Link from "../Link/Link";
import { MdOutlineMenu } from "react-icons/md";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    { id: 1, name: "Home", path: "/home" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Products", path: "/products" },
    { id: 4, name: "Services", path: "/services" },
    { id: 5, name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="p-4">
      <div onClick={() => setOpen(!open)} className="lg:hidden text-2xl">
        {open === true ? <IoClose /> : <MdOutlineMenu />}
      </div>
      <ul className={`lg:flex duration-1000 gap-10 absolute lg:static bg-gray-300 lg:bg-transparent p-6 ${open ? 'left-5' : '-left-60'}`}> 
      {/*
       ${open ? '' : 'hidden'}
       ${open ? 'top-10' : '-top-60'}
        */}
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

NavBar.propTypes = {};

export default NavBar;
