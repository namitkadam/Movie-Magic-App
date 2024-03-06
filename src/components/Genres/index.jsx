import List from "../List";
import { CiPaperplane } from "react-icons/ci";
import { FaCircleDot } from "react-icons/fa6";

import axios from "../Api/index";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../Loader/index";

export default function GenreList() {
  const [genres, setGenres] = useState(null);

  const getApiData = async () => {
    try {
      const res = await axios.get(`genre/movie/list?language=en`);
      setGenres(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getApiData();
  }, []);
  if (genres === null) {
    return (
      <>
        <Loader />
      </>
    );
  }
  // console.log("Genres---->", genres.genres);
  return (
    <div>
      <div className="mb-1.5 text-[10px] font-bold uppercase text-[#263238]">
        Genres
      </div>
      <div>
        {genres.genres.map((genre, index) => (
          <Link
            key={`movie-list-${genre.id}-${index}`}
            to={`genres/${genre.name}/${genre.id}`}
          >
            <List
              // key={`${genre.id}-${index}`}
              name={genre.name}
              icon={<FaCircleDot className="h-2.5" />}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
