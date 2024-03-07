import { FaHome } from "react-icons/fa";
import EmptyPana from "../../Img/Empty-pana.png";
import { Link } from "react-router-dom";

export default function NoResultsFound({ error }) {
  return (
    <div className="flex flex-col items-center mb-14">
      <div>
        <h6 className="text-center text-3xl font-light text-[#37474f] mb-1.5">
          Sorry!
        </h6>
        <p className="text-base font-semibold text-[#37474f]">{error}</p>
      </div>
      <div className="w-1/3">
        <img src={EmptyPana} alt="" />
      </div>
      <Link to="/Movie-Magic-App" className="w-24 ">
        <div
          target="_blank"
          className="flex justify-center rounded-full items-center gap-1 text-[10px] font-extralight text-white p-2.5 bg-[#263238] hover:bg-transparent hover:text-[#263238] border-[1px] border-[#263238] transition duration-500 hover:-translate-y-1 "
        >
          <FaHome />
          Home
        </div>
      </Link>
    </div>
  );
}
