import React from 'react';
import PropTypes from 'prop-types';
import './MovieItem.scss';

function MovieItem(props) {
    return (
        <div className="movieItem">
            <div className="movieItem__poster">
              <img src="/source/movie/asset1.jpeg" alt="" srcset=""/>
            </div>
            <div className="movieItem__detail">
              <div className="movieItem__name">神秘巨星</div>
              <div className="movieItem__score">观众评分<span>9.3</span></div>
              <div className="movieItem__director">导演：张艺谋</div>
              <div className="movieItem__actor">主演：周杰伦</div>
              <div className="movieItem__tag">
                <span className="tTag tTag--red">今日最热</span>
                <span className="tTag tTag--blue">今日最热</span>
              </div>
            </div>
            <div className="movieItem__btn">
              <button className="tBtn">购票</button>
              <span className="movieItem__price">9.9</span>
            </div>
        </div>
    )
}

MovieItem.propTypes = {

}

export default MovieItem

