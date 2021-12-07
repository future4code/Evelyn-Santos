import axios from "axios";
import {createGlobalStyle} from "styled-components";
import styled from "styled-components";
import {useState, useEffect} from "react";
import HomePage from './Components/HomePage';
import MatchesPage from './Components/MatchesPage';


const GlobalStyle = createGlobalStyle`
html {
    min-height: 100%;
}
body {
margin:0;
padding:0;
background: linear-gradient(#eeaeca, #94e9c0);


}
`



function App() {

  const [page, setPage] = useState("HomePage")

  const changePage = () => {

    switch (page){
      case "HomePage":
        return <HomePage
        goToMatch={goToMatch}/>
      case "MatchesPage":
        return <MatchesPage
        goToHome={goToHome}/>
      default: 
      return <div>Página não encontrada!</div>  

    }
  }

  const goToMatch = () => {
  setPage("MatchesPage")
  }  

  const goToHome = () => {
  setPage("HomePage")
  }
  


 
  return (
    <div>
      <GlobalStyle/>
      
      {changePage()}
    </div>
  );
}

export default App;
