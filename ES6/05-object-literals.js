//  En ECMA5 se usaba asi:
 function newUser(user, age, country, uid){
    return {user: user, age : age, country: country, id: uid}
 }

//  en ECMA6 se puede usar:
function newUser(user, age, country){
    return {user, age, country}
 }
//  tambien
function newUser(user, age, country, uid){
    return {user, age, country, id: uid}
 }