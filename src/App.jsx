import React from 'react';
import Header from './components/Header';
import Post from './components/Post';
import TechnologyPost from './components/TechnologyPost';
import './App.css';
import './naaaavbar.css';
import { useState } from 'react';
function App() {
  const [active, setMode] = useState(false);
  const Togglemode = () => {
    setMode(!active)
  } 
  return (
    
  <div className='App'>
    <div>
      <div className={active ? 'icon iconActive' : 'icon' } onClick={Togglemode}>
        <div className='hamburguer hamburguerIcon'></div>
        </div>
      </div>
        <div className={active ? 'menu menuOpen' : 'menu menuClose'}>
          <div className='list'>
            <ul className='listItems'>
            <li>Home</li>
            <li>Produtos</li>
            <li>Contato</li>
            <li>Sobre nós</li>
            
            </ul>
          </div>
        </div>
          <TechnologyPost />
          <Post />
          <br /><br />
          <button class="h15">Clique aqui para cadastrar seu email e receber notificações</button>
  </div>
    
  );
}

export default App;
