import express, { Request, Response, Express } from "express"
import cors from 'cors';
import { AddressInfo } from 'net';
import connection from './connection';

const app: Express = express();

app.use(express.json());
app.use(cors());

                                                                         
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});

// EXERCÍCIO 01
//a) O raw retorna as informações do banco de dados. Para termos o resultado esperado é necessário fazer o return[0] que indica o 1o resultado no 
// índice do array


const getActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE name '${name}'
    `)
    return result[0][0]
  } 


app.get("/actor/:name", async (req: Request, res: Response) => {
    try {
        const name = req.params.name
        console.log(await getActorByName(name))
        
        res.send("sucesso!")
    } catch (error: any) {
        console.log(error.message)
        res.status(500).send({message:error.message})
    }
})

const countActorsByGender = async (gender:string): Promise<any> =>{
    const result = await connection.raw(`
      SELECT COUNT(*) as count FROM atores WHERE gender="${gender}"
    `)
    const count = result[0][0].count;
    return count;
  }
  
  //EXERCICIO 2
  const updateActor = async (id: string, salary: number): Promise<void> => {
    await connection ("atores")
      .update({
        salary: salary
      })
      .where("id", id);
  };
  
  const deleteActor = async (id: string): Promise<void> => {
    await connection ("atores")
      .delete()
      .where("id", id);
  };
  
  const avgSalary = async (gender: string): Promise<any> => {
    const result = await connection ("atores")
      .avg("salary as average")
      .where({gender});
  
      return result[0].average;
  };
  
  //EXERCICIO 03
  
  const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM atores WHERE id = '${id}'
    `)
      return result[0][0]
  }
  
  app.get("/actor/:id", async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const actor = await getActorById(id);
  
      res.status(200).send(actor)
  
    } catch (err:any) {
      res.status(400).send({message: err.message});
    }
  });
  
  app.get("/actor", async (req: Request, res: Response) => {
    try {
      const gender = req.query.gender
      const count = await countActorsByGender(gender as string);
  
      res.status(200).send({quantity: count})
  
    } catch (err:any) {
      res.status(400).send({message: err.message});
    }
  });
  
  //EXERCICIO 04
  app.put("/actor", async (req: Request, res: Response) => {
    try {
      await updateActor(
        req.body.id,
        req.body.salary
      )
      res.status(200).send({message: "Updated!"})
  
    } catch (err:any) {
      res.status(400).send({message: err.message});
    }
  });
  
  app.delete("/actor/:id", async (req: Request, res: Response) => {
    try {
      await deleteActor(
        req.params.id
      )
      res.status(200).send({message: "Deleted!"})
  
    } catch (err:any) {
      res.status(400).send({message: err.message});
    }
  }); 