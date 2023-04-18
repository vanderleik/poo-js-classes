import { Carro } from "./carro.mjs";

var carro = new Carro(55);
console.log("Capacidade do tanque: " + carro.capacidade);
console.log("Nível de combustível no tanque atual: " + carro.tanque);

carro.tanque = 10;
console.log("Nível de combustível no tanque atual: " + carro.tanque);

carro.tanque = 25;
console.log("Nível de combustível no tanque atual: " + carro.tanque);

carro.tanque = 25;
console.log("Nível de combustível no tanque atual: " + carro.tanque);
