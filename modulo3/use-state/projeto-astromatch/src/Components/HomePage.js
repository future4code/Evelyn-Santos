import axios from "axios";
import {useState, useEffect} from "react";

function HomePage () {
 
  const [profile, setProfile] = useState ({})


  const getProfile = () => {
      axios.get ("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/evelyn/person")
      .then((resposta) => {
          const newProfile = resposta.data.profile
          setProfile(newProfile)

      })
      .catch((erro) => {
        console.log(erro.response)
      })
  }

  useEffect(() => {
    getProfile()
  }, [])

  return (
    <div>
      {
        profile.id ? 
        <p>{profile.name}</p> : 
        <p>Perfil não encontrado!</p>

      }
    </div>


    
  )















}


export default HomePage;