const convertButton = document.querySelector(".convert-button"); //seleciona o botão
const currencySelect = document.querySelector(".currency-select") // Selecionando a moeda

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value // pega o valor digitado no input

    const currencyValueToConvert = document.querySelector("#real")// Value in Reais / pega o valor digitado no input real
    const currencyValueConverted = document.querySelector("#other-currencies")// Outras moedas / pega o valor convertido 

    console.log(currencySelect.value)

    const dollarToday = 5
    const euroToday = 5.39
    const poundToday = 6.28

    if (currencySelect.value == "dollar") {
        //  Se o dólar for selecionado, entra aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dollarToday)
    }
    if (currencySelect.value == "euro") {
        //  Se o euro for selecionado, entra aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }
    if (currencySelect.value == "pound") {
        //  Se a libra for selecionado, entra aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / poundToday)
    }

    // Formatação dos números REAL
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
}
//parei aqui no trocar nome e bandeira
function changeCurrency () {
    
}
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues) // idenfitica quando o botão é clicado