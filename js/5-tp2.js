let dni = parseInt(prompt("Ingrese un dni 0 y 99999999"));
console.log(dni);

if (dni >= 0 && dni <= 99999999) {
  // calculo todo lo del dni
  let resultado = dni % 23;
  console.log(resultado);
  switch(resultado){
    case 17:
        document.write('T');
        alert('T');
        break
    default:
        alert('Valor erroneo');
  }
} else {
  alert("Ingreso un valor erroneo");
}
