import { useState } from "react";
import "./SearchBar.css";
import { Link } from "react-router-dom";
const types = ["buy", "rent"];
const SearchBar = () => {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: "",
    maxPrice: "",
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
          value={query.minPrice}
          onChange={(e) => setQuery({ ...query, minPrice: e.target.value })}
        />
        <input
          type="number"
          min={0}
          max={10000000}
          name="maxPrice"
          placeholder="Max Price"
          value={query.maxPrice}
          onChange={(e) => setQuery({ ...query, maxPrice: e.target.value })}
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
