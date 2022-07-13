let number = prompt("Ingrese un numero de 0 a 10");

switch (number) {
  case "0":
  case "1":
  case "2":
    alert("Muy deficiente");
    break;
  case "3":
  case "4":
    alert("Insuficiente");
    break;
  case "5":
  case "6":
    alert("Suficiente");
    break;
  case "7":
    alert("Bien");
    break;
  case "8":
  case "9":
    alert("Notable");
    break;
  case "10":
    alert("Sobresaliente");
    break;
}
if (number > "10" || number < '0') {
  alert("Numero erroneo");
// } else if (number == number) {
//   alert("Introduce un numero válido");
}
