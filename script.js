const convertButton = document.querySelector(".convert-button"); //seleciona o botão
const currencySelect = document.querySelector(".currency-select") // Selecionando a moeda

const convertValues = async () => {
    const inputCurrencyValue = document.querySelector(".input-currency").value // pega o valor digitado no input

    const currencyValueToConvert = document.querySelector("#real")// Value in Reais / pega o valor digitado no input real
    const currencyValueConverted = document.querySelector("#other-currencies")// Outras moedas / pega o valor convertido 
    // async await - avisa ao servidor para esperar retornar o dado para depois continuar a execução - só pode funcionar dentro de uma função.
    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL").then(response => response.json());

    const dollarToday = data.USDBRL.high
    const euroToday = data.EURBRL.high
    const poundToday = data.GBPBRL.high

    console.log(currencySelect.value);
    console.log(data);

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

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dollar") {
        currencyName.innerHTML = "American Dollar"
        currencyImage.src = "assets/dollar.png"
    }
    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "assets/euro.png"
    }
    if (currencySelect.value == "pound") {
        currencyName.innerHTML = "Pound Sterling"
        currencyImage.src = "assets/libra.png"
    }

    convertValues()
}
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues) // idenfitica quando o botão é clicado