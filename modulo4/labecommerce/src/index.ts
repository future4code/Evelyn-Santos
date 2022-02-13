import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { getAllUsers } from "./endpoints/getAllUsers"
import { createUser } from "./endpoints/createUser"
import {createProduct} from "./endpoints/createProduct"
// import { getAllProducts } from "./endpoints/getAllProducts"
// import { createPurchase } from "./endpoints/createPurchase"
// import { getPurchase } from "./endpoints//getPurchase"

dotenv.config()

export const app = express()

app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003 ,()=>{
console.log("server running in", process.env.PORT || 3003)
})

app.get("/users", getAllUsers)  // Busca usuários

app.post("/users", createUser) // Cadastro de usuário

app.post("/products", createProduct)  //Cadastro de produtos

// app.get("/products", getAllProducts)  //Busca por todos produtos


// app.post("/purchases", createPurchase)  //Cadastro de compras

// app.get("/users/:user_id/purchases", getPurchase)  //Consulta de compras por usuário