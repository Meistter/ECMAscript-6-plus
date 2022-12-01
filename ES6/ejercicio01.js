
// En este ejercicio recibimos 2 objetos por parametros, y definimos valores por defecto (objetos por defecto)
// en caso de no recibirlos

function solution(json1, json2) {
    json1 = json1 || { name: "Mr. Michi", food: "Pescado" }
    json2 = json2 || { age: 12, color: "Blanco" }
  
    let objeto = { ...json1, ...json2 }
    return objeto
  }

  console.log(solution({name: "Josue", food: "Pizza"}))



//   Otra manera

export function solution(json1 = {name: 'Mr. Michi', food: 'Pescado',}, json2 = {age: 12, color: 'Blanco',}) {
    return { ...json1, ...json2 };
  }