import SingleCard from "../SingleCard";

import axios from "../Api/index";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../../components/Loader/index";

import NoResultsFound from "../NoResultsFound";
import Empty from "../../Img/Empty.png";

export default function Recommendations(params) {
  const [recommendations, setRecommendations] = useState(null);
  let { id } = useParams();

  const getApiData = async () => {
    try {
      const res = await axios.get(
        `/movie/${id}/recommendations?language=en-US&page=1`
      );
      setRecommendations(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getApiData();
  }, []);

  if (recommendations === null) {
    return (
      <>
        <Loader />
      </>
    );
  }

  return (
    <>
      <div className="mt-20 mb-10 md:mt-10 md:mb-5 max-sm:mt-1 sm:mt-3">
        <h6 className="text-[22px] uppercase font-sans font-thin max-md:text-2xl text-[#263238]">
          Recommended
        </h6>
        <p className="font-sans font-bold uppercase text-[12px] text-[#37474f]">
          Movie
        </p>
      </div>
      {recommendations.results.length === 0 ? (
        <NoResultsFound error={"There are no recommended movies..."} />
      ) : (
        // <div className="grid justify-items-center gap-5 grid-cols-1 xl:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:px-0 lg:grid-cols-4 xxl:grid-cols-4 m-auto md:px-0 xl:px-5 max-lg:px-5 max-sm:px-0 sm:p-0">
        <div className="grid justify-items-center gap-5 grid-cols-1 px-4 min-[350px]:grid-cols-2 min-[678px]:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 max-sm:px-0 sm:p-0">
          {recommendations.results.map((movie, index) => (
            <Link
              key={movie.id}
              className="max-sm:w-full max-lg:w-full w-full"
              to={`/Movie-Magic-App/movie/${movie.id}`}
            >
              <SingleCard
                key={`movie-list-${movie.id}-${index}`}
                name={movie.name ? movie.original_name : movie.original_title}
                overview={movie.overview}
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
                    : `${Empty}`
                }
                rating={movie.vote_average}
              />
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
