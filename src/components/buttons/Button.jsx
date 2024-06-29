import React from 'react'
import './button.css'

import { PlayIcon, PreviousArrow, NextArrow } from '../../assets'

const PrimaryButton = (props) => {
    return (
        <button className='primaryButton'>{props.text}</button>
    )
}

const SecondaryButton = (props) => {
    return (
        <button className='secondaryButton'>{props.text}</button>
    )
}

const ExploreButton = (props) => {
    return (
        <div className='exploreButton'>
            <img src={PlayIcon} alt='Play' />
            <button >{props.text}</button>
        </div>
    )
}


const PlayButton = (props) => {
    return (
        <div className='playButton' style={{ minWidth: `${props.size}`, height: `${props.size}` }}>
            <img src={PlayIcon} alt='Play' />
        </div>
    )
}

const NavigatingButton = ({onPrevious, onNext}) => {
    return (
        <div className="navigatingButtons">
            <div className='navigatingButton' onClick={onPrevious}>
                <img src={PreviousArrow} alt='Play' />
            </div>
            <div className='navigatingButton' onClick={onNext}>
                <img src={NextArrow} alt='Play' />
            </div>
        </div>
    )
}






export { PrimaryButton, SecondaryButton, ExploreButton, PlayButton, NavigatingButton }