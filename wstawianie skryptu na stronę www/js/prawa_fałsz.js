const isLoggedIn = true;  // czy ktoś jest zalogowany

if(isLoggedIn) {
    console.log("Zalogowano");
} else {
    console.log("Niezalogowano");
}

const isLoggedIn2 = false;

if(isLoggedIn2){
    console.log("Zalogowany");
} else {
    console.log("Niezalogowany");
}

// Wartości fałszywe"
// false, 0, null, undefinde, "", '', ``, NaN

const value = "";

if(value) {
    console.log("Ta wartość nie jest fałszywa");
} else {
    console.log("Ta wartość jest prawdziwa");
}