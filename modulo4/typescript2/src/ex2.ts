type ShowData = [
    numeros: number[],
    ShowEstastistica: (números: number[]) => {
        maior: number,
        menor: number,
        media: number,
    }

]



function obterEstatistica(numeros: number[]) {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatistica = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatistica
}

const amostraIdades: ShowData = {

    numeros = [13, 32, 40, 26, 66],

    obterEstatistica: (numeros: number[]) => {obterEstatistica}
} 