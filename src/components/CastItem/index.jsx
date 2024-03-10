import { useState, useEffect } from "react";
import Loader from "../Loader";
import { useParams } from "react-router-dom";
import axios from "../../components/Api/index.jsx";
import person from "../../Img/Person.jpg";
import "../../components/CastItem/index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
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

  var settings = {
    // className: "",
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="font-bold text-[12.5px] uppercase mt-4 mb-5 sm:mb-1 text-[#263238]">
        The Cast
      </div>
      <div className="flex">
        <Slider className="w-full" {...settings}>
          {carousel.cast.map((cast, index) => (
            <div className="" data-carousel-item key={cast.id}>
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
        </Slider>
      </div>
    </>
  );

  //-----------------------------------------------------------------------------------------------//

  function NextArrow({ onClick }) {
    return (
      <FaAngleRight
        style={{
          right: "-15px",
          position: "absolute",
          top: "50%",
          display: "block",
          width: "12px",
          height: "12px",
          padding: "0",
          transform: "translate(0, -50%)",
          cursor: "pointer",
        }}
        onClick={onClick}
        icon={"chevron-right"}
        size="1x"
      />
    );
  }

  function PrevArrow({ onClick }) {
    return (
      <FaAngleLeft
        style={{
          left: "-15px",
          position: "absolute",
          top: "50%",
          display: "block",
          width: "12px",
          height: "12px",
          padding: "0",
          transform: "translate(0, -50%)",
          cursor: "pointer",
        }}
        onClick={onClick}
        icon={"chevron-left"}
        size="1x"
      />
    );
  }
}
