import CopyRight from "../CopyRight";
import Discover from "../Discover";
import Genres from "../Genres";
import Movie from "../../Img/Movie.png";
import { Link } from "react-router-dom";

export default function LeftSideNavbar(params) {
  return (
    <div className=" w-[20%] max-lg:hidden border-r-2 border-gray-200">
      <div className="sticky top-0">
        <div className="flex flex-col gap-4 px-4">
          <Link to="/Movie-Magic-App" className="">
            <img src={Movie} />
          </Link>
          <Discover />
          <Genres />
        </div>
        <CopyRight />
      </div>
    </div>
  );
}
