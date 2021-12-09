import {useHistory} from "react-router-dom";
import Header from "../components/Header";

const HomePage = () => {

    const history = useHistory ()

    const seeTrip = () => {
        history.push("/trips/:list")
    }


    const adminPage = () => {
        history.push("/login")
    }


    return (
        <div>
            <Header/>
            <button onClick={seeTrip}>Ver Viagens</button>
            <button onClick={adminPage}>Area Admin</button>
        </div>
    )
   
}

export default HomePage;