import React from "react";
import { render } from "@testing-library/react";
import axios from "axios";
import styled from "styled-components"

export default class CriarPlaylist extends React.Component {
    state = {
        nomePlaylist: ""
    }

    onChangeInputNome = (event) => {
        this.setState({nomePlaylist: event.targer.value})
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
                
                    <input>
                    placeholder ="Digite o nome da playlist"
                    value = {this.state.nomePlaylist}
                    onChange = {this.onChangeInputNome}
                    </input>
                    
                
            </div>
        )
    }
}