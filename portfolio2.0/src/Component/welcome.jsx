import '../style/App.css'
import Navbar from './navbar'
import ethereum from '../Image/coins.png'
import code from '../Image/code.png'
import uiux from '../Image/programmer.png'
import GradientText from '../AwesomeStyle/GradientText/GradientText'
import AnimatedContent from '../AwesomeStyle/AnimatedContent/AnimatedContent'

function Welcome() {
    return (
        <div>
            <Navbar/>
            <div className='Welcome'>
                <AnimatedContent
                    distance={150}
                    direction="horizontal"
                    delay={100}
                    reverse={false}
                    config={{ tension: 80, friction: 20 }}
                    initialOpacity={0.2}
                    animateOpacity
                    scale={1.1}
                    threshold={0.2}
                    >
                    <div className="icon">
                        <img src={code} alt=""/>
                        <img src={ethereum} alt=""/>
                        <img src={uiux} alt=""/>
                    </div>
                </AnimatedContent> 
                
                <AnimatedContent
                    distance={150}
                    direction="vertical"
                    delay={100}
                    reverse={false}
                    config={{ tension: 80, friction: 20 }}
                    initialOpacity={0.2}
                    animateOpacity
                    scale={1.1}
                    threshold={0.2}
                    >
                    <div><h1>Welcome To My<br/><span className='special'>Portfolio Website</span></h1></div>
                </AnimatedContent>

                <AnimatedContent
                    distance={150}
                    direction="horizontal"
                    delay={100}
                    reverse={false}
                    config={{ tension: 80, friction: 20 }}
                    initialOpacity={0.2}
                    animateOpacity
                    scale={1.1}
                    threshold={0.2}
                    >
                    <div>
                        <GradientText
                            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                            animationSpeed={3}
                            showBorder={true}
                            className="custom-class"
                        >
                        Know More About Me
                        </GradientText>
                    </div>
                </AnimatedContent>
                
            </div>
        </div>
        
    )
}

export default Welcome