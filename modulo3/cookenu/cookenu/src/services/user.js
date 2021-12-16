import axios from "axios";
import {BASE_URL} from "../constants/urls"
import { goToRecipes } from "../routes/coordinators";


export const login = (body, clear, history, setAnotherLog) => {
    axios.post (`${BASE_URL}/user/login`, body)
    .then((res)=>{
        localStorage.setItem("token", res.data.token)
        clear()
        goToRecipes(history)
        setAnotherLog("Logout")
    })
    .catch((err)=> alert(err.response.data.message)

    )
    
    
}

export const signUp = (body, clear, history) => {
    axios.post (`${BASE_URL}/user/signup`, body)
    .then((res)=>{
        localStorage.setItem("token", res.data.token)
        clear()
        goToRecipes(history)
    })
    .catch((err)=> alert(err.response.data.message)

    )
    
    
}