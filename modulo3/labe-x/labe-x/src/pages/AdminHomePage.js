import react from "react";
import {Link} from "react-router-dom";


const AdminHomePage = () => {
    return<div>
        <h1>Painel do Admin</h1>
        <Link to="/">Voltar</Link>
        <Link to="/admin/trips/create">Criar Viagem</Link>
        
        <button>Logout</button>

    </div>



}

export default AdminHomePage;