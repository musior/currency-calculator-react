import { calculatedCurrency } from "../utils/calculatedCurrency";

const Form = ({ children }) => {
  return (
    <form className="main-form" onSubmit={calculatedCurrency}>
      <input
        type="number"
        name="value"
        id="value"
        placeholder="Value..."
        required
        step="0.01"
        min="0.01"
      />
      {children}
    </form>
  );
};

export default Form;
