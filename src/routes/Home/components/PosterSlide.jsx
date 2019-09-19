import React from 'react';
import Slider from 'react-slick';
import './PosterSlide.scss';
import PropTypes from 'prop-types';

export default function Slide({data}) {
  const settings = {
    dots: true,
    autoplay: true,
    className: 'posterSlide',
    dotsClass: 'posterSlide__dots'
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="/source/slide/slide1.jpeg" className="posterSlide__img" alt="" />
      </div>
      <div>
        <img src="/source/slide/slide2.jpeg" className="posterSlide__img" alt="" />
      </div>
      <div>
        <img src="/source/slide/slide3.jpeg" className="posterSlide__img" alt="" />
      </div>
      <div>
        <img src="/source/slide/slide4.jpeg" className="posterSlide__img" alt="" />
      </div>
      <div>
        <img src="/source/slide/slide5.jpeg" className="posterSlide__img" alt="" />
      </div>
    </Slider>
  );
}

Slide.propTypes = {
  data: PropTypes.array.isRequired,
};
