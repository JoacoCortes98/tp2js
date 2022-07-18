let frase = prompt("Ingrese una frase");
for (i = 0; i <= frase.length; i++) {
  if (
    frase[i] === "a" ||
    frase[i] === "e" ||
    frase[i] === "i" ||
    frase[i] === "o" ||
    frase[i] === "u"
  ) {
    document.write('La primera vocal se encuentra en la posición N: ' + (i));
    break
  }
}
