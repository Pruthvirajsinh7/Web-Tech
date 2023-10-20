window.onload = function() {
    const inputNumber = prompt('Enter an integer:');

    if (!Number.isInteger(parseInt(inputNumber))) {
      alert('Please enter a valid integer');
      return;
    }

    let reversedInteger = 0;
    let originalNumber = parseInt(inputNumber);
  
    while (originalNumber > 0) {
      const remainder = originalNumber % 10;
      reversedInteger = reversedInteger * 10 + remainder;
      originalNumber = Math.floor(originalNumber / 10);
    }
 
    document.getElementById('result').textContent = `Reversed integer: ${reversedInteger}`;
  };
  