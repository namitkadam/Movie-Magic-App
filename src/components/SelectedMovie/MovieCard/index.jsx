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
    <div className="flex justify-around w-full gap-5 max-sm:flex-col max-md:w-full md:gap-1">
      <div className="flex justify-center">
        <div className="h-[480px] w-[350px] md:w-80 max-md:h-auto sm:w-64">
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
        <h6 className="text-sm font-semibold uppercase text-[#37474f] mt-1 md:mt-2  max-sm:text-xs ">
          {tagline}
        </h6>
        <div className="flex justify-between my-3  max-md:gap-1.5 md:mt-2 max-md:flex-col sm:my-1.5">
          <div className="flex gap-1.5 items-center">
            <StarRating rating={rating} title={title} />
            <p className="font-semibold text-xs text-[#37474f]">{voteCount}</p>
          </div>
          <div className="font-normal text-[#b2bdc3] flex">
            <p className="font-extrabold text-[11px] max-md:font-bold max-md:text[10px]">
              {language}{" "}
            </p>
            <p
              className={`text-[11px] font-extrabold max-md:font-bold max-md:text[10px] ${
                runtime ? "block" : "hidden"
              }`}
            >
              / {runtime} min.
            </p>
            <p className="font-extrabold text-[11px] max-md:font-bold max-md:text[10px]">
              / {date}
            </p>
          </div>
        </div>
        <div className="mt-3.5 mb-6 md:mb-2 md:mt-2 sm:my-1 ">
          <p className="font-bold text-[11.5px] uppercase mb-2 sm:mb-1 text-[#263238]">
            The Genres
          </p>
          {genres}
        </div>
        <div className="mt-5 max-md:w-full  md:mt-2 sm:mt-2">
          <p className="font-bold text-[11.5px] uppercase  mb-3.5 sm:mb-1 text-[#263238] ">
            The Synopsis
          </p>
          <p className="font-medium normal-case text-[12.5px] leading-5 text-[#444444]">
            {overview}
          </p>
        </div>
        <div className="flex mt-20 gap-1 justify-between max-sm:flex-col md:mt-9 max-md:gap-3 sm:mt-4">
          <div className="flex gap-4 md:gap-1">
            <div>
              <a target="_blank" href={homepage} className="link">
                <button className="transition duration-500 hover:-translate-y-1">
                  Website
                  <FaLink className="h-3" />
                </button>
              </a>
            </div>
            <div>
              <a
                target="_blank"
                href={`https://www.imdb.com/title/${imdbId}/`}
                className="link"
              >
                <button className="transition duration-500 hover:-translate-y-1">
                  IMDB
                  <FaImdb className="h-3" />
                </button>
              </a>
            </div>
          </div>
          <Link to="/Movie-Magic-App" className="w-24 ">
            <div
              target="_blank"
              href={homepage}
              className="flex justify-center rounded-full items-center gap-1 text-[10px] font-extralight text-white p-2.5 bg-[#263238] hover:bg-transparent hover:text-[#263238] border-[1px] border-[#263238] transition duration-500 hover:-translate-y-1"
            >
              <IoMdArrowRoundBack />
              Back
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
