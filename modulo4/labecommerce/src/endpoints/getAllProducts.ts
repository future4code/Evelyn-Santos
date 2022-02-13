
import { Request, Response } from "express"
import { selectProducts } from "./selectProducts";

export const getAllProducts = async (req: Request, res: Response): Promise<void> => {
    try {

        const products = await selectProducts();

        res.send({ products })

    } catch (error) {
        if (error instanceof Error) {
            res.send({ error, message: error.message })
        } else {
            res.send({ message: "Erro inesperado" })
        }
    }
} 