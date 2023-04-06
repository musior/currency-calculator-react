const Form = () => {
  return (
    <form className="main-form">
      <input
        type="number"
        name="value"
        id="value"
        placeholder="Value..."
        required
        step="0.01"
        min="0.01"
      />
    </form>
  );
};

export default Form;
