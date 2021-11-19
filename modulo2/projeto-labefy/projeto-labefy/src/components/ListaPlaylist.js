import React from "react";
import { render } from "@testing-library/react";
import axios from "axios";
import styled from "styled-components"


const ContainerLista = styled.div`
display: flex;
justify-content: space-between;
border: 1px solid black;
font-family: monospace;
width: 160px;
height: 40px;
margin: 10px;
padding: 10px;

`

export default class ListaPlaylist extends React.Component {
    state = {
        playlists: [],
        id: ""

    }

    componentDidMount = () => {
        this.pegarPlaylists()
    }

    pegarPlaylists = async () => {
        try {
            const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
            const resposta = await axios.get (url, {
                headers: {
                    authorization: "evelyn-oliveira-carver"
                }
            })
            this.setState({playlists:resposta.data.result.list})
            console.log(resposta.data.result.list) 
      
        } catch (erro){
            alert ("Erro")
            console.log(erro)
        }
    }
    
    
    deletarPlaylists = async (id) => {

        alert("Playlist deletada com sucesso!")

        try {
            const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists${id}'
            const resposta = await axios.delete(url, {
                headers: {
                    Authorization: "evelyn-oliveira-carver"
                }
            })

            this.pegarPlaylists()

        }catch (error) {
            alert("Aconteceu um erro!")
            console.log(error.response.data)
        }
    }


    render(){

        const listarPlaylists = this.state.playlists.map((playlist) => {
            return (

                <ContainerLista>
                    <p>{playlist.name}</p>
                    <button onClick={()=>this.deletarPlaylists(playlist.id)}>x</button>
                </ContainerLista>
            )

        })
        return (
            <div>{listarPlaylists}</div>
        )
    }
}