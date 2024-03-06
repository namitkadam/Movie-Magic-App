import { FaHeart, FaPlayCircle } from "react-icons/fa";
import { IoStatsChart, IoCalendar } from "react-icons/io5";

import { Link } from "react-router-dom";
import List from "../List";

export default function Discover({ wrapperClass }) {
  return (
    <div className={wrapperClass}>
      <div className="mb-1.5 text-[10px] font-bold uppercase text-[#263238]">
        Discover
      </div>
      <Link to={"discover/now_playing"}>
        <List name="Now Playing" icon={<FaPlayCircle className="h-3" />} />
      </Link>
      <Link to={"discover/popular"}>
        <List name="Popular" icon={<FaHeart className="h-3" />} />
      </Link>
      <Link to={"discover/top_rated"}>
        <List name="Top Rated" icon={<IoStatsChart className="h-3" />} />
      </Link>
      <Link to={"discover/upcoming"}>
        <List name="Upcoming" icon={<IoCalendar className="h-3" />} />
      </Link>
    </div>
  );
}
