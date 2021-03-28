import React from 'react'
import heart from '../icons/heart.svg';
import play from '../icons/play.svg';
import dots from '../icons/dots.svg';

export const IconContainer = () => {
  return (
    <div className="icon-container">
      <img src={heart} alt="Heart" />
      <img src={play} alt="Play" className="icon-play" />
      <img src={dots} alt="Dots" />
    </div>
  )
}
