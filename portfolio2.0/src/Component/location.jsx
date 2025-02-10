import '../style/App.css'
import { useState, useEffect } from 'react'
import SplitText from '../AwesomeStyle/SplitText/SplitText'

function Location() {
    const [time, setTime] = useState('')
    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    }

    useEffect(() => {
        const updateTime = () => {
            const now = new Date()
            const options = {hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false}
            setTime(now.toLocaleDateString('en-GB', options))
        }

        updateTime()
        const interval = setInterval(updateTime, 1000)
        return () => clearInterval(interval)
    }, [])

    return(
        <div className='Location'>
            <SplitText
                text="Surabaya, East Java - Indonesia"
                className="text-2xl font-semibold text-center"
                delay={150}
                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                easing="easeOutCubic"
                threshold={0.2}
                rootMargin="-50px"
                onLetterAnimationComplete={handleAnimationComplete}
            />
            <h4>UTC+7 - {time}</h4>
        </div>
    )
}

export default Location