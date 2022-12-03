const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve2"));

Promise.any([promise1, promise2, promise3])
.then(response => console.log(response));

// Esta funcion Any devolvera la primera respuesta exitosa entre las 3 promesas que recibio por parametro
// sirve para ver cual de las 3 responde exitosamente primero