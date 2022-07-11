let frase = prompt("Ingrese una frase");

let count = 0

for (i = 0; i < frase.length; i++) {
    if (
        frase[i] === 'a' ||
        frase[i] === 'e' ||
        frase[i] === 'i' ||
        frase[i] === 'o' ||
        frase[i] === 'u'
        ){
            count++
        }
    }
    
    document.write("El numero de vocales es: " + count)