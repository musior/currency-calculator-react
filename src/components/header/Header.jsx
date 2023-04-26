import logo from "../../assets/img/currency-converter-logo.png";
import "./Header.css";

const Header = () => {
  return (
    <header id="header" className="header">
      <div className="header-logo">
        <img src={logo} alt="Currency converter logo" />
      </div>
      <div className="header-info">
        <h1 className="header-info-para">
          Currency converter - this is a small application that converts a given
          currency into PLN based on current exchange rates.
        </h1>
      </div>
    </header>
  );
};

export default Header;
