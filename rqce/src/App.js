import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import './App.css'
import  Home  from './components/Home'
import  RQSuperHeroes  from './components/RQSuperHeroes'
import  SuperHeroes  from './components/SuperHeroes'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/super-heroes'>Traditional Super Heroes</Link>
            </li>
            <li>
              <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/super-heroes' element={<SuperHeroes/>}/>
            
        
          <Route path='/rq-super-heroes' element={<RQSuperHeroes/>}/>
            
          
          <Route path='/' element={ <Home />} />
           
         
        </Routes>
      </div>
    </Router>
  )
}

export default App