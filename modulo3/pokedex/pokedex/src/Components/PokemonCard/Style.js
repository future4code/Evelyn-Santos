import styled from 'styled-components'

export const Card = styled.section`
display:flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
border-radius: 13px;
width:12.4em;
height:15.8em;
margin:0px 25px 40px;
box-shadow: 0px 0px 0px 2px #B2B39F;

div {
    cursor: pointer;
    p{
        text-align: center;
    }
}
button {
    border: none;
    border-radius: 12px;
    padding: 10px;
    :hover {
   background-color: #FFDE00;

}
}
`

export const CardImg = styled.img`
width: 15px;
height: 15px;
`


