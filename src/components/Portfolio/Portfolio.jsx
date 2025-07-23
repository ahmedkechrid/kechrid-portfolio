import React from 'react';
import "./Portfolio.css";
import { Link } from 'react-router-dom';
import ImgProject1 from '../../assests/portfolio-react-home.png'
import HomeGalaxy from '../../assests/Home-galaxy.jpg'


const Portfolio = () => {
  return (
    <section id='Portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {/* stage projects  */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={ImgProject1} alt=''/>
          </div>
          <h3>Project for Departmental Injection in a Belgin</h3>
          <small className='text-light'>click View More to see details About Most Important Interfaces</small>
          <div className="portfolio__item-cta">
          <Link to='/details' className='btn'> View More</Link>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={HomeGalaxy} alt=''/>
          </div>
          <h3>e-commerce website</h3>
          <small className='text-light'>click View More to see details About Most Important Interfaces</small>
          <div className="portfolio__item-cta">
          <Link to='/details2' className='btn'> View More</Link>
          </div>
        </article>


        {/* wkw Projects */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={HomeGalaxy} alt=''/>
          </div>
          <h3>e-commerce website</h3>
          <small className='text-light'>click View More to see details About Most Important Interfaces</small>
          <div className="portfolio__item-cta">
          <Link to='/details2' className='btn'> View More</Link>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
