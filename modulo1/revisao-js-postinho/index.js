
// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:

// function checarDesigualdade(a, b) {

//     return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
// }
// console.log(checarDesigualdade(1, 2));

// b-)Compare a igualdade entre a===b

// function checarIgualdade(a, b) {
//     if (a===b) {
//         console.log(`No comparador de igualdade ${a} é igual ${b} `)}
//         else { 
//             console.log(`No comparador de igualdade ${a} não é igual a ${b}`)
//                 }    
//     }
//     checarIgualdade(1, 2)


// c-)Faça uma função chamada "verificaSeEMaior"

function verificaSeEMaior(a,b){
    if (a > b){
        console.log(`${a} é maior que ${b}`)
    }
            else{
            console.log(`${a} não é maior que ${b}`)
        }
    }

verificaSeEMaior(321, 2156)


// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
// a-) 1==='1'= false
// b-) 1=='1'= true
// c-) 'a'==='b'= false
// d-) 'b'>'a'= true
// e-) 0!==null= true


// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------

const usuarios=[]

function cadastroUsuario () {
    
    const nomeDoUsuario=prompt("Qual seu nome?")
    const anoDeNascimento=prompt("Em qual ano você nasceu?")
    const senhaDoUsuario=prompt("Qual sua senha?")
    const naciUsuario=prompt("Qual sua nacionalidade?")
    
usuarios.push(nomeDoUsuario, anoDeNascimento, senhaDoUsuario, naciUsuario)
console.log(usuarios)
}
 cadastroUsuario()


// Exercício 4-----------------------------------------------------------------------------------------------


const login = () => {
    const login = "123456"
    const solitaSenha = prompt("Olá, digite sua senha para efetuar o login")
    switch(solitaSenha){
        case login:
            console.log("Usuário Logado")
            break;
        default:
            console.log("Senha Inválida")
            break    
    }
    return solitaSenha
}

login()


// }

// console.log(login());

// Exercício 5----------------------------------------------------------------------------------------------------

// const primeiraDose = () => {

//     //  Sua lógica aqui


// }
// console.log(primeiraDose())


// LOOP+CONDICIONAL

// Exercício 6 -------------------------------------------------------------------------------------

// const segundaDose = (nomeDoUsuario) => {
//     const usuarios = [
//         { nome: "Artur", imunizacao: "incompleta" },
//         { nome: "Barbara", imunizacao: "incompleta" },
//         { nome: "Carlos", imunizacao: "incompleta" }
//     ]

    //  Sua lógica aqui


// }
// console.log(segundaDose("Barbara"));

// Exercício 7 --------------------------------------------------------------------------------------

// const avisoAosAtrasados = () => {
//     const usuarios = [
//         { nome: "Artur", imunizacao: "incompleta" },
//         { nome: "Barbara", imunizacao: "completa" },
//         { nome: "Carlos", imunizacao: "incompleta" }
//     ]

    //  Sua lógica aqui

// }
// console.log(avisoAosAtrasados());


// DESAFIO------------------------------------------------------------------------------------------

// const usuarios = [
//     {
//         nome: "Artur",
//         ano: 2000,
//         nacionalidae: "brasileiro",
//         senha: "123456",
//         vacina: "pfizer",
//         imunizacao: "incompleta"
//     },
//     {
//         nome: "Bárbara",
//         ano: 1984,
//         nacionalidae: "brasileira",
//         senha: "labenu",
//         vacina: "astrazenica",
//         imunizacao: "completa"
//     },
//     {
//         nome: "Carlos",
//         ano: 2000,
//         nacionalidae: "brasileiro",
//         senha: "123456",
//         vacina: "coronavac",
//         imunizacao: "incompleta"
//     }

// ]

// const cadastroDesafio = () => {
    //  Sua lógica aqui
// }
// console.log(cadastroDesafio());

// const loginDesafio = () => {
//     //  Sua lógica aqui
// }
// console.log(loginDesafio());

// const primeiraDoseDesafio = () => {
//  Sua lógica aqui
// }
// console.log(primeiraDoseDesafio())
// const segundaDose = (nomeDoUsuario) => {
    //  Sua lógica aqui
// }
// console.log(segundaDoseDesafio("ALGUM NOME AQUI"));

// const avisoAosAtrasadosDesafio = () => {
    //  Sua lógica aqui
// }
// console.log(avisoAosAtrasadosDesafio());