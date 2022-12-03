const mensaje = 'Yo aun no se si me gusta vivir en Caracas, o prefiero solo visitar Caracas'

const replacedString = mensaje.replace("Caracas", "España")

console.log(replacedString);

// Aqui podemos ver la diferencia entre ambos, el replace solo cambia la 1era aparicion mientras que el replaceAll
// cambia todas las apariciones
const replacedString2 = mensaje.replaceAll("Caracas", "España")
console.log(replacedString2);

