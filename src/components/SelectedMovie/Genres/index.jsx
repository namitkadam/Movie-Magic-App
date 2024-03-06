import { FaCircleDot } from "react-icons/fa6";

export default function Genres(props) {
  const { name, key } = props;
  return (
    <div
      key={key}
      className="flex gap-0.5 items-center font-extralight text-[#546e7a]"
    >
      <FaCircleDot className="h-[9.5px]" />
      <p className="font-bold text-[9.5px] uppercase">{name}</p>
    </div>
  );
}
