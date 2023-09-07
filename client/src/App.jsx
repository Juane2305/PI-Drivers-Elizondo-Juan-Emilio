import './App.css'
import {Routes, Route} from 'react-router-dom';
import LandingPage from './components/Landing Page/LandingPage';
import Card from './components/Card/Card';
import axios from 'axios';
import { useState } from 'react';


function App() {


  const [drivers, setDrivers] = useState([]);
  
  function onSearch(id) {
    axios(`http://localhost:3001/drivers/${id}`).then((response) => {
      
    })
  }



  return (
      <div>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/home' element={<Card/>}/>
        </Routes>
      </div>
  )
}

export default App
