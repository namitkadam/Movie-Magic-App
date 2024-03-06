import Description from "../Description";
import Img from "../Img/Index";
import StarRating from "../StarRating";

export default function BackCard(props) {
  const { src, name, rating, overview } = props;
  return (
    <div className="card-back">
      <div
        className={`h-full rounded-lg bg-center bg-cover bg-no-repeat `}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${src})`,
        }}
      >
        <div className="h-full bg-[rgba(53,53,53,0.75)] px-4 py-6 rounded-lg flex flex-col gap-2">
          <div>
            <h5 className="mb-2 text-base font-medium leading-tight text-zinc-100">
              {name}
            </h5>
            <StarRating rating={rating} />
          </div>
          <div>
            <h5 className="mb-2 text-xs font-medium leading-snug  text-zinc-100 dark:text-neutral-50 line-clamp-[11]">
              {overview}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
