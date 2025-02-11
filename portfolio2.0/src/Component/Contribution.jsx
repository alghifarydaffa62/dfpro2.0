import React from 'react'
import GitHubCalendar from 'react-github-calendar'
import FadeContent from '../AwesomeStyle/FadeContent/FadeContent'
import '../style/App.css'

const GitHubContributions = ({ username }) => {
    return (
        <div className="contribution">
            <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                <h4>GitHub Contributions</h4>
                <GitHubCalendar username={username} />
            </FadeContent>
        </div>
    )
}

export default GitHubContributions
