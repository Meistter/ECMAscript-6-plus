const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true) ? setTimeout(() => resolve('Async!!'), 1500)
        : reject(new Error('Error!'))
    })
}
// Ejemplo usando arrow functions
const anotherFn = async () =>{
    const respuesta = await fnAsync()
    console.log(respuesta)
    
}
console.log('hola');
anotherFn()

// function normal
async function anotherFn(){
    const respuesta = await fnAsync()
    console.log(respuesta)
}