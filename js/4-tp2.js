let acumular = 0;

do {
  let numero1 = parseInt(prompt("Ingrese un numero"));
  if (!numero1) {
    alert("Por favor ingrese un numero valido");
    numero1 = parseInt(prompt("Ingrese un numero"));
  }
  acumular = acumular + numero1;

  continuar = confirm("Desea seguir ingresando numeros?");
} while (continuar);
document.write(acumular);
