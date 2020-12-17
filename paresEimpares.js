function esPar(num) {
 return num==0?"Error":num%2==0?"El número es par":"El numero es impar";
}
function numeroAleatorio(min,max) {
    return Math.round(Math.random()*(max-min)+min);
}
console.log(esPar(13));
console.log(numeroAleatorio(0,50));
