console.log(window); // navegador
console.log(global);  // node
console.log(selft);// webworker
console.log(globalThis);


// viene a reemplazar las primeras 3 funciones ya que puede ser usada sin importar sea navegador node o webworker
// no hay necesidad de validar en q plataforma se encuentra si no que es compatible en todas