const {area, circunferencia} = require("./circulo");
const Quadrado = require ("./quadrado");

console.log(area(5));
console.log(circunferencia(5));

const quadrado = new Quadrado(2)
console.log(quadrado.area());