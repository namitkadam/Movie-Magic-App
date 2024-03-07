import axios from "../Api/index";

import { Link, useParams } from "react-router-dom";
import SingleCard from "../SingleCard/index";
import Loader from "../Loader";
import { useState, useEffect } from "react";

export default function DiscoverList() {
  const [discover, setDiscover] = useState(null);
  let { discoverName } = useParams();

  const getApiData = async () => {
    try {
      const res = await axios.get(
        `/movie/${discoverName}?language=en-US&page=1`
      );
      setDiscover(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getApiData();
  }, [discoverName]);

  if (discover === null) {
    return (
      <>
        <Loader />
      </>
    );
  }

  return (
    // <div className="grid justify-items-center gap-5 grid-cols-1 xl:grid-cols-4 sm:grid-cols-2 lg:px-10 lg:grid-cols-3 xxl:grid-cols-4 m-auto md:px-9 xl:px-5 max-lg:px-5 max-sm:px-5">
    <div className="grid justify-items-center gap-5 grid-cols-1 px-4 min-[350px]:grid-cols-2 min-[678px]:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4">
      {discover.results.map((movie, index) => (
        <Link
          key={`movie-list-${movie.id}`}
          className="max-sm:w-full max-lg:w-full w-full"
          to={`/Movie-Magic-App/movie/${movie.id}`}
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
  );
}
