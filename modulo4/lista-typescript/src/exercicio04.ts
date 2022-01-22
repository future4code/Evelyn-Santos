enum SETOR {
    VENDAS = "vendas",
    MARKETING = "marketing",
    FINANCEIRO  = "financeiro"
    }
    
    type Funcionarios = {
    nome: string,
    salário: number,
    setor: SETOR,
    presencial: boolean
    }
    
    const listaDeFuncionarios = [
        { nome: "Davi", salário: 1000, setor: SETOR.MARKETING, presencial: true },
        { nome: "Romulo" ,salário: 3000, setor:  SETOR.VENDAS, presencial: false},
        { nome: "Pedro" ,salário: 3000, setor: SETOR.FINANCEIRO, presencial: true},
        { nome: "Isadora" ,salário: 3000, setor: SETOR.MARKETING, presencial: false},
        { nome: "Diego" ,salário: 2000, setor: SETOR.FINANCEIRO, presencial: true},
        { nome: "Flavia" ,salário: 1000, setor: SETOR.VENDAS, presencial: true},
        { nome: "Evelyn" ,salário: 2500, setor: SETOR.MARKETING, presencial: true }
    ]
    
    function imprimirFuncionarios (lista: Funcionarios[]):object[]{
        return lista.filter((funcionario)=>{
            return funcionario.setor === SETOR.MARKETING && funcionario.presencial === true
        })
    
    }
    console.log(imprimirFuncionarios(listaDeFuncionarios))