import React from 'react'
import './videoPlayer.css'

import { PlayButton } from '../../components'

const VideoPlayer = ({ image = 'https://via.placeholder.com/174x225', id = '' }) => {
    return (
        <div className='videoPlayer_container'>
            <img src={image} alt="" className="videoPlayer_container-blur" />
            <div className="videoPlayer">
                <img src={image} alt="" className='videoPlayer-video' />
                <div className="videoPlayer-controls">
                    <PlayButton size="84px" onClick={() => { alert('Video Unavailable') }} />
                </div>
            </div>

        </div>
    )
}

export default VideoPlayer