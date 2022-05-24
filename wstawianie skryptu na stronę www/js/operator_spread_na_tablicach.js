console.log("Operator spread na tablicy");

const arr7 = [1, 2, 3];
const arr8 = [5, 6, 7];

const arr9 = arr7.concat(arr8); //połączenie obu tablic razem w jedną tablice
console.log(arr9);

const arr10 = arr7.concat(["Monika", "Basia", "Kasia"]);
console.log(arr10);

const arr11 = [...arr7, ...arr8];
console.log(arr11);

const arr12 = [...arr7, ...["Monika", "Basia"], 7, 8, 9];
console.log(arr12);

