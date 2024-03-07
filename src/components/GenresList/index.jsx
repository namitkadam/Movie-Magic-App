import axios from "../Api/index";

import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import SingleCard from "../SingleCard";
import Loader from "../Loader";
import Empty from "../../Img/Empty.png";

export default function GenresList() {
  const [genres, setGenres] = useState(null);
  let { id } = useParams();

  const getApiData = async () => {
    try {
      const res = await axios.get(
        `/discover/movie?include_adult=false&include_video=false&language=en-US&with_genres=${id}&sort_by=popularity.desc`
      );
      setGenres(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getApiData();
  }, [id]);

  if (genres === null) {
    return <Loader />;
  }

  return (
    // <div className="grid justify-items-center gap-5 grid-cols-1 xl:grid-cols-4 sm:grid-cols-2 lg:px-10 lg:grid-cols-3 xxl:grid-cols-4 m-auto md:px-9 xl:px-5 max-lg:px-5 max-sm:px-5">
    <div className="grid justify-items-center gap-5 grid-cols-1 px-4 min-[350px]:grid-cols-2 min-[678px]:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4">
      {genres.results.map((movie, index) => (
        <Link
          key={`movie-list-${movie.id}-${index}`}
          className="max-sm:w-full max-lg:w-full w-full"
          to={`/Movie-Magic-App/movie/${movie.id}`}
        >
          <SingleCard
            // key={`movie-list-${movie.id}-${index}`}
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
  );
}
