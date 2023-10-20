function humanizeNumber() {
    const inputNumber = prompt("Enter a number:");
    const humanizedNumber = humanize(parseInt(inputNumber));
    document.getElementById("result").innerHTML = humanizedNumber;
  }
  
  function humanize(number) {
    if (number === 0) {
      return "0th";
    }
  
    const remainder = number % 10;
    let suffix = "";
  
    switch (remainder) {
      case 1:
        suffix = "st";
        break;
      case 2:
        suffix = "nd";
        break;
      case 3:
        suffix = "rd";
        break;
      default:
        suffix = "th";
    }
  
    return number + suffix;
  }
  