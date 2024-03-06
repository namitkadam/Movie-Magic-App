import Description from "../Description";
import Img from "../Img/Index";
import StarRating from "../StarRating";

export default function FrontCard(props) {
  const { src, name, rating } = props;
  return (
    <div className="rounded-b-lg card-front">
      <Img src={src} classValue={"rounded-t-lg object-inherit w-full h-full"} />
      <div className="w-full pb-4 pt-2 px-2 bg-slate-100 antialiased rounded-b-lg flex flex-col items-center gap-1">
        <h5 className="text-sm font-normal leading-tight text-neutral-800 dark:text-neutral-50 line-clamp-1 text-center">
          {name}
        </h5>
        <StarRating rating={rating} />
      </div>
    </div>
  );
}
