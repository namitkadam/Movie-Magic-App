import axios from "../Api/index";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SingleCard from "../SingleCard";
import Loader from "../Loader";
import PagePagination from "../Pagination";

export default function CardList({}) {
  const [getData, setgetData] = useState(null);

  const getApiData = async () => {
    try {
      const res = await axios.get(
        `/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`
      );
      setgetData(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getApiData();
  }, []);
  console.log("CardList", getData);
  if (getData === null) {
    return (
      <>
        <Loader />
      </>
    );
  }

  // console.log(
  //   "CardList---->",
  //   getData.results.map((x) => x.genre_ids.find((x) => x === 28))
  // );

  return (
    <div>
      <div className="grid justify-items-center gap-5 grid-cols-1 xl:grid-cols-4 sm:grid-cols-2 lg:px-10 lg:grid-cols-3 xxl:grid-cols-4 m-auto md:px-9 xl:px-5 max-lg:px-5 max-sm:px-5">
        {getData.results.map((movie, index) => (
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
              al
            />
          </Link>
        ))}
      </div>
      <PagePagination />
    </div>
  );
}
