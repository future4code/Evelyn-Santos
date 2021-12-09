import styled from "styled-components";


export const Container = styled.div`
text-align: center;
margin: 30px 0;
    padding: 0;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;


`

export const HomeBox = styled.div`
margin-top:20%;

h1 {
    color: slategray;
}

`

export const LoginBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;


}
form {
    display: flex;
    flex-direction: column;
    align-items: center;
}
input {
    width: 300px;
    height: 35px;
    border-radius: 10px;
    border: 0.5px solid black;
    margin: 12px

}    

select {
    width: 500px;
    height: 40px;
    border-radius: 10px;
    margin: 10px;

}

`

export const CreateForm = styled.div`
display: flex;
flex-direction: column;
align-itens: center;

`
