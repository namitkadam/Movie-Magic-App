import { useState, useEffect } from "react";
import Loader from "../Loader";
import { useParams } from "react-router-dom";
import axios from "../../components/Api/index.jsx";
import person from "../../Img/Person.jpg";
import "../../components/CastItem/index.css";

export default function CastItem() {
  const [carousel, setCarousel] = useState(null);

  let { id } = useParams();
  console.log(id);

  const getApiData = async () => {
    try {
      const res = await axios.get(`/movie/${id}/credits?language=en-US`);
      setCarousel(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getApiData();
  }, []);
  if (carousel === null) {
    return (
      <>
        <Loader />
      </>
    );
  }

  return (
    <div>
      <div className="font-bold text-[12.5px] uppercase mt-4 mb-5 sm:mb-1 text-[#263238]">
        The Cast
      </div>
      <div className="w-full ">
        <div className="flex overflow-x-hidden scroll-smooth">
          {carousel.cast.map((cast, index) => (
            <div className="" data-carousel-item>
              <img
                src={
                  cast.profile_path
                    ? `https://image.tmdb.org/t/p/original${cast.profile_path}`
                    : `${person}`
                }
                className="object-cover rounded-full h-16 w-16"
                alt="..."
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
