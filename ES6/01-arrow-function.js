function square(arg){
    return arg * arg;
}

const square1 = (arg) =>{

    return arg * arg ;
}

const square2 = (arg => arg * arg)


console.log(square(2))
console.log(square1(2));
console.log(square2(2));

