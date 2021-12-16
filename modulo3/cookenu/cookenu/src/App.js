import React from "react";
import Router from "./routes/Router"
import theme from "./constants/theme";
import {ThemeProvider} from "@material-ui/core/styles"
import {useState} from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";



function App() {
  const token = localStorage.getItem("token")
  const [anotherLog, setAnotherLog] = useState(token ? "Logout" : "Login")
  
  
  


  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Header anotherLog={anotherLog} setAnotherLog={setAnotherLog}/>
      <Router setAnotherLog={setAnotherLog}/>

      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
