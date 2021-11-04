import React from 'react';
import styled from 'styled-components';
;

const ContainerGrande=styled.div`
display: flex;
align-items: center;
flex-direction: column;
align-items: center;
margin-bottom: 10px;
justify-items: flex-start;
`


function App() {
  return (
    <div className="App">
      <ContainerGrande>
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://i.postimg.cc/wj7h9Qs2/foto.jpg" 
          nome="Evelyn Oliveira" 
          descricao="Olá, eu sou a Evelyn, estudante da Labenu e uma entusiasta em programação!"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </ContainerGrande>

      
        
        {/* <ContainerPequeno>
          imagem="https://i.postimg.cc/FHznw6gH/streamline-icon-email-action-unread-48x48.png" 
          nome=" E-mail" 
          descricao="e-mail@e-mail.com"
           

          
          imagem="https://i.postimg.cc/Bv8kPzXV/streamline-icon-pin-48x48.png" 
          nome="Endereço" 
          descricao="Rua Numero 2"
          


      </ContainerPequeno> */}
      

      <ContainerGrande>
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://i.postimg.cc/FsZVGKjt/girl-working-on-computer.png" 
          nome="NOSSO IPANEMA" 
          descricao="Gerente Admnistrativo e Financeiro" 
        />
        
        <CardGrande 
          imagem="https://i.postimg.cc/FsZVGKjt/girl-working-on-computer.png" 
          nome="MPGP HOLDING" 
          descricao="Controladora" 
        />
      </ContainerGrande>

      <ContainerGrande>
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </ContainerGrande>
    </div>
  );
}

export default App;
