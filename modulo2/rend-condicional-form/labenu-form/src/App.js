import react from 'react';
import logo from './logo.svg';
import './App.css';
import 'styled' from 'styled-components';
import 'etapa1' from './components etapa1';
import 'etapa2' from './components etapa2';
import 'etapa3' from './components etapa3';

export default class App extends React.Component {
state = {
  etapa: 1,

};

proximaEtapa = ()  => {
  this.setState({
    etapa: 2
  });
};

proximaEtapa = () => {
  this.setState ({
    etapa: 3
  });
}

proximaEtapa = () => {
  this.setState ({
    etapa: 4
  });
}
}


function App() {
  return (
    <div>
    </div>
  );
}

export default App;
