import { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function Search({ value }) {
  const [search, setSearch] = useState("");

  function handleOnChange(e) {
    setSearch(e.target.value);
  }

  return (
    <div>
      <div className="container">
        <form role="search" className="search-form">
          <label>
            <input
              type="search"
              className="search-field"
              placeholder="Search …"
              value={value}
              onChange={handleOnChange}
              name="search"
            />
          </label>
          <Link to={`/Movie-Magic-App/search/${search}`}>
            <input
              type="submit"
              className="search-submit"
              value={search}
              onChange={handleOnChange}
              onClick={(e) => setSearch(search)}
            />
          </Link>
        </form>
      </div>
    </div>
  );
}
