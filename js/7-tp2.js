let numero = parseInt(prompt('Ingrese un numero del 1 al 50'));

if(numero > 0 && numero <= 50){
    for(let i = numero; i >= 1; i--){
        for(let j = i; j >= 1; j--){
            document.write(i);
        }
        document.write('<Br>');
    }
}