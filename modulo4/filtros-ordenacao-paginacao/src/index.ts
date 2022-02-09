import { app } from "./app";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getAllUsersByName } from "./endpoints/getAllUsersByName";
import { getAllUsersByType } from "./endpoints/getAllUsersByType";
import { getAllUsersOrder } from "./endpoints/getAllUsersOrder";
import {getAllUsersRecipe} from "./endpoints/getAllUsersRecipe";



app.get("/users/byname", getAllUsersByName) // 1- a
app.get("/users/page", getAllUsersRecipe)

app.get("/users/:type", getAllUsersByType) // 1- b
app.get("/users/:sort/order", getAllUsersOrder)

app.get("/users", getAllUsers) 