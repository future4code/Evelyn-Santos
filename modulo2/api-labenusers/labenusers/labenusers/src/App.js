import logo from './logo.svg';
import './App.css';
import axios from "axios";
import React from "react";
import style from "styled-components";
// import { UsersList } from './ListaUsuarios';


export default class App extends React.Component {
  state = {
    arrayUsuarios: [],
    inputNome:"",
    inputEmail:"",
    userID: "",
    usuario:{},

  };

  onChangeNome = (event) => {
    this.setState ({inputNome: event.target.value});

  }

  onChangeEmail = (event) => {
    this.setState({inputEmail: event.target.value});

  }

  onChangeID = (event) => {

  }

  onClick = (event) => {
    
  }

  enviarDados = (event) => {
    const body = {
      name: this.state.inputNome,
      email: this.state.inputEmail
    }
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, {
      headers: {
        authorization: 'evelyn-oliveira-carver'
      }
    })
    .then(() => {
      console.log("Sucesso")
    })
    .catch((erro) => {
      console.log(erro.response)
    })

  }

  recebeUsuarios = (event) => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',{
      headers: {
        authorization: 'evelyn-oliveira-carver'
      }
    })
    .then((resposta) => {
      this.setState({arrayUsuarios: resposta.data})
    })
    .catch((erro) => {
      console.log(erro.response)
    })
  }  



  render () {

  return (

    
      <div>
      
        <input
        placeholder="Nome"
        value={this.state.inputNome}
        onChange={this.onChangeNome}
        />   
      
      
      
      
        <input
        placeholder="Email"
        value={this.state.inputEmail}
        onChange={this.onChangeEmail}
        />

      <button onClick={this.enviarDados}> Cadastrar </button>
      </div>
   


  );

  }

}  