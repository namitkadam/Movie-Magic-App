import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { useState } from "react";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      <div className="xl:hidden flex items-center">
        <button onClick={() => setToggleMenu(!toggleMenu)}>
          <FiMenu className={`w-6 h-6  ${!toggleMenu ? "block" : "hidden"}`} />
        </button>
      </div>

      {/* mobile navigation */}
      <div
        className={`fixed w-[90%] bg-gray-900 overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${
          !toggleMenu ? "h-0" : "h-full"
        }`}
      >
        <button onClick={() => setToggleMenu(toggleMenu)}>
          <GrClose className="w-6 h-6" />
        </button>
        <div className="p-6 w-full ">
          <div className="flex flex-col gap-8 font-bold tracking-wider">
            <a to="/E-Commerce">Home</a>
            <a href="#">Products</a>
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
      </div>
    </>
  );
}
