// Esta funcion del ECMA 8 sirve para a partir de un objeto armar un array solo con los valores de la propiedad del 
// objeto

const countries = {MX: 'Mexico', CO: 'Colombia', CL: 'Chile', PE: 'Peru'}
console.log(Object.values(countries));

// salida: ['Mexico', 'Colombia', 'Chile', 'Peru']