console.log("Destructuiring")

const mousePosition = [100,200];

// const x = mousePosition[0];
// const y = mousePosition[1];

// zapisanie tego w wierszu 3 i 4 w jednej linijce

const [x, y] = mousePosition;

console.log(x, y);

const humanPosition = [300, 500, 700];

const [a, b, c] = humanPosition;

console.log(a, b, c);
