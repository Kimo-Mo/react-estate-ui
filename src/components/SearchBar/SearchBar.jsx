import { useState } from "react";
import "./SearchBar.css";
import { Link } from "react-router-dom";
const types = ["buy", "rent"];
const SearchBar = () => {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });
  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => {
          return (
            <button
              className={query.type === type ? "active" : ""}
              key={type}
              onClick={() => setQuery({ ...query, type: type })}>
              {type}
            </button>
          );
        })}
      </div>
      <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="location"
          placeholder="City Location"
          required
          value={query.location}
          onChange={(e) => setQuery({ ...query, location: e.target.value })}
        />
        <input
          type="number"
          min={0}
          max={10000000}
          name="minPrice"
          placeholder="Min Price"
        />
        <input
          type="number"
          min={0}
          max={10000000}
          name="maxPrice"
          placeholder="Max Price"
        />
        <button className="mainBtn">
          <Link to="/List">
            <span className="me-4 d-inline d-md-none">Search</span>
            <img src="/search-icon.png" alt="search icon" />
          </Link>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
