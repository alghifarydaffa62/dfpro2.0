import './style/App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Welcome from './Component/welcome'
import About from './Component/About'
import Skill from './Component/Skill'
import Project from './Component/Project'
import Contact from './Component/Contact'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Welcome/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Skill' element={<Skill/>}/>
          <Route path='/Project' element={<Project/>}/>
          <Route path='/Contact' element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
