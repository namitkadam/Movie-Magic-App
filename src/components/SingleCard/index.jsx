import "../SingleCard/index.css";
import FrontCard from "../CardFront";
import BackCard from "../CardBack";

export default function SingleCard(props) {
  const { src, name, rating, overview } = props;

  return (
    <div className="h-96 max-sm:h-72 card">
      <div className="card-inner ">
        <FrontCard src={src} name={name} rating={rating} />
        <BackCard src={src} name={name} rating={rating} overview={overview} />
      </div>
    </div>
  );
}
