import { Link } from "react-router-dom";
import Img from "../../Img/Index";
import StarRating from "../../StarRating";
import "./index.css";
import { FaImdb, FaLink } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
export default function MovieCard(props) {
  const {
    src,
    name,
    tagline,
    rating,
    voteCount,
    language,
    date,
    runtime,
    overview,
    genres,
    title,
    imdbId,
    homepage,
  } = props;
  return (
    <div className="flex justify-around gap-5 max-md:flex-col max-md:w-full">
      <div className="flex justify-center">
        <div className="h-[480px] w-[350px]">
          <Img
            src={`${src}`}
            classValue="rounded-md h-full object-fill w-full"
          />
        </div>
      </div>
      <div className="left_side_card uppercase px-7 flex flex-col max-md:px-1">
        <h1 className="text-4xl font-light text-[#263238] mt-2 max-sm:text-xl">
          {name}
        </h1>
        <h6 className="text-sm font-semibold uppercase text-[#37474f] mt-1   max-sm:text-4xl">
          {tagline}
        </h6>
        <div className="flex justify-between mt-3  max-md:gap-1 max-md:flex-col">
          <div className="flex gap-1.5 items-center mb-4">
            <StarRating rating={rating} title={title} />
            <p className="font-semibold text-xs text-[#37474f]">{voteCount}</p>
          </div>
          <div className="font-normal text-[#b2bdc3] flex">
            <p className="font-extrabold text-[11px]">{language} </p>
            <p
              className={`text-[11px] font-extrabold ${
                runtime ? "block" : "hidden"
              }`}
            >
              / {runtime} min.
            </p>
            <p className="font-extrabold text-[11px]">/ {date}</p>
          </div>
        </div>
        <div className="mt-3.5  mb-6">
          <p className="font-bold text-[11.5px] uppercase mb-2 text-[#263238]">
            The Genres
          </p>
          {genres}
        </div>
        <div className="mt-5 max-md:w-full">
          <p className="font-bold text-[11.5px] uppercase  mb-3.5 text-[#263238] ">
            The Synopsis
          </p>
          <p className="font-medium normal-case text-[12.5px] leading-5 text-[#444444]">
            {overview}
          </p>
        </div>
        <div className="flex mt-20 justify-between">
          <div className="flex gap-4">
            <a target="_blank" href={homepage} className="link">
              <button>
                Website
                <FaLink className="h-3" />
              </button>
            </a>
            <a
              target="_blank"
              href={`https://www.imdb.com/title/${imdbId}/`}
              className="link"
            >
              <button>
                IMDB
                <FaImdb className="h-3" />
              </button>
            </a>
          </div>
          <Link to="/" className="w-24 ">
            <a
              target="_blank"
              href={homepage}
              className="flex justify-center rounded-full items-center gap-1 text-[10px] font-extralight text-white p-2.5 bg-[#263238] hover:bg-transparent hover:text-[#263238] border-[1px] border-[#263238]"
            >
              <IoMdArrowRoundBack />
              Back
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
