import React, { useState } from "react";
import { Bell, Grid3X3, Users, Menu } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white text-white shadow-md w-full px-4 sm:px-10">
      <div className="flex flex-col sm:flex-row justify-between items-center py-2">
        <div className="flex flex-row items-center gap-2 mb-2 sm:mb-0">
          <Grid3X3 size={40} color="purple" />
          <h1 className="text-3xl sm:text-4xl font-bold text-purple-900">
            wiZ<span className="text-black">e</span>
          </h1>
        </div>
        <div className="flex flex-row items-center gap-4 sm:gap-10">
          <div className="flex flex-row gap-2 sm:gap-5 items-center border border-solid border-purple-400 rounded-full p-2">
            <Bell size={30} color="purple" />
          </div>
          <div className="flex flex-row gap-2 sm:gap-5 items-center border border-solid border-purple-400 rounded-xl px-3">
            <p className="text-black">Account</p>
            <Users size={20} color="purple" />
          </div>
          <div
            className="flex flex-row gap-2 mr-[80px] sm:gap-5 items-center border border-solid border-purple-400 rounded-xl px-3 cursor-pointer"
            onClick={toggleMenu}
          >
            <p className="text-black">Menu</p>
            <Menu size={20} color="purple" />
          </div>
        </div>
      </div>
      {/* Responsive Menu */}
      {isMenuOpen && (
        <div className="sm:hidden absolute top-full left-0 w-full bg-white border-t border-solid border-purple-400 shadow-md">
          <ul className="flex flex-col py-2">
            <li className="px-4 py-2 hover:bg-purple-100 cursor-pointer">
              <p className="text-black">Option 1</p>
            </li>
            <li className="px-4 py-2 hover:bg-purple-100 cursor-pointer">
              <p className="text-black">Option 2</p>
            </li>
            <li className="px-4 py-2 hover:bg-purple-100 cursor-pointer">
              <p className="text-black">Option 3</p>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
