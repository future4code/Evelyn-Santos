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

const ButtonH = styled.button`
border: 1px solid green;
border-radius: 50%;
width: 70px;
height: 70px;
color: green;


`

const ButtonX = styled.button`
border: 1px solid red;
border-radius: 50%;
width: 70px;
height: 70px;
color: red;

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
      { profile.photo ? <p>{profile.photo}</p> : <p>Erro</p> }

      <div>
        <ButtonH onClick={heartButton}>H</ButtonH>
        <ButtonX onClick={xButton}>X</ButtonX>
      </div>
    </Container>


    
  )















}


export default HomePage;