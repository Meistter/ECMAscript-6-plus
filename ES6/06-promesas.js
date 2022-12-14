const miFuncion = () => {
    return new Promise((resolve, reject) => {
        if(true){ //al usar el true se añade la logica de cuando la promesa SI sucede, si se ejecuta
            resolve('Funciona')
        }else{
            reject('no funciono')
        }
    } //esta es mi arrow function    
    ) //dentro del Promise
}


miFuncion().then(response => console.log(response)).catch(err => console.log(err))
//                                                 then es un metodo usable en promesas
//                                                 en este caso se le esta dando como parametro una arrow function
//                                                 que recibe response como parametro y muestra por consola como salida
//                                                 el catch se usa para capturar el error y mostrarlo por consola
//                                                 (en caso de haberlo)    


// Explicacion de las promesas
// las promesas se usan cuando se tiene comunicacion con eventos exteriores que tienen un Delay de respuesta
// esto le permite a la funcion esperar una respuesta y no solo retornar undefined al no recibir respuesta inmediata

// por ejemplo si tenemos este Array

const datos = [{
    id: 1,
    title: 'iron man',
    year : 2020},
    {
    id: 2,
    title: 'iron fish',
    year : 2019
    }

]
// const getDatos = () => {
//     return datos
// }

const getDatos = () => {
    setTimeout(() => {
    return datos
    }, 1500)
}
// esta es una funcion que devuelve datos instantaneos pero si agregamos un Delay, entonces retornaria undefined porq
// tarda en responder, sin embargo usando promesas podemos resolver este problema

const getDatos2 = () => {
    
    return new Promise((resolve, reject) => {
        if (datos.length === 0){
            reject(new Error('no existen datos'))
        }
        setTimeout(() => {
            resolve(datos)
            }, 1500)
    })
    
    
}
// para llamarlo y imprimirlo por consola (en este caso) usamos

getDatos2()
        .then((datos) => console.log(datos))
        .catch(err => console.log(err))

//                   otra forma de trabajar es con el ASYNC AWAIT

async function fetchingData(){ //es importante para usar un await que se encuentre dentro de una funcion async
    const misDatos = await getDatos2()       
    console.log(misDatos); 
}
fetchingData() //a diferencia del Promise aqui llamamos la funcion sola

//toda esta estructura reemplaza el .then sin embargo al parecer igual se hace uso de las promesas

//todo esto puede ser envuelto en un try catch para evitar errores

async function fetchingData(){ 
    try{
        const misDatos = await getDatos2()       
        console.log(misDatos);
    } catch(err){
        console.log(err.message);
    }
     
}
fetchingData()


// Ejercicio:
// Archivo 1:
export default async function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([{
                movie: "El despertar de los michis",
                year: 2021,
                protagonist: "Mr. Michi"
            }, {
                movie: "101 Michis",
                year: 2019,
                protagonist: "Tommy Michiguire"
            }]);
        }, 1000);
    });
}
// Archivo 2 (solucion):

import getData from "./api.js"
export function solution() {
  return getData().then(response => response).catch(err => err)
}



// otra forma

export async function solution() {
  const datos = await getData()
  return datos;
}

// otra forma para esto es: 

export async function solution() {
    return await getData()    
  }