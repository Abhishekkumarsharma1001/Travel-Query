import React from 'react'
import oneImg from '../assets/assets/gallery-1.jpg'
import twoImg from '../assets/assets/gallery-2.jpg'
import threeImg from '../assets/assets/gallery-3.jpg'


const Sec3 = () => {
  return (
    <div>
           <section className="gallary">
      <div className="section__container gallary__container">
        <div className="image__gallary">
          <div className="gallary__col">
            <img src={oneImg} alt="gallary" />
          </div>
          <div className="gallary__col">
            <img src={twoImg} alt="gallary" />
            <img src={threeImg} alt="gallary" />
          </div>
        </div>
        <div className="gallary__content">
          <div>
            <h2 className="section__title">
              Our trip gallary that will inspire you
            </h2>
            <p className="section__subtitle">
              Explore your suitable and dream places around the world. Here you
              can find your right destination.
            </p>
            <button className="btn">View All</button>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Sec3