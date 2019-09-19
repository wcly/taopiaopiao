import React, { Component } from 'react';
import './index.scss';
import TabMenu from './../../components/TabMenu';
import RenderToBody from './../../components/RenderToBody';
import TopBar from './components/TopBar';
import PosterSlide from './components/PosterSlide';
import MovieItem from './components/MovieItem';
import CityLayer from './components/CityLayer';

export default class Home extends Component {
  showCitylayer = () => {
    console.log("show city layer");
  }

  render() {
    return (
      <div className="home">
        <TopBar city="杭州" showCitylayer={this.showCitylayer} />
        <div className="home__slide">
          <div className="home__slideWrap">
            <PosterSlide data={[]} />
          </div>
        </div>
        <ul className="home__content">
          <li>
            <MovieItem />
          </li>
          <li>
            <MovieItem />
          </li>
          <li>
            <MovieItem />
          </li>
          <li>
            <MovieItem />
          </li>
        </ul>
        <TabMenu current="movie"/>
        <RenderToBody>
          <CityLayer/>
        </RenderToBody>
      </div>
    );
  }
}
