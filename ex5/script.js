// 5. Escreva um algoritmo que solicite ao usuário a entrada de 5 nomes,
// e que exiba a lista desses nomes na tela. Após exibir essa lista, o
// programa deve mostrar também os nomes na ordem inversa em
// que o usuário os digitou.

// Ex:
// Entrada: Édson, Marcelo, Letícia, Ju, Thobias
// Saída: Thobias, Ju, Letícia, Marcelo, Édson

let nomes = [];

for (let i = 0; i < 5; i++) {
    let nome = prompt(`Digite o nome ${i + 1}`);
    nomes.push(nome);
}

console.log('Nomes digitados: ');
console.log(nomes.join(', '));
console.log('Nomes na ordem inversa: ');
console.log(nomes.reverse().join(', '));