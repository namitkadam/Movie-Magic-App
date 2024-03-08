import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { useState } from "react";
import Discover from "../Discover";
import GenreList from "../Genres";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      <div className="lg:hidden flex items-center">
        <button onClick={() => setToggleMenu(!toggleMenu)}>
          <FiMenu className={`w-6 h-6  ${!toggleMenu ? "block" : "hidden"}`} />
        </button>
      </div>

      {/* mobile navigation */}
      <div
        className={` w-screen absolute left-0 z-10 bg-gray-900 text-white overflow-hidden flex flex-col lg:hidden  origin-top top-0 duration-700 ${
          !toggleMenu ? "h-0" : "h-full"
        }`}
      >
        <button
          className="flex justify-end m-5"
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <GrClose className="w-6 h-6" />
        </button>
        <div className="px-5 w-full ">
          <div className="flex flex-col gap-2  font-bold tracking-wider">
            <Discover />
            <GenreList />
          </div>
        </div>
      </div>
    </>
  );
}
