/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Boas vindas ao jogo Blackjack!")

let game=confirm("Quer iniciar uma rodada? Sim ou Não?")
if (game === true){
   console.log("Iniciando nova rodada")
}
else{ 
console.log("O jogo acabou!")
}

const carta = comprarCarta()

console.log("Usuário", carta.texto, carta.valor ) 

