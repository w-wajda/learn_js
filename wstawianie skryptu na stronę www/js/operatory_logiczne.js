const isLoggedIn3 = true;
const hasSubscription = true;

if(isLoggedIn3) {
    if(hasSubscription) {
        console.log("Dziękujemy za zakup abonamentu");
    }
}

// Inny zapis tego samego, ten poniżej preferowany, bo operator logiczny
// opertor logiczny "and" czyli &&

if(isLoggedIn3 && hasSubscription) {
    console.log("Dziękujemy, że jesteś wśród naszych abonentów");
} else {
    console.log("Zastanów się na zakupem abonamentu");
}

// opertor logiczny "or" czyli ||

const firstName2 = "Jacek";
const lastName2 = "Kowalski";

if(firstName2 === "Jacek" || lastName2 === "Kowalski") {
    console.log("Jacek lub Nowak");
}

// operator negacji

const name5 = "";

if(!name5) {
    console.log("Imie nie zostało podane");
}

const name6 = "Piotr";

if(!name6) {
    console.log("Imi nie zostało podane");
} else {
    console.log("Imie Piotr");
}