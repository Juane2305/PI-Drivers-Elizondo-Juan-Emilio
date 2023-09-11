import './App.css'
import {Routes, Route} from 'react-router-dom';
import LandingPage from './views/Landing Page/LandingPage';
import Home from './views/Home/Home';
import Detail from './views/Detail/Detail';
import Create from './views/Create/Create';



function App() {


  return (
      <div className='App.css'>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route exact path='/home' element={<Home/>}/> /*coloco exact path para que no se pise la ruta con la de detail*/
          <Route path='/home/:id' element={<Detail/>}/>
          <Route path='/create' element={<Create/>}/>
        </Routes>
      </div>
  )
}

export default App
