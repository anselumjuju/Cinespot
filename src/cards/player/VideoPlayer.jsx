import React from 'react'
import './videoPlayer.css'

import { PlayButton } from '../../components'

const VideoPlayer = ({ image = 'https://via.placeholder.com/174x225', id = '' }) => {
    return (
        <div className='videoPlayer_container'>
            <img src={'https://www.techradar247.com/wp-content/uploads/2020/07/Kung-Fu.5.jpeg'} alt="" className="videoPlayer_container-blur" />
            <div className="videoPlayer">
                <img src={'https://www.techradar247.com/wp-content/uploads/2020/07/Kung-Fu.5.jpeg'} alt="" className='videoPlayer-video' />
                <div className="videoPlayer-controls">
                    <PlayButton size="84px" onClick={() => { alert('Play Video') }} />
                </div>
            </div>

        </div>
    )
}

export default VideoPlayer