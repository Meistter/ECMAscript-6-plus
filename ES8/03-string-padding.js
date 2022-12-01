//   Sirve para rellenar una variable hasta conseguir que tenga la longitud deseada

const string ='hola'

console.log(string.padStart(8,'_'));
// Esto agregara _ delante de la variable string hasta que esta tenga una longitud de 8

console.log(string.padEnd(8,'_'));
// lo mismo pero al final