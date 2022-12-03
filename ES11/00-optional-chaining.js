// Esto sirve para cuando queremos acceder a propiedades de un objeto que no sabemos si existiran en su momento o no

const users = {
    gndx: {
        country: "MX"
    },
    ana: {
        country: "CO"
    }
}
console.log(users?.bebeloper?.country);

// El signo de interrogacion sirve para validar si existe, en caso de no existir no da error
// si no que devuelve undefined