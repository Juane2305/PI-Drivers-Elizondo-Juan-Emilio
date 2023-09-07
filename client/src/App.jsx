import './App.css'
import {Routes, Route} from 'react-router-dom';
import LandingPage from './views/Landing Page/LandingPage';
import Home from './views/Home/Home';
import axios from 'axios';


function App() {

  // function onSearch(name) {
  //   axios(`http://localhost:3001/drivers/?name=${name}`).then((response)=>{

  //   })
  // }

  return (
      <div>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/home' element={<Home/>}/>
        </Routes>
      </div>
  )
}

export default App
