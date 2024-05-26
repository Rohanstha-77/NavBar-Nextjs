'use client';
import { useState, useRef } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import Solution from './submenu/Solution';
import Product from './submenu/Product';

const Navbar = () => {
  const [hover, setHover] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setHover(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHover(false);
    }, 300);
  };

  const [product,showProduct]= useState(false)
  const timeout = useRef(null);


  const productMouseEnter = () => {
    clearTimeout(timeout.current);
    showProduct(true);
  };

  const productMouseLeave = () => {
    timeout.current = setTimeout(() => {
      showProduct(false);
    }, 300);
  };
  return (
    <header className="bg-white shadow-md">
      <div className="flex justify-between items-center mx-24" style={{ height: "95px" }}>
        <div>
          <img src="./img/logo-hajir.png" alt="Logo" className="h-16" />
        </div>
        <ul className="flex justify-around items-center relative">
          <li className="ml-6 text-xl" onMouseEnter={productMouseEnter} onMouseLeave={productMouseLeave}>Product
            <IoIosArrowDown className={`absolute left-[100px] top-1 transform transition-all duration-500 ${product ? 'rotate-0' : 'rotate-180'}`}
            />
            {product && <Product onMouseEnter={productMouseEnter} onMouseLeave={productMouseLeave} />}
          </li>

          <li
            className="relative ml-7 text-xl"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Solution
            <IoIosArrowDown
              className={`absolute left-20 top-1 transform transition-all duration-500 ${hover ? 'rotate-0' : 'rotate-180'}`}
            />
            {hover && <Solution onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />}
          </li>
          <li className="ml-9 text-xl">Pricing</li>
        </ul>
        <div>
          <button className="mr-6">Log in</button>
          <button className="border rounded-md px-6 py-2 bg-blue-500 text-white">Get Started</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
