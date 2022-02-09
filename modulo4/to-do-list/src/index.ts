import express, {Request, Response} from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection"

const app = express();

app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

// EXERCÍCIO 01

type User = {
    name: string,
    nickname: string,
    email: string
  }
  
  type Task = {
    id: string,
    title: string, 
    description: string, 
    limit_date: string,
    creator_user_id: string
  }
  
  app.post('/users', async (req: Request, res: Response): Promise<void> => {
    let errorCode = 400
    try {
      const { name, nickname, email } = req.body
      const id = Date.now().toString()
  
      if (!name || !nickname || !email) {
        errorCode = 422
        throw new Error('Error, try again!')
      }
  
      await connection('P_todo_list_Users')
        .insert({
          id,
          name,
          nickname,
          email
        })
  
      res.status(201).send('Success!')
    } catch (error: any) {
      res.status(errorCode).send({ message: error.sqlMessage || error.message })
    }
  })
  
