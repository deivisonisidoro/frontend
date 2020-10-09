import React from 'react';
import Header from "./components/Header"
import {GlobalStyle} from './styles.js'
import Routes from "./routes"
const App = () => {
  return (
    <div>
      
        <GlobalStyle/>
        <Header/>
        <Routes/>
      
    </div>
  );  
}

export default App;
