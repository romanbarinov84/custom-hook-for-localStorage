
import { useState } from 'react';
import './App.css';

function App() {
  const [name , setName] = useState("");

 return (
  <>
  <h1 style={{color:"red"}}>Your name is : <span style={{color:"black"}}>{name}</span></h1>
  <input 
  type="text" 
  onChange={(e) => {
   const value = e.target.value;
   const formatted = value.charAt(0).toLocaleUpperCase() + value.slice(1);
   setName(formatted)
  }

  }
  placeholder='Enter your name'

  />
  <button onClick={() => setName("")}>Clear</button>
  </>
 )
}

export default App;
