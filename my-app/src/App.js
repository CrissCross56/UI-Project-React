import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
import MainDisplay from "./MainDisplay.jsx"
import Header from "./Header.jsx"
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
