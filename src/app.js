import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './app.css';
import MainDisplay from "./maindisplay.jsx"
import Header from "./header.jsx"
function App() {

  const [characters, setCharacters] = useState([]);
  
  
  

  const getInfo = () =>{
    fetch(`https://rickandmortyapi.com/api/character/?location=c137`,{headers:{Accept: 'application/json'}})
    .then(res => res.json())
    .then(data => {
      setCharacters(data.results)
      console.log(characters)

    })
  }

  


  useEffect(()=>{
    getInfo();
  },[])

  return (
   <div>
    <Header></Header>
    {characters.length > 0 && <MainDisplay imgSrc={characters}></MainDisplay>}
   </div>
  );
}

export default App;
