// declarando clase
 class user{
    // constructor
    constructor(){
        console.log('se ejecutó el constructor');
    }
    // metodos
    greeting(){
        return 'Hello'
    }
}

// Instanciando (creando una nueva instancia de la Clase user)
const usuarioJosue = new user()
console.log(usuarioJosue.greeting());


//"HERENCIA" aqui creamos otra instancia de la misma clase "padre" aMBas INstanCIan USan EL METODO De La clase
const subUsuarioJosue = new user()
console.log(subUsuarioJosue.greeting());

// Ejemplo

class user{
    constructor(name){
        // Aqui creo que ponemos Atributos
        this.name = name;
    }
    // Metodos
    saludo(){
        return 'Hola'
    }
    saludar(){
        return `${this.saludo()} ${this.name}`;
    }
}
// creamos la nueva instancia
// Se le manda por parametros al constructor el dato que necesita para funcionar, esto puede aplicarse a la realidad
const nuevaInstancia = new user('Josue');
console.log(nuevaInstancia.saludar());

// ejemplo utilizando Set y GET

class user{
    // constructor
    constructor(name, age){
        this.name = name
        this.age = age
    }
    // metodos
    speak(){
        return 'Hello'
    }
    greeting(){
        return `${this.saludo()} ${this.name}`;
    }
    set uAge(n){
    this.age = n
    }
    get uAge(){
        return this.age
    }
}
// En esta parte lo que hacemos es crear la nueva instanacia y asignar valor e nombre y edad
const nuevo = new user('Josue', 26)
console.log(nuevo.uAge);
// al llamar al uAge y asignarle el automaticamente se va por el set, si solo se llama entonces usa el get
console.log(nuevo.uAge = 20);
