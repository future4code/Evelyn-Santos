//EXERCÍCIO 01

class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;
 
    constructor(
          id: string,
          email: string,
          name: string,
          password: string
      ){
          console.log("Chamando o construtor da classe User")
          this.id = id
          this.email = email
          this.name = name 
          this.password = password
      }
  
      public getId(): string {
          return this.id
      }
  
      public getEmail(): string {
          return this.email
      }
  
      public getName(): string {
          return this.name
      }
  }
  
  const user01 = new User("001","eva@eva.com","Eva","12345")
  console.log("Exercício 01")
  console.log("ID: ", user01.getId())
  console.log("Nome: ", user01.getName())
  console.log("Email: ", user01.getEmail()) 


//EXERCÍCIO 02

class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;
  
    constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      creditCard: string
    ) {
      super(id, email, name, password);
      console.log("Chamando o construtor da classe Customer");
      this.creditCard = creditCard;
    }
  
    public getCreditCard(): string {
      return this.creditCard;
    }
  }
  
  const customer01: Customer = new Customer("002","eva@eva.com","Eva","987654","00055599988444")
  
  //a) Uma vez
  
  //b) Duas vezes

 
// EXERCÍCIO 03

console.log("Exercício 01")
console.log("ID: ", customer01.getId())
console.log("Email: ", customer01.getEmail())
console.log("Nome: ", customer01.getName())
console.log("Senha: não foi possível, tente novamente!")
console.log("Numero cartão: ", customer01.getCreditCard())
console.log("Total de compras: ", customer1.purchaseTotal)

//a) Não, pois na classe User precisaria ser protected
