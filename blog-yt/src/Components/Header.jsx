import React from "react";
import logo from "./../assets/Images/logo.png";
import { FaInstagram } from "react-icons/fa6";
const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <img src={logo} className="w-[180px]" />
      <ul className="flex gap-10 md:gap-24">
        <li className="hover:font-bold cursor-pointer">Home</li>
        <li className="hover:font-bold cursor-pointer">About Us</li>
        <li className="hover:font-bold cursor-pointer">Contact Us</li>
      </ul>
      <button className="bg-blue-900 rounded-full text-white flex items-center">
        Follow Me <FaInstagram className="ml-3 text-[20px]" />
      </button>
    </div>
  );
};
export default Header;
