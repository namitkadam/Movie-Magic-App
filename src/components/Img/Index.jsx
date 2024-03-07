import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Loader from "../Loader";

export default function Img(props) {
  const { src, alt, classValue } = props;
  return (
    <div className="overflow-hidden bg-cover bg-no-repeat w-full h-full">
      <img className={classValue} src={src} loading="lazy" alt={alt} />
      {/* <LazyLoadImage
        effect="blur"
        src={`https://image.tmdb.org/t/p/original${src}`}
        height="100%"
        width="100%"
        classValue={classValue}
      /> */}
      {/* <a href="#!">
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
      </a> */}
    </div>
  );
}
