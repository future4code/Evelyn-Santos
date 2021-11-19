import React from "react";
import { render } from "@testing-library/react";
import axios from "axios";
import styled from "styled-components"


const ContainerPlaylist = styled.div`
display: flex;
justify-content: space-around;
border: 1px solid black;

`

export default class ListaPlaylist extends React.Component {
    state = {
        playlists: []

    }

    componentDidMount = () => {
        this.pegarPlaylist()
    }

    pegarPlaylists = async () => {
        try {
            const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
            const resposta = await axios.get (url, {
                headers: {
                    authorization: "evelyn-oliveira-carver"
                }
            })
            this.setState({playlist:resposta.data.result.list})
            console.log(resposta.data.result.list) 
      
        } catch (erro){
            alert ("Erro")
            console.log(erro)
        }
    }
    
    deletarPlaylist = async (id) => {
        try {
            const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists ${id}'
            const resposta = await axios.delete(url, {
                headers: {
                    authorization: "evelyn-oliveira-carver"
                }
            })

            this.pegarPlaylist()

        }catch (error) {
            alert("Aconteceu um erro!")
            console.log(error.response.data)
        }
    }


    render(){

        const listarPlaylists = this.state.playlists.map((playlist) => {
            return (
                <ContainerPlaylist>
                    <p>{playlist.name}</p>
                    <button onClick={this.deletarPlaylist(playlist.id)}>X</button>
                </ContainerPlaylist>
            )

        })
        return (
            <div>{ListaPlaylist}</div>
        )
    }
}