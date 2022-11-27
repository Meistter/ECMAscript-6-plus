// con este metodo podemos desestructurar arrays y objetos, de forma que tengamos su contenido almacenado
// en variables independientes
let fruits = ['Apple', 'Lemon']
let [fruta1, fruta2] = fruits
console.log(fruta1, fruta2);

// Al usarlo en Objetos el nombre de las variables a crear y asignar debe ser igual a la propiedad dentro del objeto
let user = {username: 'Meistter', age: 26}
let {username, age} = user
console.log(username, age);


// Spread Operator
// Esto sirve para tomar un objeto y poder crear otro agregandole el original mas algunos datos o variables nuevos
let person = {name: 'Josue', age: 26} // objeto
const country = 'VE' //constante
let iq = '100' // variable

let data = {iq, country, ...person, id: 1}

console.log(data);


// REST
// Esta funcion permite asignar un valor recibido por parametros a una variable y el resto de valores recibidos a otra unica variable
// en este caso "valores"
function sum(num, ...valores){
    console.log(valores);
    console.log(num + valores[0]);

}
sum(1,2,3,4)