const resultCalculate = document.querySelector(".main-currency-convertion");

const createLoader = () => {
  const ldsRing = document.createElement("div");
  ldsRing.classList.add("lds-ring");
  for (let i = 0; i < 4; i++) {
    const div = document.createElement("div");
    ldsRing.appendChild(div);
  }
  resultCalculate.appendChild(ldsRing);
  return ldsRing;
}

export { createLoader };