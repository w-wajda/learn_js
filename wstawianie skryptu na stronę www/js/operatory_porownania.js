// porównanie == (porównuje, ale nie sprawdza ich typów) oraz === (porównuje i sprawdza ich typy)
// inne operatory >, < =>, <=, !=

const number6 = 20;

if(number6 === 20) {
    console.log("Liczba jest równa 20");
} else {
    console.log("Liczba nie jest równa 20");
}

if(undefined == null) {
    console.log("undefinde jest równe null");
}

if(number6 !== 20) {
    console.log("Licza nie jest równa 20");
}

if(number6 > 10) {
    console.log("Liczba jest większa od 10");
}

if(number6 <10) {
    console.log("Liczba nie jest mniejsza od 10");
}

if(number6 >= 20) {
    console.log("Liczba jest większa lub równa 20");
}

if(number6 <= 20) {
    console.log("Liczba jest mniejsza lyb równa 20");
}

const number7 = 6;
const isEven = number7 % 2 === 0; // Czy jest parzysta
console.log(isEven);