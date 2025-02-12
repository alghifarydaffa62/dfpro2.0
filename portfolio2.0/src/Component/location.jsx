import '../style/App.css'
import { useState, useEffect } from 'react'
import SplitText from '../AwesomeStyle/SplitText/SplitText'
import FadeContent from '../AwesomeStyle/FadeContent/FadeContent'

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
            <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                <h5>Surabaya, East Java - Indonesia</h5>
                <h5>UTC+7 - {time}</h5>
            </FadeContent>
        </div>
    )
}

export default Location