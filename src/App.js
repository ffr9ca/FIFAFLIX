import React from 'react';
import Menu from './components/Menu';

//Hot reload do react - faz update automático no brawser ao modificar na IDE
//Função retorna um JSX - [J]ava[S]cript [X]ML
function App() {
  return (
    <div>
      <nav>
        <Menu />
      </nav>
      <header>
        Hello Word!
      </header>
    </div>
  );
}

export default App;
