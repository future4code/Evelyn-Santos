import React from "react";
import axios from "axios";
import { render } from "@testing-library/react";
import CriarPlaylist from "./components/CriarPlaylist";
import ListaPlaylist from "./components/ListaPlaylist";

// 



export default class App extends React.Component {
  state={
    playlist: [],
    inputPlaylist: ""
  }

  componentDidMount(){
    this.getAllPlaylists()
  }

  
  getAllPlaylists = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    axios.get( url, {
      headers: {
        authorization: "evelyn-oliveira-carver" }
    }).then((resp) => {
      this.setState({playlist: resp.data.result.list})
      console.log(resp.data.result.list)
    }).catch((error) => {
      console.log(error)
    })
  };

  onChangeinputPlaylist = (event) => {
    this.setState ({inputPlaylist: event.target.value})
    console.log(this.state.inputPlaylist)
  }

  onClickInputPlaylist = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    let body = {
      name: this.state.inputPlaylist
    }
    axios.post(url, body, {
      headers:{
        authorizarion: "evelyn-oliveira-carver"
      }
    }).then((resp) => {
      console.log(resp.data.result.list)
      this.getAllPlaylists()
    }).catch((error) => {
      console.log(error.data)
    })
  }



 

  render(){

    const gotPlaylist = this.state.playlist.map((playlist) => {
      return <li key={playlist.id}>{playlist.name}</li>
    })



    return(
      <div>
        
        <CriarPlaylist> </CriarPlaylist>
        <ListaPlaylist> </ListaPlaylist>
        

        
     
    
       
      </div>
    )
  }
}
