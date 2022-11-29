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
                                                //then es un metodo usable en promesas
                                                //en este caso se le esta dando como parametro una arrow function
                                                //que recibe response como parametro y muestra por consola como salida
                                                //el catch se usa para capturar el error y mostrarlo por consola
                                                //(en caso de haberlo)    


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
        setTimeout(() => {
            resolve(datos)
            }, 1500)
    })
    
}
// para llamarlo y imprimirlo por consola (en este caso) usamos

getDatos2()
        .then((datos) => console.log(datos))
        .catch(err => console.log(err))

//                  otra forma de trabajar es con el ASYNC AWAIT