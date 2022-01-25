import express from "express";
import cors from "cors";
import { Request, Response} from "express";

import { AddressInfo } from "net";

const app = express();
app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;



// Exercício 01

app.get("/ping", (req, res) => {
    res.send("Pong!")
})

// Exercício 02

type ToDo = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}[]

// Exercício 03

const toDoList: ToDo = [
    {
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false
    },
    {
        userId: 1,
        id: 2,
        title: "quis ut nam facilis et officia qui",
        completed: false
    },
    {
        userId: 2,
        id: 3,
        title: "fugiat veniam minus",
        completed: true
    },
    {
        userId: 2,
        id: 4,
        title: "et porro tempora",
        completed: false
    },

]

// Exercício 04


app.get("/todos/tasks", (req, res) => {

  const result = []

  for (let task of tasks) {
      if (task.completed === true) {
          result.push({
              userId: task.userId,
              id: task.id,
              tittle: task.tittle,
              completed: task.completed
          })
      }
  }

  res.status(200).send({result})
})



// Exercício 05

app.post("/todos/create", (req: Request, res: Response) => {
    const {title, completed} = req.body
    toDoList.push({userId: Date.now(), id: toDoList.length +1, title, completed})

    res.status(200).send(toDoList)
})

// Exercício 06

app.put("/todos/:taskId", (req: Request, res: Response) => {
    const taskId: number = Number(req.params.taskId)
    toDoList.map((task) => {
        if(taskId === task.id){
           return task.completed = !task.completed
        }
        return toDoList
    })

    res.status(200).send(toDoList)
})

// Exercício 07

app.delete("/todos/delete", (req: Request, res: Response) => {
    const taskId = Number(req.query.id)

    toDoList.forEach((task, index) => {
        if(task.id === taskId) {
            return toDoList.splice(index, 1)
        }
        return task
    })

    res.status(200).send(toDoList)
})

// Exercício 08

app.get("/todos/user", (req: Request, res: Response) => {
    const userId = Number(req.query.id)

    if(!userId) res.status(400).send("Não foi possível realizar a operação!")

    const userTasks = toDoList.filter((task) => {
        return task.userId === userId
    })

    if(userTasks.length === 0) res.status(400).send("Usuário não encontrado!")
    res.status(200).send(userTasks)
})


