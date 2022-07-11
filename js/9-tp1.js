let frase = prompt("Ingrese una frase");

let largoFrase = frase.length
let j = 0

while(j <= largoFrase){
    if(frase[j] === 'a' || frase[j] === 'e' || frase[j] === 'i' || frase[j] === 'o' || frase[j] === 'u'){
        console.log(frase[j])
        document.write('Esto es una vocal: ' + frase[j] + '<br>');
    }
    j++;
}

// let a, e, i, o, u = false

// for(i = 0; i < frase.length; i++){
//     console.log(frase[i])

//     switch(frase[i]){
//         case 'a':
//             a = true
//             break
//         case 'e':
//             e = true
//             break
//         case 'i':
//             i = true
//             break
//         case 'o':
//             o = true  
//             break
//         case 'u':
//             u = true  
//             break
//     }

    
   

//     // if(frase[i] === 'a'){

//     // }
//     // if(frase[i] === 'a'){

//     // }
// }

// if(a){
//     console.log('existe a')
// }