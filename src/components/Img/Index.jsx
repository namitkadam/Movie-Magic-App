import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Loader from "../Loader";

export default function Img(props) {
  const { src, alt, classValue, ImgContainer } = props;
  return (
    <div
      className={`overflow-hidden bg-cover bg-no-repeat w-full h-full ${ImgContainer}`}
    >
      <img className={classValue} src={src} loading="lazy" alt={alt} />
      {/* <LazyLoadImage
        effect="blur"
        src={`https://image.tmdb.org/t/p/original${src}`}
        height="100%"
        width="100%"
        classValue={classValue}
      /> */}
    </div>
  );
}
