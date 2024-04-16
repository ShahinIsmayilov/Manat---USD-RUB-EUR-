function convert() {
    const manatAmount = parseFloat(document.getElementById('manatAmount').value);
    const selectedCurrency = document.getElementById('currency').value;
    const usdRate = 0.59;
    const eurRate = 0.50;
    const rubRate = 47.09;

    if (!isNaN(manatAmount)) {
        let convertedAmount;

        switch (selectedCurrency) {
            case 'USD':
                convertedAmount = manatAmount * usdRate;
                break;
            case 'EUR':
                convertedAmount = manatAmount * eurRate;
                break;
            case 'RUB':
                convertedAmount = manatAmount * rubRate;
                break;
            default:
                convertedAmount = 0;
        }

        document.getElementById('result').innerHTML = `${manatAmount.toFixed(2)} AZN, ${convertedAmount.toFixed(2)} ${selectedCurrency}'Bərabərdir.`;
    } 
}
document.getElementById('convertButton').addEventListener('click', convert);
