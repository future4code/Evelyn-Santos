enum GENERO {
    ACAO = "ação",
    DRAMA = "drama",
    COMEDIA = "comédia",
    ROMANCE = "romance",
    TERROR = "terror"
}

type typeOf = {
    nome: string,
    lancamento: number,
    genero: GENERO,
    pontuacao?: number
}


function printMovie(movie: typeOf):object {
    return movie
}
console.log(printMovie({ nome: "Persona", lancamento: 1966, genero: GENERO.DRAMA, pontuacao: 100 }))
