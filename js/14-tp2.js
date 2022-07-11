let frase = prompt("Ingrese una frase");

for (i = 0; i < frase.length; i++) {
  document.write(frase[i]);
  if (i < frase.length - 1) {
    document.write("-");
  }
}
