import CardList from "../CardList";
import PagePagination from "../Pagination";
import SingleCard from "../SingleCard";

export default function RightSide() {
  return (
    <div className="w-full max-xl:w-screen">
      {/* <SingleCard
        // key={movie.id}
        name={"Poor Things"}
        src={
          "https://image.tmdb.org/t/p/original/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg"
        }
        rating={8.073}
      /> */}
      <CardList />
      {/* <PagePagination /> */}
    </div>
  );
}
