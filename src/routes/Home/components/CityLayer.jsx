import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CityLayer.scss';

export default class CityLayer extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div className="cityLayer">
        <div className="cityLayer__title">
          <div className="cityLayer__close">关闭</div>
          选择城市
        </div>
        <div className="cityLayer__content">
          <div className="cityBlock" id="定位">
            <div className="cityBlock__label">定位城市</div>
            <div className="cityBlock__wrap">
              <div className="cityBlock__item">杭州</div>
            </div>
          </div>
          <div className="cityBlock" id="热门">
            <div className="cityBlock__label">热门城市</div>
            <div className="cityBlock__wrap">
              <div className="cityBlock__item">杭州</div>
              <div className="cityBlock__item">杭州</div>
              <div className="cityBlock__item">杭州</div>
              <div className="cityBlock__item">杭州</div>
              <div className="cityBlock__item">杭州</div>
            </div>
          </div>
          <div className="cityList" id="A">
            <div className="cityList__label">A</div>
            <ul className="cityList__wrap">
              <li className="cityList__item">阿坝</li>
              <li className="cityList__item">阿坝</li>
              <li className="cityList__item">阿坝</li>
              <li className="cityList__item">阿坝</li>
              <li className="cityList__item">阿坝</li>
              <li className="cityList__item">阿坝</li>
              <li className="cityList__item">阿坝</li>
              <li className="cityList__item">阿坝</li>
              <li className="cityList__item">阿坝</li>
              <li className="cityList__item">阿坝</li>
              <li className="cityList__item">阿坝</li>
              <li className="cityList__item">阿坝</li>
              <li className="cityList__item">阿坝</li>
              <li className="cityList__item">阿坝</li>
              <li className="cityList__item">阿坝</li>
              <li className="cityList__item">阿坝</li>
              <li className="cityList__item">阿坝</li>
              <li className="cityList__item">阿坝</li>
              <li className="cityList__item">阿坝</li>
              <li className="cityList__item">阿坝</li>
              <li className="cityList__item">阿坝</li>
              <li className="cityList__item">阿坝</li>
              <li className="cityList__item">阿坝</li>
              <li className="cityList__item">阿坝</li>
              <li className="cityList__item">阿坝</li>
              <li className="cityList__item">阿坝</li>
              <li className="cityList__item">阿坝</li>
              <li className="cityList__item">阿坝</li>
              <li className="cityList__item">阿坝</li>
              <li className="cityList__item">阿坝</li>
            </ul>
          </div>
        </div>
        <div className="cityLayer__index cityIndex">
          <ul className="cityIndex__list">
            <li className="cityIndex__item"><a href="#定位">定位</a></li>
            <li className="cityIndex__item"><a href="#热门">热门</a></li>
            <li className="cityIndex__item"><a href="#A">A</a></li>
          </ul>
        </div>
      </div>
    );
  }
}
