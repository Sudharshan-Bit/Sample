import { useState } from "react";
import { Link } from "react-router-dom";
import useCart from "../Shared/hooks/useCart";

export default function Header() {
  const {count}=useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 bg-white ">
      <nav className="flex justify-between items-center p-4 flex-wrap">
        {/* Logo and Menu Toggle Button */}
        <div className="flex justify-between w-full md:w-auto items-center">
          <h1 className="text-blue-400 font-bold">Logo</h1>
          <button className="md:hidden" onClick={handleMenuToggle}>
            <i className="fa-solid fa-bars"></i> {/* Font Awesome Menu Icon */}
          </button>
        </div>
        <div>
          <h1>Cart  {count}</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-5 ">
          <Link to="/" className="text-gray-500 hover:cursor-pointer">Home</Link>
          <Link to="/menu1" className="text-gray-500 hover:cursor-pointer">Menu One</Link>
          <Link to="/menu2" className="text-gray-500 hover:cursor-pointer">Menu Two</Link>
          <Link to="/blog" className="text-gray-500 hover:cursor-pointer">Blog</Link>
        </div>

        {/* Mobile Menu - Conditionally Rendered */}
        {isMenuOpen && (

          <div className="flex flex-col gap-3 mt-4 text-center w-full justify-center md:hidden">
            <Link to="/" className="text-gray-500 hover:cursor-pointer">Home</Link>
            <Link to="/menu1" className="text-gray-500 hover:cursor-pointer">Menu One</Link>
            <Link to="/menu2" className="text-gray-500 hover:cursor-pointer">Menu Two</Link>
            <Link to="/blog" className="text-gray-500 hover:cursor-pointer">Blog</Link>
          </div>
        )}
      </nav>
    </header>
  );
}
