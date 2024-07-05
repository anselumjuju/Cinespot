import React from 'react'
import './button.css'

import { PlayIcon, PreviousArrow, NextArrow } from '../../assets'

const PrimaryButton = ({ text, onClick }) => {
    return (
        <button className='primaryButton'>{text}</button>
    )
}

const SecondaryButton = ({ text, onClick }) => {
    return (
        <button className='secondaryButton' onClick={onClick}>{text}</button>
    )
}

const ExploreButton = ({ text, onClick }) => {
    return (
        <div className='exploreButton' onClick={onClick}>
            <img src={PlayIcon} alt='Play' />
            <button >{text}</button>
        </div>
    )
}


const PlayButton = ({ size, onClick }) => {
    return (
        <div className='playButton' style={
            {
                width: size,
                height: size,
                maxWidth: size,
                maxHeight: size
            }
        } onClick={onClick}>
            <img src={PlayIcon} alt='Play' />
        </div>
    )
}

const NavigatingButton = ({ onPrevious, onNext }) => {
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