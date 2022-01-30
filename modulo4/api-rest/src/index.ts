import express, { Request, Response } from 'express'
import cors from 'cors'

type User = {
  id: number,
  name: string,
  email: string,
  type: string,
  age: number
}

// Mock 
let users: User[] = [
  {
    id: 1,
    name: "Alice",
    email: "alice@email.com",
    type: "ADMIN",
    age: 12
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@email.com",
    type: "NORMAL",
    age: 36
  },
  {
    id: 3,
    name: "Coragem",
    email: "coragem@email.com",
    type: "NORMAL",
    age: 21
  },
  {
    id: 4,
    name: "Dory",
    email: "dory@email.com",
    type: "NORMAL",
    age: 17
  },
  {
    id: 5,
    name: "Elsa",
    email: "elsa@email.com",
    type: "ADMIN",
    age: 17
  },
  {
    id: 6,
    name: "Fred",
    email: "fred@email.com",
    type: "ADMIN",
    age: 60
  }
]

const app = express()
app.use(express.json())
app.use(cors())

// teste servidor
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong")
})

app.listen(3003, () => {
  console.log('Servidor na porta 3003')
})

//--------------------------------------------

app.get("/users", (req: Request, res: Response) => {
  try {
    res.status(200).send(users)
  } catch (error: any) {

  }

})
 
//-----------------------------------------


app.get("/users/bytype", (req: Request, res: Response) => {

  try {

    const type: string = req.query.type as string //(b)
    const user = users.filter((user) => user.type === type)

    res.status(200).send(user)
  } catch (error: any) {

  }
})

//-------------

app.get("/users/byname", (req: Request, res: Response) => {

  try {

    const name: string = req.query.name as string //(b)
    const user = users.find((user) => user.name === name)

    if (!user) {
      throw new Error("Erro, usuário não encontrado")
    }
    res.status(200).send(user)

  } catch (error: any) {

    switch (error.message) {
      case "Erro, usuário não encontrado!":
        res.status(422)
        break
      default:
        res.status(500)
    }
    res.send(error.message)
  }
})


app.post("/users/newuser", (req: Request, res: Response) => {

  try {
      const addName = req.body.name
      const addEmail = req.body.email
      const addType = req.body.type
      const addAge = req.body.age


      users.push(
        {
          id: Math.random(),
          name: addName,
          email: addEmail,
          type: addType,
          age: addAge
        }
      )
      res.send({ users })

  } catch (error: any) {

      res.send(error.message)
  }

}) 