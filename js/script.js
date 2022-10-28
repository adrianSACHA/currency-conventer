{
  console.log("Cześć! Nauczycielu :) Bardzo mi miło");

  const calculateResult = (ammount, currency) => {
    const rateUSD = 5;
    const rateGBP = 5.54;

    switch (currency) {
      case "USD":
        return ammount * rateUSD;

      case "GBP":
        return ammount * rateGBP;
    }
  };

  const updateResultText = (result) => {
    const resultElement = document.querySelector(".js-result");
    resultElement.innerText = `${result.toFixed(2)}`;
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const ammountElement = document.querySelector(".js-ammount");
    const currencyElement = document.querySelector(".js-currency");

    const ammount = +ammountElement.value;
    const currency = currencyElement.value;

    const result = calculateResult(ammount, currency);

    updateResultText(ammount, result, currency);
  };

  const init = () => {
    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", onFormSubmit);
  };

  init();
}
