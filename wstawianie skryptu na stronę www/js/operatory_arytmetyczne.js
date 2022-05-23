let number1 = 2;
let number2 = 4;

const result1 = number1 + number2;
const result2 = 2 + "5"; // Nie zostanie dodane matematycznie, a scalone i wynik będzie 25
// typeof result2 wpisane w console pokaże, że jest to string
const result3 = number1 - number2;
const result4 = number1 * number2;
const result5 = number1 / number2;
const result6 = number2 % number1; // Zwraca resztę z dzielenia
const result7 = number1 ** number2; // Podnoszenie do potęgi

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
console.log(result6);
console.log(result7);

number1 = number1 + 3; // Można zapisać też inaczej
number2 += 4 // -=, *=, /=, %=

console.log(number1);
console.log(number2);

const result8 = 5 + 2 * 4;
console.log(result8);

const result9 = (5 + 6) * 3;
console.log(result9);



