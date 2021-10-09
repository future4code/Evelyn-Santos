// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// // EXERCÍCIO 0A
// function soma(num1, num2) {
//   // implemente sua lógica aqui
//   return num1 + num2
// }

// // EXERCÍCIO 0B
// function imprimeMensagem() {
//   const mensagem = prompt('Digite uma mensagem!')
// console.log(mensagem)
//  }

// // EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// // EXERCÍCIO 01
// function calculaAreaRetangulo() {
//   const altura=prompt("Qual a altura?")
//   const largura=prompt("Qual a largura?")
//   console.log(altura*largura)

// }

// // EXERCÍCIO 02
// function imprimeIdade() {
//   const anoAtual=prompt("Qual ano atual?")
//   const anoNascimento=prompt("Em que ano você nasceu?")
// // console.log(anoAtual-anoNascimento)

// }

// // EXERCÍCIO 03
// function calculaIMC(peso, altura) {
//   const totalIMC = peso / (altura * altura);
//   return totalIMC;
// }

// // EXERCÍCIO 04
// function imprimeInformacoesUsuario(nomeUsuario,idadeUsuario,emailUsuario) {
//   const nomeUsuario=prompt("Qual seu nome?")
//   const idadeUsuario=prompt("Qual sua idade?")
//   const emailUsuario=prompt("Qual seu e-mail?")
  
//   return imprimeInformacoesUsuario

  
// }

// // EXERCÍCIO 05
// function imprimeTresCoresFavoritas() {
//   const coresFavoritas=prompt("Qual são suas cores favoritas?")
// return imprimeTresCoresFavoritas
// }

// // EXERCÍCIO 06
// function retornaStringEmMaiuscula(string) {
//   // implemente sua lógica aqui

// }

// // EXERCÍCIO 07
// function calculaIngressosEspetaculo(custo, valorIngresso) {
//   // implemente sua lógica aqui

// }

// // EXERCÍCIO 08
// function checaStringsMesmoTamanho(string1, string2) {
//   // implemente sua lógica aqui

// }

// // EXERCÍCIO 09
// function retornaPrimeiroElemento(laranja, banana, maça) {
//   const frutas=["laranja", "banana", "maça"]
//   console.log(frutas[0])

// }


// // EXERCÍCIO 10
// function retornaUltimoElemento(array) {
//   ultimo=array[array.length-1]
//   return ultimo
// }

// // EXERCÍCIO 11
// function trocaPrimeiroEUltimo(array) {
// const indiceUltimoElemento=array.length-1
// const primeiroElemento=array[0]
// const ultimoElemento=array[indiceUltimoElemento]

// array[0]=ultimoElemento
// array[indiceUltimoElemento]=primeiroElemento
// return array

// }

// // EXERCÍCIO 12
// function checaIgualdadeDesconsiderandoCase(string1, string2) {

//   const minuscula1= string1.toLowerCase()
//   const minuscula2= string2.toLowerCase()
//   const bool=( string1===string2)
  
//   console.log(minuscula1, minuscula2)
//   return bool


// }

// EXERCÍCIO 13
function checaRenovacaoRG(anoAtual, anoNascimento, anoHabilitacao) {
  anoAtual=prompt("Qual ano atual?")
  anoNascimento=prompt("Qual seu no de nascimento?")
  anoHabilitacao=prompt=("Qual ano tirou sua CNH?")

  const idade=(anoAtual-anoNascimento)
  const idadeHabilitacao=(anoAtual-anoHabilitacao)
  
  const menorVinte=(idade <=20)
  const vinteAnos=(idade>20 && idade <=50)
  const cinquentaAnos=(idade >50)

  const renovarCincoAnos=(menorVinte && idadeHabilitacao >=5)
  const renovarDezAnos=(vinteAnos && idadeHabilitacao >=10)
  const renovarQuinzeAnos=(cinquentaAnos && idadeHabilitacao >=15)

  console.log(renovarCincoAnos || renovarDezAnos || renovarQuinzeAnos)

}

// // EXERCÍCIO 14
// function checaAnoBissexto(ano) {
//   // implemente sua lógica aqui

// }

// // EXERCÍCIO 15
// function checaValidadeInscricaoLabenu() {
//   const idade=prompt("Você tem mais de 18 anos?")
//   const ensinoMedio=prompt("Você terminou o ensino médio?")
//   const disponivel=prompt("Você tem disponibilidade exclusiva durante os horários do curso?")

//   const ret1=idade === "sim"
//   const ret2=ensinoMedio === "sim"
//   const ret3=disponivel === "sim"

//   const valida=(ret1 && ret2 && ret3)
//   console.log(valida)
// 