import {useHistory} from "react-router-dom";


const CreateTripPage = () => {

    const history = useHistory()

    const goBackAdmin = () => {
        history.goBack()
    }

    return (
        <div>
            <h1>Escolha um Destino</h1>
            <input/>
            <input/>
            <input/>
       

            

            <button onClick={goBackAdmin}>Voltar</button>
            <button>Criar Viagem</button>
        </div>
    )

    



}

export default CreateTripPage;
