import React from 'react'
import oneImg from '../assets/assets/trip1.jpg'
import twoImg from '../assets/assets/trip2.jpg'
import threeImg from '../assets/assets/trip3.jpg'

const Sec2 = () => {
  return (
    <div>
          <section className="trip">
      <div className="section__container trip__container">
        <h2 className="section__title">Best trip package</h2>
        <p className="section__subtitle">
          Explore your suitable and dream places around the world. Here you can
          find your right destination.
        </p>
        <div className="trip__grid">
          <div className="trip__card">
            <img src={oneImg} alt="trip" />
            <div className="trip__details">
              <p>Maldives</p>
              <div className="rating"><i className="ri-star-fill"></i> 4.2</div>
              <div className="booking__price">
                <div className="price"><span>From</span> $3000</div>
                <button className="book__now">Book Now</button>
              </div>
            </div>
          </div>
          <div className="trip__card">
            <img src={twoImg} alt="trip" />
            <div className="trip__details">
              <p>switzerland</p>
              <div className="rating"><i className="ri-star-fill"></i> 4.5</div>
              <div className="booking__price">
                <div className="price"><span>From</span> $1000</div>
                <button className="book__now">Book Now</button>
              </div>
            </div>
          </div>
          <div className="trip__card">
            <img src={threeImg} alt="trip" />
            <div className="trip__details">
              <p> Italy</p>
              <div className="rating"><i className="ri-star-fill"></i> 4.7</div>
              <div className="booking__price">
                <div className="price"><span>From</span> $4000</div>
                <button className="book__now">Book Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="view__all">
          <button className="btn">View All</button>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Sec2