import SearchBar from "../SearchBar/SearchBar";
import "./Header.css";
const Header = () => {
  return (
    <div className="header container d-flex">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">find real estate & get your dream place</h1>
          <p className="description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
            nobis ex iste quo tenetur delectus!
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h5>years of experience</h5>
            </div>
            <div className="box">
              <h1>200</h1>
              <h5>award gained</h5>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h5>property ready</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer d-none d-lg-flex">
        <img src="/bg.png" alt="background img" />
      </div>
    </div>
  );
};

export default Header;
