let nombre = prompt("Ingrese un nombre");
let numero = parseInt(prompt("Ingrese una edad para ese nombre"));

let nombre1 = prompt("Ingrese un segundo nombre");
let numero1 = parseInt(prompt("Ingrese una edad al segundo nombre"));

let nombre2 = prompt("Ingrese un tercer nombre");
let numero2 = parseInt(prompt("Ingrese una edad al tercer nombre"));

const mayor = Math.max(numero, numero1, numero2);
let nombreMayor = ''

if(mayor === numero){
    nombreMayor = nombre
}

if(mayor === numero1){
    nombreMayor = nombre1
}

if(mayor === numero2){
    nombreMayor = nombre2
}

document.write('El mayor es ' + nombreMayor.toUpperCase(nombreMayor) + ' y tiene ' + mayor);


