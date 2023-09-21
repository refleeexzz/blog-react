import React from 'react';
import Header from './components/Header';
import Post from './components/Post';
import TechnologyPost from './components/TechnologyPost';
import './App.css';
import './naaaavbar.css'
import Navbar from './components/Navbar';
import './index.css'
function App() {
  return (
    
      <div>
      <Navbar/>
 
        <TechnologyPost />
        <Post />
        <br /><br />
        <button class="h15">Clique aqui para cadastrar seu email e receber notificações</button>
      </div>
    
  );
}

export default App;
