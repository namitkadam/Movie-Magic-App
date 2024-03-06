import SingleCard from "../SingleCard";

import axios from "../Api/index";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../../components/Loader/index";

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
  console.log(
    "recommendations-->",
    recommendations.results.map((x) => x)
  );
  return (
    <div>
      <div className="mt-20 mb-10">
        <h6 className="text-3xl uppercase font-sans font-thin max-md:text-2xl">
          Recommendations
        </h6>
        <p className="font-sans font-semibold text-lg">Movie</p>
      </div>
      <div className="grid justify-items-center gap-5 grid-cols-1 xl:grid-cols-4 sm:grid-cols-2 lg:px-10 lg:grid-cols-3 xxl:grid-cols-4 m-auto md:px-9 xl:px-5 max-lg:px-5 max-sm:px-5">
        {recommendations.results.map((movie, index) => (
          <Link
            key={movie.id}
            className="max-sm:w-full max-lg:w-full w-full"
            to={`/movie/${movie.id}`}
          >
            <SingleCard
              key={`movie-list-${movie.id}-${index}`}
              name={movie.name ? movie.original_name : movie.original_title}
              overview={movie.overview}
              src={movie.poster_path}
              rating={movie.vote_average}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
