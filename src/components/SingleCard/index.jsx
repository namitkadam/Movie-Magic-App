import "../SingleCard/index.css";
import FrontCard from "../CardFront";
import BackCard from "../CardBack";

export default function SingleCard(props) {
  const { src, name, rating, overview } = props;

  return (
    <div className="max-md:w-full max-lg:w-full max-sm:w-full max-sm:h-full card">
      <div className="card-inner ">
        <FrontCard src={src} name={name} rating={rating} />
        <BackCard src={src} name={name} rating={rating} overview={overview} />
      </div>
    </div>
  );
}
