// Es un tipo de iterador personalizado, que mantiene o recuerda su estado
// Esta es una funcion de iteracion que recuerda su estado, de forma que cada vez que se ejecuta
// empieza en la posicion del array donde termino en la anterior ejecucion

function* iterate(array){
    for (let value of array){
        yield value
    }
}

const it = iterate(['Josue', 'Carmen', 'Pepe', 'Pedro'])

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

// En cada ejecucion llama al siguiente elemento del array, cuando termina el array devuelve undefined



ejercicio

export function* getId() {
    let numero = 0
    let id2
    while (true) {
      numero++
      yield id2 = `Michi${numero}`
    }
    
    
  }

//   input

const id = getId()
id.next().value
id.next().value
id.next().value