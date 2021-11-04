import React from 'react';
import styled from 'styled-components';

const ContainerGrande=styled.div`
display: flex;
align-items: center;
flex-direction: column;
align-items: center;
margin-bottom: 10px;
justify-items: flex-start;

const 
`

function CardGrande(props) {
    return (
        <ContainerGrande>
            <img src={ props.imagem } />
            
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            
        </ContainerGrande>
    )
}

export default CardGrande;