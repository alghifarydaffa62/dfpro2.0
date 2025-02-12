import '../style/App.css'
import Navbar from './navbar'
import reactJS from '../Image/React.png'
import reactBoostrap from '../Image/React-Bootstrap.png'
import solidity from '../Image/Solidity.png'
import tailwind from '../Image/Tailwind-CSS.png'
import JS from '../Image/JavaScript.png'
import bootstrap from '../Image/Bootstrap.png'
import AnimatedContent from '../AwesomeStyle/AnimatedContent/AnimatedContent'
import FadeContent from '../AwesomeStyle/FadeContent/FadeContent'

function Skill() {
    const handleAnimationComplete = () => {
        console.log('All letters have animated!')
    }

    const techStack = [
        reactBoostrap, 
        reactJS, 
        solidity, 
        tailwind, 
        JS, 
        bootstrap
    ]
    return(
        <div className='Skill'>
            <Navbar/>
            <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                <h2>Tech Stack</h2>
            </FadeContent>
            
            <div className="tech">
                {techStack.map((tech) => (
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
                            <img src={tech} alt="" />
                        </div>
                    </AnimatedContent>
                ))}
            </div>
            <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                <h2>Certificate</h2>
            </FadeContent>

        </div>
    )
}

export default Skill