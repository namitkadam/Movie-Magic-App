import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { useState } from "react";
import Discover from "../Discover";
import GenreList from "../Genres";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      <div className="lg:hidden flex items-center">
        <button onClick={() => setToggleMenu(!toggleMenu)}>
          <FiMenu
            className={`w-6 h-6 text-white  ${
              !toggleMenu ? "block" : "hidden"
            }`}
          />
        </button>
      </div>

      {/* mobile navigation */}
      <div
        className={`h-full fixed left-0 z-10 bg-[#263238] text-white overflow-hidden flex flex-col lg:hidden  origin-top top-0 duration-700 ${
          !toggleMenu ? "w-0" : "w-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-2.5">
          <div className="h-auto leading-none xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm">
            <Link
              to="/Movie-Magic-App"
              className="font-semibold text-xl text-white"
            >
              Movie Magic
            </Link>
          </div>
          <button
            className="flex justify-end "
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <GrClose className="w-6 h-6" />
          </button>
        </div>
        <div className="px-5 w-full ">
          <div className="flex flex-col gap-2 items-center text-center font-bold tracking-wider">
            <Discover />
            <GenreList />
          </div>
        </div>
      </div>
    </>
  );
}
