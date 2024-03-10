import Img from "../../Img/Index";

export default function LeftSideCardImg({ src, title }) {
  return (
    <div className="w-[30%] max-sm:w-full flex justify-center">
      <div className="h-[480px] w-[350px] md:w-80 max-md:h-auto sm:w-64">
        <Img
          title={title}
          src={`${src}`}
          classValue="rounded-md h-full object-fill"
        />
      </div>
    </div>
  );
}
