import Button from "../button/Button";
import Select from "../select/Select";
import "./form.css";

const Form = ({ setResult, setIsLoading }) => {
  const calculatedCurrency = (e) => {
    e.preventDefault();
    const currency = e.target.currencySelect.value;
    const amount = e.target.userInput.value;

    const url = `https://api.nbp.pl/api/exchangerates/rates/a/${currency}/`;
    setIsLoading(true);

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const currentCurrencyCurse = data.rates[0].mid;
        const result = (currentCurrencyCurse * amount).toFixed(2);
        setIsLoading(false);
        setResult(result);
      })
      .catch((err) => console.log(err));
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
