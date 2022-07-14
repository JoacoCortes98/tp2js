
let string = "";
let count = 0;
do {
  let frase = prompt("Ingrese una frase");

  // while (!frase) {
  //   alert("Por favor ingrese una frase");
  //   frase = prompt("Ingrese una frase");
  // }

  if (count > 0) {
    string = string + "-" + frase;
  } else {
    string = frase;
  }
  count++;
  continuar = confirm("Desea seguir?");
} while (continuar);
document.write(string);
