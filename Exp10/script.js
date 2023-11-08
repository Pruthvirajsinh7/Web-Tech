function printData(data) {
    document.write(`Name: ${data.name}<br>`);
    document.write(`Age: ${data.age}<br>`);
    document.write(`Email: ${data.email}<br>`);
}


fetch('data.json')
    .then(response => response.json())
    .then(data => {
        printData(data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
