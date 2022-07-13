let frase = prompt("Ingrese varias frases");
let frase1 = "precione CANCELAR";

if (confirm("precione CANCELAR")) {
  document.write('Debes precionas el botón "CANCELAR" aceptar');
} else {
  for (i = 0; i < frase.length; i++) {
    document.write(frase[i]);
    if (i < frase.length - 1) {
      document.write("-");
    }
  }
}
