import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

`

// const listaDeUsuarios= Post.map()
// console.log(listaDeUsuarios)

class App extends React.Component {
  state = {
    posts: [
      {
        nomeUsuario: "florzinha",
        fotoUsuario: "https://i.postimg.cc/LXrdm2PR/florzinha.png",
        fotoPost: "https://picsum.photos/201/150"
      },
      {
        nomeUsuario: "lindinha",
        fotoUsuario: "https://i.postimg.cc/BvnfghsW/lindinha.png",
        fotoPost: "https://picsum.photos/202/150"
      },
      {
        nomeUsuario: "docinho",
        fotoUsuario: "https://i.postimg.cc/gJwF9nnN/docinha.png",
        fotoPost: "https://picsum.photos/203/150"
      }
    ],
    inputNomeUsuario: "",
    inputFotoUsuario: "",
    inputFotoPost: ""
  }  

  adicionaPost = () => {
    const novoPost = {
      nomeUsuario: this.state.inputNomeUsuario,
      fotoUsuario: this.state.inputFotoUsuario,
      fotoPost: this.state.inputFotoPost
    }

    const novosPosts = [...this.state.posts, novoPost]

    this.setState({ posts: novosPosts })
  }

  onChangeInputNome = (event) => {
    this.setState({ inputNomeUsuario: event.target.value })
  }

  onChangeInputFoto = (event) => {
    this.setState({ inputFotoUsuario: event.target.value })
  }

  onChangeInputFotoPost = (event) => {
    this.setState({ inputFotoPost: event.target.value })
  }

  render() {

  

    const listaDePosts = this.state.posts.map((post) => {
      return(
        <Post
          nomeUsuario = {post.nomeUsuario}
          fotoUsuario = {post.fotoUsuario}
          fotoPost = {post.fotoPost}
        />
      )
    })

    return (
      <MainContainer>
        <div>
          <input
            value = {this.state.inputNomeUsuario}
            onChange = {this.onChangeInputNome}
            placeholder = {"Nome do Usuário"}
          />
          <input
            value = {this.state.inputFotoUsuario}
            onChange = {this.onChangeInputFoto}
            placeholder = {"Foto do Usuário"}
          />
          <input
            value = {this.state.inputFotoPost}
            onChange = {this.onChangeInputFotoPost}
            placeholder = {"Foto do Post"}
          />
          <button onClick = {this.adicionaPost}>Adicionar Post</button>
        </div>
        <div>{listaDePosts}</div>
      </MainContainer>
    );
  }
}

export default App;
