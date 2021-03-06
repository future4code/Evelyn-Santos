import styled from 'styled-components'

export const Card = styled.div`
display:flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
border: 1px solid #d9d9d9;
border-radius: 15px;
width:12.4rem;
height:15.8rem;
margin:0px 20px 40px;
font-family: "Zen Dots", cursive;
div {
    cursor: pointer;
    p{
        text-align: center;
    }
}
button {
    width: 6rem;
    border: none;
    border-radius: 8px;
    padding: 0.6rem;
}
`

export const CardImg = styled.img`
width:8rem;
height:8rem;
`