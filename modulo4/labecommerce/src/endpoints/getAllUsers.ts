import { Request, Response } from "express"
import { selectUsers } from "./selectUsers";

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {

        const users: any = await selectUsers();

        if (users.length === 0) {
            throw new Error("Não existem usuários cadastrados")
        }

        res.send({ users })

    } catch (error) {
        if (error instanceof Error) {
            res.send({ message: error.message })
        } else {
            res.send({ message: "Erro inesperado" })
        }
    }
} 

