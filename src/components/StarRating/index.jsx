import { useState } from "react";
import ReactStars from "react-rating-star-with-type";

export default function StarRating({ rating, title }) {
  const [star, setStar] = useState(5);

  const onChange = (nextValue) => {
    setStar(nextValue);
  };
  return (
    <h5
      className="text-sm font-bold leading-tight  text-neutral-800 dark:text-neutral-50 flex"
      title={title}
    >
      <ReactStars
        onChange={onChange}
        value={rating / 2}
        edit={true}
        activeColors={["red", "black", "#FFCE00", "orange"]}
      />
    </h5>
  );
}
