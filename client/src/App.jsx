import './App.css'
import {Routes, Route} from 'react-router-dom';
import LandingPage from './views/Landing Page/LandingPage';
import Home from './views/Home/Home';
import Detail from './views/Detail/Detail';
import Create from './views/Create/Create';
import Error404 from './components/Error404/Error404'



function App() {


  return (
      <div className='App.css'>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route exact path='/home' element={<Home/>}/> /*coloco exact path para que no se pise la ruta con la de detail*/
          <Route path='/home/:id' element={<Detail/>}/>
          <Route path='/create' element={<Create/>}/>
          <Route path='*' element={<Error404/>}/>
        </Routes>
      </div>
  )
}

export default App
