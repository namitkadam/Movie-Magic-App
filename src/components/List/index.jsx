export default function List({ name, icon, wrapperClass, liClassName }) {
  return (
    <>
      <div
        className={`max-w-48 flex flex-col px-2 py-1 cursor-pointer ${wrapperClass}`}
      >
        <div
          className={`inline-flex items-center gap-x-0.5 text-[10px] font-semibold text-gray-400  hover:text-[#263238] focus:first:rounded-2xl first:mt-0  ${liClassName}`}
        >
          <div className="flex-shrink-0 size-4 flex items-center">{icon}</div>
          {name}
        </div>
      </div>
    </>
  );
}
