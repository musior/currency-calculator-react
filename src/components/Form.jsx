import Button from "./Button";
import Select from "./Select";

const Form = ({ setResult, setIsLoading }) => {
  const calculatedCurrency = (e) => {
    e.preventDefault();
    console.log(e.target.userInput.value);
    const selectCurrency = e.target.currencySelect.value;
    const userInput = e.target.userInput.value;

    const url = `https://api.nbp.pl/api/exchangerates/rates/a/${selectCurrency}/`;
    setIsLoading(true);

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const currentCurrencyCurse = data.rates[0].mid;
        const calculate = Number(
          // eslint-disable-next-line no-useless-concat
          Math.round(`${currentCurrencyCurse * userInput}` + "e+2") + "e-2"
        );
        setIsLoading(false);
        setResult(calculate);
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
