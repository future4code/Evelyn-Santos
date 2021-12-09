import {useHistory} from "react-router-dom";
import {useState, useEffect} from "react";
import { TripsCard } from "../components/TripsCard";
// import {BASE_URL} from "/../constant/url"
import axios from "axios";
import styled from "styled-components";



const CardTrip = styled.div`
display: flex;

`

const ListTripsPage = () => {

    const [trips, setTrips] = useState ([])
    const [cards, setCards] = useState([])

    const getTrips = () => {
        axios
        .get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/evelyn-oliveira-carver/trips')
        .then(res => {
            setTrips(res.data.trips)
            let newListTrips = [...cards]
            const showList = newListTrips.map(item=> {
                return (
                    
                    <CardTrip key={item.id}>
                    
                    <h1>{item.name}</h1>
                    <p>
                    {item.description}
                    {item.planet}
                    {item.durationInDays}
                    {item.date}
                    </p>   
                    </CardTrip>  

                )
                
            })
        })
        .catch(err => {
            console.log(err, "erro lista")
        }, [])
    }





    // const getTrips = () => {
    //     axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/evelyn-oliveira-carver/trips`)
    //     .then((res)=> {
    //         setTrips (res.data)
    //     })
    //     .catch((err)=> {
    //         console.log(err)
    //     })
    // }

    useEffect(()=> {
        getTrips();
    },[]);


    const history = useHistory()

    const goBackHome = () => {
        history.goBack()
    }

    const applicationForm = () => {
        history.push("/trips-application")
    }

    console.log(trips)


    return (
        <div>

      

        <h2>Lista de Viagens</h2>

        {cards ? (cards.map(item=> {
            return(
                <TripsCard key={item.id}>
                <h2>{item.description}</h2>
                <h2>{item.planet}</h2>
                <h2>{item.duratioInDays}</h2>
                <h2>{item.date}</h2>
                </TripsCard>
            )
        })
    ) : ( 
     <p>Aguarde</p>
    )}
        

        <button onClick={goBackHome}>Voltar</button>
        <button onClick={applicationForm}>Increva-se</button>
        </div>
    )
    


}

export default ListTripsPage;