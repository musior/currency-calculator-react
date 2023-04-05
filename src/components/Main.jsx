const Main = () => {
  return (
    <main id="main">
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
        <select id="main-select">
          <option value="eur">EUR</option>
          <option value="usd">USD</option>
          <option value="chf">CHF</option>
        </select>
        <button id="main-submit" className="btn" type="submit">
          Calculate
        </button>
      </form>
      <div className="main-currency-convertion"></div>
    </main>
  );
};

export default Main;
