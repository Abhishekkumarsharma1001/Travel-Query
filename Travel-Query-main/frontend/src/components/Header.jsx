import React from 'react'
import oneImg from '../assets/assets/header-1.jpg'
import twoImg from '../assets/assets/header-2.jpg'
import threeImg from '../assets/assets/story.jpg'


const Header = () => {
  return (
    <div>
        <header>
      <div className="section__container header__container">
        <div className="header__image">
          <img src={oneImg} alt="header" />
          <img src={twoImg} alt="header" />
        </div>
        <div className="header__content">
          <div>
            <p className="sub__header">Book Now</p>
            <h1>The Smiling 😊<br />agent for travel</h1>
            <p className="section__subtitle">
              Make your travel more enjoyable with us. We are the best travel
              agency and we are providing the best travel services for our
              clients.
            </p>
            <div className="action__btns">
              <button className="btn">Plan a Trip</button>
              <div className="story">
                <div className="video__image">
                  <img src={threeImg} alt="story" />
                  <span><i className="ri-play-fill"></i></span>
                </div>
                <span>Watch our story</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    </div>
  )
}

export default Header