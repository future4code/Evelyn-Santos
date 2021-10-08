// EXERCÍCIO 01
const nomeUsuario=prompt("Qual seu nome?")
const emailUsuario=prompt("Qual seu e-mail?")

console.log("O e-mail", emailUsuario, "foi cadastrado com sucesso. Seja bem-vinda!", nomeUsuario)

//EXERCÍCIO 02

const comidasFavoritas=["pizza", "macarrão", "hamburguer", "chocolate", "bolo"]
console.log(comidasFavoritas)

console.log(`Essas são minhas comidas favoritas: 
${comidasFavoritas[0]}
${comidasFavoritas[1]}
${comidasFavoritas[2]}
${comidasFavoritas[3]}
${comidasFavoritas[4]}`)

//EXERCÍCIO 03

const listaDeTarefas=[1,2,3]

const pergUsuario1=prompt("Digite a primeira tarefa que precisa organizar")
const pergUsuario2=prompt("Digite a segunda tarefa que precisa organizar")
const pergUsuario3=prompt("Digite a terceira tarefa que precisa organizar")
console.log(pergUsuario1, pergUsuario2, pergUsuario3)

const tarefasConcluidas=prompt("Quais tarefas já conclui?")
const tarefasConcSpl=listaDeTarefas.splice(tarefasConcluidas)

console.log(tarefasConcSpl)

//DESAFIO

const frutas=["banana", "morango", "abacaxi", "laranja", "ameixa"]
console.log(frutas[2])
console.log(frutas.length)