console.log("Usuwanie elementów tablicy")

const arr2 = ["Ania", "Marek", "Zosia", "Bartek"]

arr2.length = 0; //spowoduje wyczyszczenie wszystkich elelmentów z listy
console.log(arr2);

const arr3 = ["Tosia", "Lusia", "Gutek", "Kici", "Dominika"]

const last_arr3 = arr3.pop(); //usunięcie ostatniego elementu z listy
const first_arr3 = arr3.shift(); //usunięcie pierwszego elelementu z listy
console.log(last_arr3);
console.log(first_arr3);
console.log(arr3);

const arr4 = ["Tosia", "Lusia", "Gutek", "Kici", "Dominika"]

const where_elemet = arr4.indexOf("Gutek"); //sprawdza, pod jakims indeksem jest Gutek
console.log(where_elemet);

const delete_element = arr4.splice(2, 1); //usunięcie od 3 elelmentu, tylko 1
console.log(delete_element);
console.log(arr4)

const arr5 = ["Tosia", "Lusia", "Gutek", "Kici", "Dominika"]
const delete_meny_elements = arr5.splice(2, 2) //usuniecie od 3 elementu, tylko 2
console.log(arr5)

const arr6 = ["Tosia", "Lusia", "Gutek", "Kici", "Dominika"]
const find_one_element = arr6.indexOf("Lusia");
const delete_one_elemet = arr6.splice(find_one_element, 1);
console.log(delete_one_elemet);
console.log(arr6)