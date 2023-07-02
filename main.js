// 3.reverse a number

let num = parseInt(prompt("Enter a number:"));
let value = 0;
while (num !== 0) {
    let sum = num % 10;
    num = (num - sum) / 10;
    value = value * 10 + sum;
    console.log(sum);
    console.log(num);
    console.log(value);
}