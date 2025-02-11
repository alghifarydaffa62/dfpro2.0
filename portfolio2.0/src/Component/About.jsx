import '../style/App.css'
import Navbar from './navbar'
import profile from '../Image/me.jpg'
import AnimatedContent from '../AwesomeStyle/AnimatedContent/AnimatedContent'
import SplitText from '../AwesomeStyle/SplitText/SplitText'
import PixelTransition from '../AwesomeStyle/PixelTransition/PixelTransition'
import GitHubContributions from './Contribution'
import { Link } from 'react-router-dom'
import GradientText from '../AwesomeStyle/GradientText/GradientText'

function About() {
    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    }

    return(
        <div className='About'>
            <Navbar/>

            <div className="aboutme">
                <div className="desc">
                    <div className="name">
                        <AnimatedContent
                            distance={150}
                            direction="horizontal"
                            delay={50}
                            reverse={false}
                            config={{ tension: 80, friction: 20 }}
                            initialOpacity={0.2}
                            animateOpacity
                            scale={1.1}
                            threshold={0.2}
                            >
                            <div><h4>About</h4></div>
                        </AnimatedContent>
                        
                        <SplitText
                            text="Muhammad Daffa Al Ghifary"
                            delay={100}
                            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                            easing="easeOutCubic"
                            threshold={0.2}
                            rootMargin="-50px"
                            onLetterAnimationComplete={handleAnimationComplete}
                            className='myname'
                        />  
                    </div>

                    <AnimatedContent
                        distance={150}
                        direction="horizontal"
                        delay={50}
                        reverse={false}
                        config={{ tension: 80, friction: 20 }}
                        initialOpacity={0.2}
                        animateOpacity
                        scale={1.1}
                        threshold={0.2}
                    >
                        <div>
                            <p>Hi, my name is <strong>Muhammad Daffa Al Ghifary</strong>, but most people call me <strong>Daffa</strong>. 
                            I am a passionate Front-End Web Developer with expertise in modern web technologies, 
                            particularly React.js, Tailwind CSS, and Bootstrap. I enjoy crafting clean, 
                            responsive, and user-friendly web interfaces that provide a seamless user experience.
                            </p>
                        </div>
                    </AnimatedContent>

                    <AnimatedContent
                        distance={150}
                        direction="horizontal"
                        delay={50}
                        reverse={false}
                        config={{ tension: 80, friction: 20 }}
                        initialOpacity={0.2}
                        animateOpacity
                        scale={1.1}
                        threshold={0.2}
                    >
                        <div>
                            <p>Currently, I am expanding my knowledge into <strong>Web3 development</strong>, as I believe blockchain 
                            technology is the future. While I am still in the learning phase, I have gained a solid 
                            understanding of Solidity and blockchain concepts. I am continuously improving my skills 
                            to build decentralized applications (DApps) and contribute to the evolution of the web.
                            </p>
                        </div>
                    </AnimatedContent>

                    <AnimatedContent
                        distance={150}
                        direction="horizontal"
                        delay={50}
                        reverse={false}
                        config={{ tension: 80, friction: 20 }}
                        initialOpacity={0.2}
                        animateOpacity
                        scale={1.1}
                        threshold={0.2}
                    >
                        <div>
                            <p>I am always eager to learn new technologies, take on challenges, and collaborate with 
                            like-minded developers to create impactful digital solutions.</p>
                        </div>
                    </AnimatedContent>
                    
                    <div className="findme">
                        <Link to="/About">
                            <GradientText
                                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                                animationSpeed={3}
                                showBorder={true}
                                className="custom-class"
                            >
                                Know More About Me
                            </GradientText>
                        </Link>
                        <Link to="/About">
                            <GradientText
                                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                                animationSpeed={3}
                                showBorder={true}
                                className="custom"
                            >
                                Know More About Me
                            </GradientText>
                        </Link>
                    </div>
                    
                </div>

                <PixelTransition
                    firstContent={
                        <img
                        src={profile}
                        alt="default pixel transition content, a cat!"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                    }
                    secondContent={
                        <div
                        style={{
                            width: "100%",
                            height: "100%",
                            display: "grid",
                            placeItems: "center",
                            backgroundColor: "#111"
                        }}
                        >
                        <p style={{ fontWeight: 900, fontSize: "3rem", color: "#ffffff" }}>Hello!</p>
                        </div>
                    }
                    gridSize={12}
                    pixelColor='#ffffff'
                    animationStepDuration={0.4}
                    className="custom-pixel-card"
                    />
            </div>
            <GitHubContributions username="alghifarydaffa62"/> 
        </div>
    )
} 

export default About