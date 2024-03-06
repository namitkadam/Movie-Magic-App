import { Link } from "react-router-dom";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { useState } from "react";

export default function PagePagination({ page }) {
  const [pageCount, setPageCount] = useState(1);

  return (
    <div className="my-8 px-5 flex justify-end">
      {/* <Link>
        <button onClick={() => setPageCount(pageCount - 1)}>
          {pageCount} page
          <FaArrowLeft />
        </button>
      </Link> */}
      <Link to={pageCount}>
        <button
          className=" border-2 flex items-center px-2.5 py-1.5 rounded-full gap-1 border-[#263238] bg-[#263238] text-white text-xs font-medium hover:bg-white hover:text-[#263238]"
          onClick={() => setPageCount(pageCount + 1)}
        >
          Page {pageCount}
          <FaArrowRight />
        </button>
      </Link>
    </div>
  );
}
