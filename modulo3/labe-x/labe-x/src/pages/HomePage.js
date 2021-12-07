import react from "react";
import {Link} from "react-router-dom";
import Header from "../components/Header";

const HomePage = () => {
    return <div>
<Header/>
<Router>
<h1> Bem Vindes a Labe-X</h1>
<Link to="/admin/trips/lists">Viagens</Link>
<Link to="admin">Area do Admin</Link>
</Router>
    </div>
}

export default HomePage;