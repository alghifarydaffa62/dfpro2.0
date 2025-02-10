import '../style/App.css'
import Navbar from './navbar'
import ethereum from '../Image/coins.png'
import code from '../Image/code.png'
import uiux from '../Image/programmer.png'

function Welcome() {
    return (
        <div>
            <Navbar/>
            <div className='Welcome'>
                <div className="icon">
                    <img src={code} alt=""/>
                    <img src={ethereum} alt=""/>
                    <img src={uiux} alt=""/>
                </div>
                <h1>Welcome To My<br/><span className='special'>Portfolio Website</span></h1>
                <button>Know More About Me</button>
            </div>
        </div>
        
    )
}

export default Welcome