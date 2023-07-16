import './App.css';
import React from 'react';


function App() {
  return (
    <div className="App">
      <form action="POST">
      <label htmlFor="marca">MARCA</label>
      <input type="text" name='marca' id='marca' className='marca' /><br />
      <label htmlFor="modelo">MODELO</label>
      <input type="text" name="modelo" id="modelo" /><br />
      <label htmlFor="date">AÑO</label>
      <input type="date" name='date' id='date'/><br />
      </form>
      </div>
  











  

    
  );
}

export default App;
