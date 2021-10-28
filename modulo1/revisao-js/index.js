//EXERCÍCIOS FUNCOES

// OK a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, 
// faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.

// b) Faça uma função que recebe 2 números e retorne um booleano que 
// informa se o primeiro número é **maior ou igual** ao segundo.

// c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

// d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e 
// imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.



// function receberNumeros(num1,num2) {
//    const soma = num1 + num2
//    return soma
// }
// console.log(receberNumeros(2,3))

// function compararNumero(num3,num4) {
//     if (num3 >= num4){ 
//         return `O numero ${num3} é maior que o ${num4} `  
//     }
//         else { 
//            return `O numero ${num3} não é maior que o ${num4} ` 
                                 
//   }
// }
// compararNumero(6,5) // chamando o código e passando os parâmetros
// (console.log(compararNumero)) //imprimindo e função que passei acima

// function a(x) {
//     if(x>2) {
//        return `O numero é maior que 2`
//     } else {
//        return `O numero é menor que 2`
//     }
//  }
 
//  a(4)

// // //B)
// function apresentarUsuario (nome, idade, cidade) {
//     const nome= console.log( "Qual seu nome?")
//     const idade= console.log("Qual idade?")
//     const cidade= console.log ("Qual cidade?")
//     console.log (` Olá meu ${nome}, tenho ${idade} e sou de ${cidade}`)
//        }
//        const nome= console.log( "Qual seu nome?")
//        const idade= console.log("Qual idade?")
//        const cidade= console.log ("Qual cidade?")
//        apresentarUsuario()


// EXERCICIO 08
//Escreva uma função que, recebendo um número N como parâmetro, retorne os N primeiros números pares 

//- Exemplo
//- `3` retorna `[0, 2, 4]`
// `5` retorna `[0, 2, 4, 6, 8]`

// function retornarNumero(n) {
//     const arrayDePares = []
//     for (let indiceDoArray = 1; indiceDoArray <= n ; indiceDoArray++) {
//         arrayDePares.push()
//         // array e add 
//     }
//     return arrayDePares
// }

// console.log(retornarNumero(3));


// Faça uma função que receba como parâmetro os tamanhos dos três lados do triângulo: 
//`ladoA, ladoB, ladoC` e retorne se ele é equilátero, isósceles ou escaleno 
//(não é necessário validar se os lados fecham um triângulo).

// - Exemplo
//     - `1, 2, 4` retorna `"Escaleno"`
//     - `1, 2, 1` retorna `"Isósceles"`
//     - `5, 5, 5` retorna `"Equilátero"`

// function ladosTriangulo(ladoA, ladoB, ladoC) {
//     if (ladoA != ladoB && ladoA != ladoC && ladoB != ladoC){
//         return `Escanelo`
//     }
//     else if (ladoA === ladoB && ladoA === ladoC && ladoB === ladoC){ 
//         return `Equilatero`
//     } 
//     else{
//         return `Isósceles`
//     }
// } 

// console.log(ladosTriangulo(1,6,7))
// console.log(ladosTriangulo(6,6,6))
// console.log(ladosTriangulo(2,1,2))

//EXERCICIO 10

// Escreva uma função que receba um array de números e 
//retorne um novo array com apenas 2 valores (NESTA ORDEM): 
//o **segundo maior** e o **segundo menor** número do array original. 

// - Exemplo
    
//     `[3, 2, 1, 4, 7, 6, 5]` retorna `[6, 2]`

function receberArray(array) {
    let maiorNumero = -9999999
    let segundoMaior = 0
    let menorNumero = 9999999
    let segundoMenor = 0
    for (const algumElemento of array){
        if (algumElemento > maiorNumero){
            // segundoMaior = maiorNumero
            maiorNumero = algumElemento
        }
        if(algumElemento < menorNumero){
            // segundoMenor = menorNumero
            menorNumero = algumElemento
        }
    }
    return [segundoMaior, segundoMenor]
}

console.log(receberArray([3, 2, 1, 4, 7, 6, 5]));






