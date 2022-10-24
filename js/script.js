console.log("Cześć! Nauczycielu :) Bardzo mi miło");

let ammountElement = document.querySelector(".js-ammount");
let currencyElement = document.querySelector(".js-currency");
let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-result");

let rateUSD = 5;
let rateGBP = 5.54;

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  let ammount = +ammountElement.value;
  let currency = currencyElement.value;

  let result;

  switch (currency) {
    case "USD":
      result = ammount * rateUSD;
      break;

    case "GBP":
      result = ammount * rateGBP;
      break;
  }

  resultElement.innerText = `${result.toFixed(2)}`;
});
