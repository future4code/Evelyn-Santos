// WARM-UP
// const nomeUsuario=prompt("Qual seu nome?")
// const generoUsuario=prompt("Com qual gênero você se indentifica?")

// if (generoUsuario==="feminino"){
//     console.log("Bem-vinda,", nomeUsuario)
// }
// else if (generoUsuario==="masculino"){
//     console.log("Bem-vindo,", nomeUsuario)
// }
// else{
//     console.log("Desejamos boas-vindas,", nomeUsuario)
// }

// EXERCÍCIOS INTERPRETAÇÃO DE CÓDIGO

//1-A) Se o resto da divisão do número escolhido pe igual a zero
//B) Pares
//C) Ímpares
//
//2-A) Dar o preço das frutas
//B) 2.25
//C) 5
//
//3-A) Fazendo uma pergunta ao usuário/solicitando entrada de informação externa
// B) 10: esse número passou no teste/ -10: essa mensagem é secreta
//C) Na parte do "let mensagem" estava dando erro, substitui para else conforme abaixo para conseguir ler a segunda resposta:

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// }
// else {console.log("Essa mensagem é secreta!!!")}

//EXERCÍCIOS DE ESCRITO DE CÓDIGO
//
//1)
// const idadeUsuario=Number(prompt("Qual sua idade?"))

// if (idadeUsuario >= 18){
//     console.log("Você pode dirigir!")
// }
// else {
//     console.log("Você não pode dirigir!")
// }

//2) 
// const turnoAlune=prompt("Você é do turno: Maturnino, Vespertino ou Noturno").toLowerCase()
// if (turnoAlune==="Maturnino"){
//     console.log("Bom dia!")
// }
// else if (turnoAlune==="Vespertino"){
//     console.log("Boa tarde!")
// }
// else {
//     console.log("Boa noite!")
// }
//3)

// const turnoUsuario = prompt("Você é do turno: Maturnino, Vespertino ou Noturno?")

// const verificaTurno=(usuario)=>{

//     switch(usuario){
//         case"Maturnino":
//             console.log("Bom dia!");
//             break
//         case "Vespertino" :
//             console.log("Boa tarde!");
//             break
//         case"Noturno":    
//             console.log("Boa noite!");
//             break  
//         default:
//             console.log("Insira um pokemon válido")      
//     }

// }
// verificaTurno(turnoUsuario)

// 4)

// const generoFilme=prompt("Qual gênero do filme")
// const precoFilme=Number(prompt("Qual preço do filme?"))

// if (generoFilme === "fantasia" && precoFilme < 15)
// {
//     console.log("Bom filme!")
// }
// else {
//     console.log("Escolha outro filme!")
// }
//
//DESAFIO 01

// const generoFilme=prompt("Qual gênero do filme")
// const precoFilme=Number(prompt("Qual preço do filme?"))
// const qualLanche=prompt("Qual lanche você vai querer?")

// if (generoFilme === "fantasia" && precoFilme < 15)
// {
//     console.log("Aproveite sua", qualLanche)
//     console.log("Bom filme!")
// }
// else {
//     console.log("Escolha outro filme!")
// }
//
//DESAFIO 02

const nomeCompleto=prompt("Qual seu nome completo?")
const tipoDeJogo=prompt("Qual tipo de jogo? Digite 'IN' para intercional ou 'DO' para doméstico").toUpperCase()
const etapaDoJogo=prompt("Qual etapa do jogo? Digite 'SF' para semi-final, 'DT' para terceirp-lugar ou 'FI' para final.").toUpperCase()
const categoria=Number(prompt("Qual categoria de 1 a 4?"))
const quantidadeIngresso=Number(prompt("Qual quantidade de ingressos?"))

let valorDoIngresso
let quantidade