import React from "react";



const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center justify-center gap-2 ">
        <img src="src\assets\logo.jpeg" alt="logo" height="40px" width="40px"/>Sorcerer
                  <button className="bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl p-1">Sorcerer is Hiring</button>
      </div>
      <div>
        <ul className="hidden lg:flex justify-between items-center text-gray-400 gap-6">
          <li><a href="#">Plans</a></li>
          <li><a href="#">Find Domains</a></li>
          <li><a href="#">Why Sorcerer?</a></li>
        </ul>
        <div className="hidden lg:flex justify-center items-center gap-6">
          <a href="#" className="text-gray-400">Sign In</a>
          <button>Join Us </button>
          </div>
        <div className="lg:hidden">
      
        </div>
      </div>
    </div>
  );
};

export default Header;
