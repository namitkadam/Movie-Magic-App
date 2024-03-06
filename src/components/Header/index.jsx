import React, { useState } from "react";
import Search from "../Search";
import Navbar from "../Navbar";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="py-4 px-14 max-lg:px-10 max-md:px-5">
        <div className="flex items-center justify-between h-10">
          <div className="h-auto leading-none xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm">
            <Link to={"/"} className="font-semibold text-xl text-[#263238]">
              Movie Magic
            </Link>
          </div>
          <div className="flex">
            <Search />
          </div>
          <Navbar />
        </div>
      </header>
    </>
  );
}

// export default function Header(params) {
//   const [toggleMenu, setToggleMenu] = useState(false);
//   let classBtn =
//     "rounded-full border-solid border-2 text-[#3B3B3B] border-[#F4DF4EFF] py-1 px-3 hover:bg-[#F4DF4EFF] hover:text-gray-100";
//   return (
//     <>
//       <header>
//         <nav>
//           <div className="max-w-7xl mx-auto bg-white">
//             <div className="flex mx-auto justify-between w-full ">
//               {/* Primary menu and logo */}
//               <div className="flex items-center gap-16 mt-6 mb-2">
//                 {/* logo */}
//                 <div className="container">
//                   // <p>MoivesApp</p>
//                   //{" "}
//                 </div>
//                 {/* primary */}
//               </div>
//               <div className="hidden lg:flex gap-8 items-center text-[#3B3B3B] ">
//                 <Link to="/E-Commerce">Home</Link>
//                 <Link href="#">Products</Link>
//                 <Link href="#">About Us</Link>
//                 <Link href="#">Contact Us</Link>
//               </div>
//               {/* secondary */}
//               <div className="flex gap-6">
//                 <div className="xs:hidden  items-center gap-5 flex-row flex">
//                   {/* <div className="hidden lg:flex items-center gap-2">
//                     <PiMoonLight className="h-6 w-6" />
//                     <IoSunny className="h-6 w-6" />
//                   </div> */}
//                   <div className="flex gap-3 max-md:hidden">
//                     <Link to="/E-Commerce/Cart">
//                       <div className="flex justify-center rounded-full border-solid border-2 border-[#F4DF4EFF] text-[#3B3B3B] py-1 px-3 hover:bg-[#F4DF4EFF] hover:text-gray-100">
//                         <div className="text-2xl">shop</div>
//                         {`Card(01)`}
//                       </div>
//                     </Link>
//                   </div>
//                 </div>
//                 {/* Mobile navigation toggle */}
//                 <div className="lg:hidden flex items-center">
//                   <button onClick={() => setToggleMenu(!toggleMenu)}>
//                     <FiMenu
//                       className={`w-6 h-6 ${!toggleMenu ? "block" : "hidden"}`}
//                     />
//                   </button>
//                   <button onClick={() => setToggleMenu(!toggleMenu)}>
//                     <GrClose
//                       className={`w-6 h-6 ${!toggleMenu ? "hidden" : "block"}`}
//                     />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* mobile navigation */}
//           <div
//             className={`fixed w-[90%] bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${
//               !toggleMenu ? "h-0" : "h-full"
//             }`}
//           >
//             <div className="p-6 w-full ">
//               <div className="flex flex-col gap-8 font-bold tracking-wider">
//                 <Link to="/E-Commerce">Home</Link>
//                 <Link href="#">Products</Link>
//                 <Link href="#">About Us</Link>
//                 <Link href="#">Contact Us</Link>
//               </div>
//             </div>
//           </div>
//         </nav>
//       </header>
//     </>
//   );
// }
