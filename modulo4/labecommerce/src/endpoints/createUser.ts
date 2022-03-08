import { Request, Response } from "express"
import { addUser } from "./addUser"


export const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, email, password } = req.body

        if (!name || !email || !password) {
            throw new Error("Um ou mais campos em branco, tente novamente!")
        }

        await addUser(
            Date.now().toString(),
            name as string,
            email as string,
            password as string
          );

        res.send("Usuário cadastrado")

    } catch (error) {
        if (error instanceof Error) {
            res.send({ message: error.message })
        } else {
            res.send({ message: "Ocorreu um erro, tente novamente!" })
        }
    }
} 