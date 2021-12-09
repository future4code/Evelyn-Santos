import {useHistory} from "react-router-dom";


function AdminHomePage () {

    const history = useHistory()

    const loginAdmin = () => {
        history.push("/admin-trips-list")
    }
  

return(
    <div>
    <h3>Area Admin</h3>
    <button onClick={loginAdmin}>Voltar</button>
    </div>
)

}

export default AdminHomePage;