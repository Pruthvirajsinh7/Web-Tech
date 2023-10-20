window.onload = function() {
    const numberOfDigits = prompt('Enter the number of single digits:');

    if (!Number.isInteger(parseInt(numberOfDigits)) || parseInt(numberOfDigits) <= 0) {
      alert('Please enter a valid positive integer');
      return;
    }

    const digitsArray = [];

    for (let i = 0; i < parseInt(numberOfDigits); i++) {
      const inputDigit = prompt(`Enter digit ${i + 1}:`);

      if (!Number.isInteger(parseInt(inputDigit)) || parseInt(inputDigit) < 0 || parseInt(inputDigit) > 9) {
        alert('Please enter valid single digits');
        return;
      }
  
      digitsArray.push(parseInt(inputDigit));
    }
    let decimalInteger = 0;
    for (const digit of digitsArray) {
      decimalInteger = decimalInteger * 10 + digit;
    }

    document.getElementById('result').textContent = `Decimal integer: ${decimalInteger}`;
  };
  