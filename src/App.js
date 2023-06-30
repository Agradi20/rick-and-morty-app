
import './App.css'
import Cards from './components/Cards/Cards.jsx';
import Nav from "./components/NavBar/Nav"
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Form';

function App() {
   const [characters, setCharacters] = useState([])
   const [access, setAccess] = useState(false);

   const navigate = useNavigate();

   useEffect(() => {
      !access && navigate("/")
   }, [access]);


   const EMAIL = "agradimanuel@gmail.com";
   const PASSWORD = "pass1234";

   const login = (user) => {
      if(user.password === PASSWORD && user.email === EMAIL) {
         setAccess(true);
         navigate("/home");
      } 
   }

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

   const location = useLocation();

   return (
      <div className="App">
         {
            location.pathname !== "/" && <Nav onSearch = {onSearch}/>
         }
         <Routes>
        <Route path="/" element={<Form Login = {login}/>} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
      </div>
   );
}

export default App;
