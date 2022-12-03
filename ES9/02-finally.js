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


miFuncion()
.then(response => console.log(response))
.catch(err => console.log(err))
.finally(()=> console.log('Finally')) //se ejecuta al finalizar la ejecucion