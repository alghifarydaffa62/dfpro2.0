import '../style/App.css'
import Navbar from './navbar'
import FadeContent from '../AwesomeStyle/FadeContent/FadeContent'
import code from '../Image/code.png'
import ethereum from '../Image/coins.png'
import SpotlightCard from '../AwesomeStyle/SpotlightCard/SpotlightCard'
import project1 from '../Image/project 1.png'
import project2 from '../Image/project2.png'
import project3 from '../Image/project3.png'
import { Link } from 'react-router-dom'
import ShinyText from '../AwesomeStyle/ShinyText/ShinyText'

function Project() {
    return(
        <div className="Project">
            <Navbar/>

            <div className="portfolio">
                <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                    <h2>Project Showcase</h2>
                    <p>Showcasing my web development and smart contract projects, blending creativity with technology.</p>
                </FadeContent>

                <div className="project-container">
                    <div className="menu">
                        <div className="web">
                            <img src={code} alt="" />
                            <h5>Website</h5>
                        </div>
                        <div className="smart-contract">
                            <img src={ethereum} alt="" />
                            <h5>Smart Contract</h5>
                        </div>
                    </div>
                    <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                        <div className="box-project">
                            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                                <img src={project1} alt=""/>
                                <h4>Smanisda Cup Aetheria</h4>
                                <p>An annual event held by the student council of SMA Negeri
                                    1 Sidoarjo. In this project i act as the team leader
                                    and lead the communication with the student council,
                                    web design and code.</p>
                                <button><Link>Details</Link></button>
                            </SpotlightCard>
                            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                                <img src={project2} alt="" />
                                <h4>Mondsia</h4>
                                <p>An annual event held by the student council of SMA Negeri
                                    1 Sidoarjo. In this project i act as the team leader
                                    and lead the communication with the student council,
                                    web design and code.</p>
                            </SpotlightCard>
                            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                                <img src={project3} alt="" />
                                <h4>Life Below Water</h4>
                                <p>An annual event held by the student council of SMA Negeri
                                    1 Sidoarjo. In this project i act as the team leader
                                    and lead the communication with the student council,
                                    web design and code.</p>
                            </SpotlightCard>
                            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                                <h4>Note Apps</h4>
                                <p>An annual event held by the student council of SMA Negeri
                                    1 Sidoarjo. In this project i act as the team leader
                                    and lead the communication with the student council,
                                    web design and code.</p>
                            </SpotlightCard>
                            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                                <h4>Contact Apps</h4>
                                <p>An annual event held by the student council of SMA Negeri
                                    1 Sidoarjo. In this project i act as the team leader
                                    and lead the communication with the student council,
                                    web design and code.</p>
                            </SpotlightCard>
                        </div>
                    </FadeContent>
                    
                </div>


            </div>
        </div>
    )
}

export default Project