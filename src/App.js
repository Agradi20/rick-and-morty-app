import './App.css'
import Cards from './components/Cards/Cards.jsx';
import Nav from "./components/NavBar/Nav"
import { useState } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';

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
         <Routes>
        <Route path="/" element={<h1>Welcome</h1>} />
        <Route
          path="/Home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/About" element={<h1>About</h1>} />
        <Route path="./components/Detail/:id">Detail</Route>
      </Routes>
      </div>
   );
}

export default App;
