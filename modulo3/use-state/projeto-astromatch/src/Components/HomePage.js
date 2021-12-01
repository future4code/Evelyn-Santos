import axios from "axios";
import styled from "styled-components";
import {useState, useEffect} from "react";


const Container = styled.div `
border: 1px solid black;
border-radius: 6px;
width: 400px;
height: 600px;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
position: absolute;

`

const Header = styled.div`
display: flex;
justify-content: space-between;
margin-top: 2%;
margin-bottom: 2%;



`

function HomePage () {
 
  const [profile, setProfile] = useState ({})



  const getProfile = () => {
      axios.get ("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/evelyn/person")
      .then((resposta) => {
          const newProfile = resposta.data.profile
          setProfile(newProfile)

      })
      .catch((erro) => {
        alert(erro.response)
      })
  }

  useEffect(() => {
    getProfile()
  }, [])

  
  const heartButton = () => {
    console.log("funciona")
  }
  
  const xButton = () => {
    console.log("não deu")

  }

  return (
    <Container>
      <Header>
        {/* <p>ASTROMATCH</p> <button onClick={props.goToMatch}> Match</button> */}
      </Header>
      { profile.id ? <p>{profile.name}</p> : <p>Perfil não encontrado!</p> }
      { profile.photo ? <p>{profile.photo}</p> : <p>Perfil não encontrado!</p> }

      <div>
        <button onClick={heartButton}>H</button>
        <button onClick={xButton}>X</button>
      </div>
    </Container>


    
  )















}


export default HomePage;