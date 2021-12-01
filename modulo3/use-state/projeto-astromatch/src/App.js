import './App.css';
import axios from "axios";
import {useState, useEffect, Profiler} from "react";
import HomePage from './Components/HomePage';
import MatchesPage from './Components/MatchesPage';


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
      {changePage()}
    </div>
  );
}

export default App;
