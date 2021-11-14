function suma(a, b) {
    if(isNaN(a) || isNaN(b)){
        return 0
    } else {
        return a+b;
    }
    
}
module.exports =  suma;
// console.assert (suma(1,2)==3, "ERROR: EL RESULTADO ESPERADO DE 1+2 ES 3");