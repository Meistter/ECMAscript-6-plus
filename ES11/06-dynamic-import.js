
// Al usar el import en una forma de await o asincrona entonces la importacion no se hace al cargar la pagina si no
// cuando el usuario realiza la accion de esta forma de optimiza la carga de la pagina
const button = document.getElementById('btn');

button.addEventListener('click', async function () {
    const module = await import("./module.js");
    console.log(module);
    module.hello();
})