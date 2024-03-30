// 4. Desenvolva um algoritmo que declare uma lista de 10 números e
// solicite um número para o usuário e no final informe se o número
// que o usuário digitou está dentro da lista ou não.

let digitarNumero = parseInt(prompt('Digite um número'));

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === digitarNumero) {
        console.log('O número existe na lista');
    } else {
        console.log('O número não existe na lista');
    }
}