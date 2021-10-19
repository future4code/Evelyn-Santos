// EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO
//1) o nome e apelido das 3 pessoas na lista
//2) o nome das 3 pessoas na lista
//3) o nome das 2 pessoas da lista que não contém a palavra "Chijo"
//
// EXERCÍCIO DE ESCRITA DE CÓDIGO

// 1)
//a) Crie um novo array que contenha apenas o nome dos doguinhos

// objeto = chave/valor

console.log(cachorro.nome) // Lupin

const pets = [
    { nome: "Lupin", raca: "Salsicha" },     // 0
    { nome: "Polly", raca: "Lhasa Apso" },   // 1
    { nome: "Madame", raca: "Poodle" },      // 2
    { nome: "Quentinho", raca: "Salsicha" }, // 3
    { nome: "Fluffy", raca: "Poodle" },      // 4
    { nome: "Caramelo", raca: "Vira-lata" }, // 5
]

console.log(pets[0]) // { nome: "Lupin", raca: "Salsicha" }
console.log(pets[0].nome) // Lupin

let nomes = []
for (let pet of pets) {
    nomes.push(pet.nome)
}
console.log(nomes) // [nomes...]



