import axios from "axios";
import { useState } from "react"
import { useHistory } from "react-router-dom";
import Header from "../components/Header";
import { LoginBox } from "../styles";


const LoginPage = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }


    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const signIn = () => {
        const body = {
            email: email,
            password: password
        }
        console.log(email,password)
    }
    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/evelyn-oliveira-carver/login`,)
    .then ((res)=> {
        console.log(res.data.token);
        localStorage.setItem("token", res.data.token);
        history.push("/admin/trips/list")
    })
    .catch((err) => {
        console.log(err.res)
    })



    const history = useHistory()

    const goBackHome = () => {
        history.goBack()
    }

    return (
                <LoginBox>
                <Header/>
                
                <input
                placeholder={"E-mail"}
                type="email"
                value={email}
                onChange={onChangeEmail}/>
                
                <input
                placeholder={"Senha"}
                type="password"
                value={password}
                onChange={onChangePassword}/>

                <button>Entrar</button>

                <button onClick={goBackHome}>Voltar</button>
                
                
                </LoginBox>



    )



}

export default LoginPage;