console.log("Sortowanie tablic");

const arr13 = [2, 8, 1, 100, 30, 16, 54, 39, 88]

console.log(arr13);
arr13.sort();
console.log(arr13);  //sorotowanie po wartości tekstowej

arr13.sort(function (a, b) {
    if(a < b) {
        return -1;
    }

    if(a > b) {
        return 1;
    }

    return 0;
});

console.log(arr13);


// sortowanie tablic malejąco

arr13.sort(function (a, b) {
    if(a < b) {
        return 1;
    }

    if(a > b) {
        return -1;
    }

    return 0;
});

console.log(arr13);

arr13.sort(function (a, b) {
    return a - b;
})

console.log(arr13);