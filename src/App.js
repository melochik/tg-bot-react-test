
import { useEffect } from 'react';
import './App.css';

const telegram = window.telegram.WebApp 

function App() {

  useEffect( () =>{
    telegram.ready()
  })

  const onClose = () => {
    telegram.close();
  }
  return (
    <div className="App">
       work
       <button onClick={onClose}>close</button>
    </div>
  );
}

export default App;
