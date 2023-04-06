import { createLoader } from "./createLoader";

const form = document.querySelector(".main-form");
const inputValue = document.querySelector("#value");
const select = document.querySelector("#main-select");
const resultCalculate = document.querySelector(".main-currency-convertion");

const calculatedCurrency = (e) => {
  e.preventDefault();
  resultCalculate.innerHTML = "";
  const currency = select.options[select.selectedIndex].value;
  const url = `https://api.nbp.pl/api/exchangerates/rates/a/${currency}/`;

  createLoader();

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const currentCurrencyCurse = data.rates[0].mid;
      const calculate = Number(Math.round(`${currentCurrencyCurse * inputValue.value}` + 'e+2') + 'e-2');
      setTimeout(() => {
        resultCalculate.innerHTML = "";
        const p = document.createElement("p");
        resultCalculate.appendChild(p);
        p.innerHTML = `It is <span class="sumbit-value">${calculate}</span>PLN.`;
      }, 1500);
    });
}

export { calculatedCurrency };