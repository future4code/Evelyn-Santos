type Clientes = {
    cliente: string,
    saldoTotal: number,
    debitos: number[]
}

const clientesBanco = [
    { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
    { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
    { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
    { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
    { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
    { cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

function retornarClientesNegativados(lista: Clientes[]): object[] {
    return lista.filter((cliente) => {
        let debitosClientes: number[] = cliente.debitos
        let valorDevido = debitosClientes.reduce(function (dividas, valorAtual) {
            return dividas + valorAtual;
        }, 0)
        if (valorDevido > 0) {
            if ((cliente.saldoTotal - valorDevido) <= 0) {
                return cliente
            }
        }
    })
}
console.log(retornarClientesNegativados(clientesBanco)) 