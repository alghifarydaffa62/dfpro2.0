import '../style/App.css'
import { Link } from 'react-router-dom'

function Navbar() {
    return(
        <div className='navbar'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Skill">Skills</Link></li>
                <li><Link to="/Project">Project</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
            </ul>
        </div>
    )
}

export default Navbar