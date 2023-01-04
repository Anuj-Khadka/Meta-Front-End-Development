let currencyNepali = 13000
let currencyUSD = 0;
let exchangeRate = 130;

function currencyConverter(currencyNepali, exchangeRate) {
    return currencyNepali/exchangeRate;     
}

currencyUSD = currencyConverter(currencyNepali, exchangeRate)
console.log(currencyUSD)