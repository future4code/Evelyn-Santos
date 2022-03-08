import { Request, Response } from "express"
import { addProduct } from "./addProduct";

export const createProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, price, img_url } = req.body

        if (!name || !price || !img_url) {
            throw new Error("todos valores devem ser informados")
        }

        await addProduct(
            Date.now().toString(),
            name as string,
            price as number,
            img_url as string
        );

        res.send("Produto cadastrado")

    } catch (error) {
        if (error instanceof Error) {
            res.send({ message: error.message })
        } else {
            res.send({ message: "Erro inesperado" })
        }
    }
} 