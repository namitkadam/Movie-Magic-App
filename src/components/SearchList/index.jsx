import axios from "../Api/index";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../Loader";
// import { Link } from "react-router-dom";
import SingleCard from "../SingleCard";

export default function SearchList(params) {
  const [searchData, setSearchData] = useState(null);

  const search = useParams();
  const getSearchApi = async () => {
    try {
      const res = await axios.get(
        `search/movie?query=${search.search}&include_adult=false&language=en-US&page=1`
      );
      setSearchData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSearchApi();
  }, [search]);

  console.log("searchData", searchData);

  if (searchData === null) {
    return (
      <>
        <Loader />;
      </>
    );
  }
  return (
    <div className="grid justify-items-center w-screen gap-5 grid-cols-1 xl:grid-cols-4 sm:grid-cols-2 lg:px-10 lg:grid-cols-3 xxl:grid-cols-4 m-auto md:px-9 xl:px-5 max-lg:px-5 max-sm:px-5">
      {searchData.results.map((movie, index) => (
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
  );
}
