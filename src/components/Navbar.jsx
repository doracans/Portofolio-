import React, { useEffect, useState } from 'react';
import { MENU_LINKS } from '../utils/data';
import LOGO from "../assets/images/logo.png";
import { Link } from 'react-scroll';
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className='container mx-auto sticky top-5 z-10'>
      <div className="flex items-center justify-between rounded-full bg-white/25 border border-[#D9D6F8] backdrop-blur-lg m-5 p-3 md:p-0">
        <img className="h-14 ml-6 -mb-1" src={LOGO} alt="Logo" />
        <button className="block md:hidden text-[#333] mr-6 focus:outline-none" onClick={toggleMenu}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
        <ul className={`menu-wrapper ${isOpen ? "flex" : "hidden"} md:flex`}>
          {MENU_LINKS.map((item) => (
            <li key={item.id}>
              <Link activeClass="active" to={item.to} smooth spy offset={item.offset} className="menu-item" onClick={() => setIsOpen(false)}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          to="contact"
          smooth
          spy
          offset={-60}
          className="hidden md:flex items-center justify-center h-12 text-[15px] font-medium text-white bg-gradient-primary rounded-full px-9 transition-transform duration-300 ease-in-out hover:scale-105"
        >
          Contact Me
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;
