import axios from 'axios';
import styled from 'styled-components';
import {useState, useEffect} from 'react';

function MatchesPage () {
    const [listMatches, setListMatches] = useState([])
    const [profile, setProfile] = useState ({})
    const [photo, setPhoto] = useState ({})
    const [name, setName] = useState ({})

    const getMatches = () => {
        console.log("entrou")
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:evelyn/matches"
        axios.get(url)
        .then((resposta)=> {
            console.log("entrou no then")
            const newMatch = resposta.data.matches
            setListMatches(newMatch)
            setProfile(resposta.data.profile)
            setPhoto(resposta.data.profile.photo)
            setName(resposta.data.profile.name)
            
        })
        .catch ((error)=> {
            console.log("entrou no catch")
        })
        console.log("saiu")
    }









}

export default MatchesPage;