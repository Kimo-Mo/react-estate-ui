import { Link } from "react-router-dom";
import "./Filter.css";
const Filter = () => {
  return (
    <div className="filter text-capitalize">
      <h1 className="mb-4">
        Search results for <b>London</b>
      </h1>
      <div className="top">
        <label htmlFor="location">Location</label>
        <input
          className="input"
          type="text"
          name="location"
          id="location"
          placeholder="City Location"
        />
      </div>
      <div className="bottom">
        <div className="input">
          <label htmlFor="type">type</label>
          <select name="type" id="type">
            <option value="any">any</option>
            <option value="buy">buy</option>
            <option value="rent">rent</option>
          </select>
        </div>
        <div className="input">
          <label htmlFor="property">property</label>
          <select name="property" id="property">
            <option value="any">any</option>
            <option value="apartment">apartment</option>
            <option value="house">house</option>
            <option value="condo">condo</option>
            <option value="land">land</option>
          </select>
        </div>
        <div className="input">
          <label htmlFor="minPrice">Min price</label>
          <input type="number" id="minPrice" placeholder="any" min={0} />
        </div>
        <div className="input">
          <label htmlFor="maxPrice">max price</label>
          <input
            type="number"
            id="maxPrice"
            placeholder="any"
            min={0}
            max={10000000}
          />
        </div>
        <div className="input">
          <label htmlFor="bedroom">bedroom</label>
          <input type="number" id="bedroom" placeholder="any" />
        </div>
        <button className="mainBtn">
          <Link to="/Home">
            <span className="me-4 d-inline d-sm-none">search</span>
            <img src="/search-icon.png" alt="search icon" />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Filter;
