import express, { Express } from "express"
import { Request, Response } from "express"
import { productsList } from "./data";
import cors from 'cors'

export const app: Express = express();

app.use(express.json());
app.use(cors());


//teste
app.get("/test", (req: Request, res: Response) => {
    res.status(200).send("Hello World!")
})


//tipagem array de produtos
type Product = {
    id: string,
    name: string,
    price: number
}

//lista de produtos teste
const productsNewList: Product[] = productsList

app.get("/newlist", (req: Request, res: Response) => {
    res.status(200).send(productsNewList)
})

// criar novos produtos
app.post("/addnewproducts", (req: Request, res: Response) => {
    try {
        const { name, price } = req.body

        if (!name || (!price && price !== 0)) {
            throw new Error("Erro ao criar produto!")
        }
        if (price <= 0) {
            throw new Error("Preço não pode ser igual a zero!")
        }

        productsNewList.push({ id: Math.random().toString(), name: name, price: price })

        res.status(200).send(productsNewList)

    } catch (error: any) {
        switch (error.message) {
            case "Campos não informados":
                res.status(422)
                break

            case "Produto não pode ser igual a zero":
                res.status(422)
                break

            case "Produto já existe":
                res.status(409)
                break

            default:
                res.status(500)
        }

        res.send(error.message)
    }


})

//editar produto

app.put("/products/:id", (req: Request, res: Response) => {
    try {
        let editProduct = false
        const productId = req.params.id
        const { price, name } = req.body

        if ((!price || price !== 0) && !name) {
            throw new Error("Campos não informados")
        }

        if ((!price || price !== 0 || !name) {
            if (price) {
                for (let i = 0; i < productsNewList.length; i++) {
                    if (productId === productsNewList[i].id) {
                        productsNewList[i].price = price
                        editProduct = true
                    }

                }
            }


            if (name) {
                for (let i = 0; i < productsNewList.length; i++) {
                    if (productId === productsNewList[i].id) {
                        productsNewList[i].name = name
                    }
                }
            }

            if (!editProduct) {
                throw new Error("Produto não encontrado!")

                res.status(200).send(productsNewList)

            }
            catch (error: any) {
                switch (error.message) {
                    case "Produto não encontrado!":
                        res.status(404)
                        break

                    case "Preço não pode ser igual a zero":
                        res.status(422)
                        break

                    default:
                        res.status(500)
                        break

                }
                res.send(error.message)
            }
        })





    }
})






