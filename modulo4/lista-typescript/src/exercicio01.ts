function imprimirNascimento(nome: string, data: string): string {
    let outraData = data.split("/")
    return `Olá me chamo ${nome}, nasci no dia ${outraData[0]} do mês ${outraData[1]} do ano de ${outraData[2]}.`

}

console.log(imprimirNascimento("Evelyn", "17/02/1989")) 