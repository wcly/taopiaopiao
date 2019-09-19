import React from 'react';
import Slider from 'react-slick';
import './PosterSlide.scss';
import PropTypes from 'prop-types';

export default function Slide({ data }) {
  const settings = {
    dots: true,
    autoplay: true,
    className: 'posterSlide',
    dotsClass: 'posterSlide__dots'
  };

  return (
    <Slider {...settings}>
      {
        data.map(item => {
          return (
            <div key={item.image}>
              <img src={item.image} className="posterSlide__img" alt="" />
            </div>
          )
        })
      }
    </Slider>
  );
}

Slide.propTypes = {
  data: PropTypes.array.isRequired,
};
