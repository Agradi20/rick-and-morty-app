
import './App.css'
import Cards from './components/Cards/Cards.jsx';
import Nav from "./components/NavBar/Nav"
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';

function App() {
   const [characters, setCharacters] = useState([])
   const [access, setAccess] = useState(false);

   const navigate = useNavigate();

   useEffect(() => {
      !access && navigate("/")
   }, [access, navigate]);


   async function login(userData) {
      try {
         const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login/';
         const response = await axios(URL + `?email=${email}&password=${password}`)
         const data = response.data
         const { access } = data;
         setAccess(access);
         access && navigate('/home');
      }
    catch (error) {
      window.alert(error.message)
   }
}


async function onSearch(id) {
   try {
      const response = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
      const data = response.data
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   } catch (error) {
      window.alert(error.message);
   }

};


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
         location.pathname !== "/" && <Nav onSearch={onSearch} />
      }
      <Routes>
         <Route path="/" element={<Form Login={login} />} />
         <Route
            path="/home"
            element={<Cards characters={characters} onClose={onClose} />}
         />
         <Route path="/about" element={<About />} />
         <Route path="/detail/:id" element={<Detail />} />
         <Route path="/Favorites" element={<Favorites />} />
      </Routes>
   </div>
);

   }
export default App;
