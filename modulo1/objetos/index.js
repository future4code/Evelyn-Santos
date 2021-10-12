EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO
1- a) Matheus Natchergaele, Virginia Cavendish, Globo às 14h

2-a) nome: Juca, idade: 3, raca: SRD
nome: Juba, idade: 3, raca: SRD
nome: Jubo, idade: 3, raca: SRD
b) copia o objeto (espalhamento/spread)

3-a) false, undefined
b) backender está definido como false e a variável altura não foi definida

 EXERCÍCIO DE ESCRITA DE CÓDIGO

// //1=a)
const individuo={
  nome: "Evelyn",
  apelido: ["Eva", "Lulu"] 
};
console.log(`Eu sou ${individuo.nome}, mas pode me chamar de ${individuo.apelido[0]} ou ${individuo.apelido[1]}`)

// b) 
function editarIndividuo(individuo) {
  const copia={
  ...individuo,
apelido: ["Gio", "Nana"]

console.log(editarIndividuo(individuo))
}

2)
const objeto1={
  nome:"Evelyn",
  idade:32,
  profissão: "Psicóloga"
}

const objeto2={
  nome:"Giovanna",
  idade:23,
  profissão: "Engenheira"
}

function verObjetos(objeto1, objeto2){
  const devolver= objeto1["nome"]
  console.log(devolver)

}
