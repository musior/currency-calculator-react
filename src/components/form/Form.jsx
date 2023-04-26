import Button from "../button/Button";
import Select from "../select/Select";
import "./Form.css";

const Form = ({ setResult, setIsLoading, setShowError }) => {
  const calculatedCurrency = (e) => {
    e.preventDefault();
    const currency = e.target.currencySelect.value;
    const amount = e.target.userInput.value;

    const url = `https://api.nbp.pl/api/exchangerates/rates/a/${currency}/`;
    setIsLoading(true);
    setShowError(false);

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.rates.length > 0) {
          const currentCurrencyCurse = data.rates[0].mid;
          const result = (currentCurrencyCurse * amount).toFixed(2);
          setResult(result);
        } else {
          setShowError(true);
        }
      })
      .catch((err) => {
        setShowError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <form className="main-form" onSubmit={calculatedCurrency}>
      <input
        type="number"
        name="userInput"
        id="value"
        placeholder="Value..."
        required
        step="0.01"
        min="0.01"
      />
      <Select />
      <Button />
    </form>
  );
};

export default Form;
