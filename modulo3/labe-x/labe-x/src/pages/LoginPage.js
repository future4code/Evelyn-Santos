import react from "react";
import {Link} from "react-router-dom";

const LoginPage = () => {
    return<div>
        <h1>Login</h1>
        <input placeholder="E-mail"/>
        <input placeholder="Senha"/>

        <Link to="/">Voltar</Link>
        <Link to="/adminhome">Entrar</Link>
    </div>



}

export default LoginPage;