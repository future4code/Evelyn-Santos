import React from "react";
import { render } from "@testing-library/react";
import axios from "axios";
import styled from "styled-components"


const ContainerInput = styled.div`
/* display: flex;
justify-content: space-between;
border: 1px solid black;
font-family: monospace;
width: 160px;
margin: 10px;
padding: 10px; */
`

const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  `


export default class CriarPlaylist extends React.Component {
    state = {
        nomePlaylist: "",
        
    }

    onChangeInputNome = (event) => {
        this.setState({nomePlaylist: event.target.value})
        
    }

    criarPlaylist = async () => {
        try {
            const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
            const body = {
                name: this.state.nomePlaylist
            }
            const resposta = await axios.post(url, body, {
                headers: {
                    authorization: "evelyn-oliveira-carver"
                }
            }) 

            alert("Playlist criada!")
            this.setState({nomePlaylist:""})
            console.log(resposta)
        } catch (error) {
            console.log(error.response)}


    }
    
    render(){
        return(
                    <div>
                    <ContainerInput>
                    <input
                    placeholder ="Crie sua playlist"
                    value = {this.state.nomePlaylist}
                    onChange = {this.onChangeInputNome}/>
                    <button onClick={this.criarPlaylist}> Criar</button>
                    </ContainerInput>
                    </div>
                    
                    
                
            
        )
    }
}