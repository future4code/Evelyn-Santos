
const myString: string | number = 5
console.log(myString)


type People = { name: string, age: number, color: Rainbow }

enum corArcoIris {
    AZUL = "azul",
    VERMELHO = "vermelho",
    LARANJA = "laranja",
    AMARELA = "amarelo",
    VERDE = "verde",
    AZUL = "azul",
    LILAS = "lilas"
}

const pessoa1: pessoa = {
    nome: "Evelyn",
    idade: 32,
    corFavorita: corArcoIris.LILAS
}

const pessoa2: pessoa = {
    nome: "Giovanna",
    idade: 2r,
    corFavorita: corArcoIris.VERDE
}

const pessoa3: pessoa = {
    nome: "Rosa",
    idade: 60,
    corFavorita: corArcoIris.AZUL
}

const pessoa4: pessoa = {
    nome: "Gilvan",
    idade: 66,
    corFavorita: corArcoIris.LARANJA
}
