// 3. Desenvolva um algoritmo que preenche um vetor com os 4
// primeiros números perfeitos.

// let numerosPerfeitos = 2;
// const arrayNumeros = [];

// for (let i = 0; i < 4; numerosPerfeitos++){
//     let somaDivisores = 1;

//     for (let j = 2; j < numerosPerfeitos; j++){
//         if (numerosPerfeitos % j === 0){
//             somaDivisores += j;
//         }
//     }
//     if (somaDivisores === numerosPerfeitos){
//         arrayNumeros.push(numerosPerfeitos)
//         i++;
//     }
// }
// console.log(arrayNumeros)

function somaDivisoresProprios(numero) {
let soma = 0;
    for (let i = 1; i < numero; i++) {
    if (numero % i === 0) {
        soma += i;
    }
    }
    return soma;
}

function encontraNumerosPerfeitos(quantidade) {
    const numerosPerfeitos = [];
    let numeroAtual = 1;

    while (numerosPerfeitos.length < quantidade) {
    const soma = somaDivisoresProprios(numeroAtual);
    if (soma === numeroAtual) {
        numerosPerfeitos.push(numeroAtual);
    }
    numeroAtual++;
    }
    return numerosPerfeitos;
}

const numerosPerfeitos = encontraNumerosPerfeitos(4);
console.log(numerosPerfeitos);
