import "./select.css";

const Select = () => {
  return (
    <select className="main-select" name="currencySelect">
      <option value="eur">EUR</option>
      <option value="usd">USD</option>
      <option value="chf">CHF</option>
    </select>
  );
};

export default Select;
