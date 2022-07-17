let acumular = ('');

for (
  let numero = parseInt(prompt("Ingrese un numero del 1 al 50"));
  numero <= 50;
  numero++
) {
 if(numero > 0 && numero <= 50){
    acumular = acumular + numero
    document.write(acumular + '<br>');
 }
}
