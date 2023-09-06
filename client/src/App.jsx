import './App.css'
import {Routes, Route} from 'react-router-dom';
import LandingPage from './components/Landing Page/LandingPage';
import Home from './components/Home/Home';

function App() {
  
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
