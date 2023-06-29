import './App.css'
import Cards from './components/Cards.jsx';
import Nav from "./components/Nav"
import { useState } from 'react';
import axios from 'axios';

function App() {
   const [characters, setCharacters] = useState([])
   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   });
   }

   const onClose = (id) => {
      const personajeFiltrados = characters.filter((character) =>
         character.id !== parseInt(id)
      )
      setCharacters(personajeFiltrados)
   }
   

   return (
      <div className="App">
         <Nav onSearch = {onSearch}/>
         <Cards onClose = {onClose} characters={characters} />
      </div>
   );
}

export default App;
