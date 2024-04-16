const fs = require('fs');
let totalSum = 0;

fs.readFile('advent_day1/input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    const lines = data.split('\n');
    for (const line of lines) {
        const digits = line.match(/\d/g); 

        if (digits && digits.length > 0) {
            let firstDigit = digits[0];
            console.log(firstDigit);
            let lastDigit = digits[digits.length - 1];
            console.log(lastDigit);
            if (digits.length === 1) {
                lastDigit = firstDigit; //handle the case where there is only one digit
            }
        
            let value = parseInt(firstDigit + lastDigit);
            console.log(value);
            totalSum += value;
            console.log(totalSum);
        }
    }
    console.log("Final Result " + totalSum);
});
