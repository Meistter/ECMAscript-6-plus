
// Esta es la forma cotidiana de definir valores por defecto, en caso de no ser enviados 
// valores por parametros entonces toma los valores por defecto
function newUser(name, age, country){
    var name = name || 'Oscar'
    var age = age || 34
    var country = country || 'mx'
    console.log(name, age, country);
}

// en ECMAscript 6 se puede hacer de una forma mas simple:

function newUser2(name = 'Oscar', age= 32, country  = 'CL'){
    console.log(name, age, country)
}
// Usando Arrow Function seria: 
let newUser3 = (name = 'Oscar', age= 32, country  = 'CL') =>{
    console.log(name, age, country)
}
newUser()
newUser2()
newUser3()
newUser3('Josue', 26, 'VE')