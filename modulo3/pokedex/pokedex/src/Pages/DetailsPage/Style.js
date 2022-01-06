import styled from 'styled-components';
import { colorType } from '../../Constants/colorType';

export const MainContainer = styled.main `
`

export const CardPokemon = styled.div`
    background: ${props => props.type && colorType [props.type]};
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        width: 15%;
    }
    h4 {
    display: flex;
    justify-content: flex-end;
    margin-left: 4rem;
    cursor: pointer;
}
`

export const DescriptionContainer = styled.div `
display: flex;
justify-content: space-evenly;
`

export const TypesMovesContainer = styled.div `
`