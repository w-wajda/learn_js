console.log("Dodawanie elemetów do tablicy");

const arr = [];

arr[0] = "Kasia";
arr[1] = "Tomek";
arr[arr.length] = "Basia";
arr.push("Monika"); //dodatnie elementu na koniec tablicy, przez metode
arr.unshift("Patryk"); //dodanie elementu na początku tablicy, przez metode

console.log(arr);