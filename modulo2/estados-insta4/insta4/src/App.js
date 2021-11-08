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
  






  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'florzinha'}
          fotoUsuario={'https://i.postimg.cc/LXrdm2PR/florzinha.png'}
          fotoPost={'https://picsum.photos/201/150'}
        />
      
        <Post
        nomeUsuario={'lindinha'}
        fotoUsuario={'https://i.postimg.cc/BvnfghsW/lindinha.png'}
        fotoPost={'https://picsum.photos/202/150'}
        />


        <Post
          nomeUsuario={'docinho'}
          fotoUsuario={'https://i.postimg.cc/gJwF9nnN/docinha.png'}
          fotoPost={'https://picsum.photos/203/150'}
        />
      </MainContainer>
    );
  }
}

export default App;
