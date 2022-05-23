const firstName = "Jan";
const lastName = "Kowalski";
const bookTitle = '"Władca pierścieni"';
const bookTitle2 = "\"Władca pierścienia\"";

console.log(firstName);
console.log(lastName);
console.log(bookTitle);
console.log(bookTitle2)

const multiline = "Linijka pierwsza\nLinijka druga";

const multiline2 = `Linijka pierwsza 
Linijka druga`;

const multiline3 = `Linijka pierwsza

Linijka druga`;

console.log(multiline);
console.log(multiline2);
console.log(multiline3);

const multiline4 = `Tytuł ksiązki to: ${bookTitle}`;
console.log(multiline4);