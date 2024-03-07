import { useEffect, useState } from "react";
import axios from "../../Api/index.jsx";
import { useParams } from "react-router-dom";
import MovieCard from "../MovieCard/index.jsx";
import Genres from "../Genres/index.jsx";
import Recommendations from "../../Recommendations/index.jsx";
import Loader from "../../Loader/index.jsx";
import Empty from "../../../Img/Empty.png";

export default function MovieDitail() {
  const [getData, setgetData] = useState(null);
  let { id } = useParams();
  const getApiData = async () => {
    try {
      const res = await axios.get(`/movie/${id}?language=en-US`);
      setgetData(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getApiData();
  }, [id]);
  if (getData === null) {
    return (
      <>
        <Loader />
      </>
    );
  }
  return (
    <>
      <div className="w-screen px-5">
        <div className="flex my-8 w-full px-12 sm:px-0 max-md:px-0 max-md:mt-0">
          <MovieCard
            src={
              getData.poster_path
                ? `https://image.tmdb.org/t/p/original${getData.poster_path}`
                : `${Empty}`
            }
            name={getData.name ? getData.original_name : getData.original_title}
            tagline={getData.tagline}
            rating={getData.vote_average}
            voteCount={getData.vote_average}
            date={
              getData.name
                ? getData.first_air_date.split("-").at(0)
                : getData.release_date.split("-").at(0)
            }
            runtime={getData.runtime}
            language={getData.spoken_languages[0].english_name}
            overview={getData.overview}
            title={getData.vote_count}
            genres={
              <div className="flex gap-2.5 max-md:flex-col sm:gap-1">
                {getData.genres.map((genre, index) => (
                  <div key={`genre-list-${genre.name}-${index}`}>
                    <Genres name={genre.name} />
                  </div>
                ))}
              </div>
            }
            imdbId={getData.imdb_id}
            homepage={getData.homepage}
          />
        </div>
        <>
          <Recommendations />
        </>
      </div>
    </>
  );
}
