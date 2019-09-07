import React from 'react';
import './App.css';
import Header from '../../components/Header/Header'
import Mainbody from '../../components/Mainbody/Mainbody'
import Splash from '../../components/Splash/Splash'
function App() {
  return (
    <div className="App">
      <Header/>
      <Splash />
      <Mainbody />
    </div>
  );
}

export default App;
