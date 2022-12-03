const user = { username: 'gndx', age: 34, country: 'CO'}
const {username, ...values} = user
console.log(username);
console.log(values);

// Este operador nos permite tomar una propiedad de un objeto y meterla a una variable y el resto de propiedades
// enviarlas a un objeto nuevo

// la diferencia entre el rest-operator y el spread operator (visto en ES6) es que el spread amplia un objeto
// y sus propiedades mientras que el rest operator separa el array en partes