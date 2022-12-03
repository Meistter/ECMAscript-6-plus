// usaremos regex (regex es un tema extenso en otro curso)

const regex = /\b(Apple)+\b/g; // aqui el matchall se esta usando para buscar la palabra Apple en el array

const fruit = "Apple, Banana, Kiwi, Apple, Orange, etc. etc. etc.";

for (const match of fruit.matchAll(regex)) {
    console.log(match);
}