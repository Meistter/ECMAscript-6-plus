const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve2"));

Promise.allSettled([promise1, promise2, promise3])
.then(response => console.log(response));


// Sirve para obtener como respuesta un array con el resultado de varias promesas a la vez

Promise.all(iteracion)

// Este metodo (iterable) devuelve una promesa que termina correctamente cuando todas las promesas de la iteracion 
// concluyen exitosamente si no, retorna el motivo de rechazo de la primera promesa en fallar