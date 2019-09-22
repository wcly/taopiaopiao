import React, { Component } from 'react';
import './index.scss';
import TabMenu from './../../components/TabMenu';
import RenderToBody from './../../components/RenderToBody';
import TopBar from './components/TopBar';
import PosterSlide from './components/PosterSlide';
import MovieItem from './components/MovieItem';
import CityLayer from './components/CityLayer';
import request from './../../utils/request';
import { Link } from 'react-router-dom'

export default class Home extends Component {
  state = {
    city: '',
    poster: [],
    movie: [],
    cityLayerVisible: false,
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const data = await request('/index');
    const { city, poster, movie } = data;

    this.setState({
      city,
      poster,
      movie
    })
  }

  showCityLayer = () => {
    this.setState({
      cityLayerVisible: true
    })
  }

  hideCityLayer = () => {
    this.setState({
      cityLayerVisible: false
    })
  }

  onChangeCity = city => {
    this.setState({
      city
    })
    this.hideCityLayer()
  }

  render() {
    const { city, poster, movie, cityLayerVisible } = this.state

    return (
      <div className="home">
        <TopBar city={city} showCitylayer={this.showCityLayer} />
        <div className="home__slide">
          <div className="home__slideWrap">
            <PosterSlide data={poster} />
          </div>
        </div>
        <ul className="home__content">
          {
            movie.map(item => {
              return (
                <li key={item.name}>
                  <Link to="detail">
                    <MovieItem data={item} />
                  </Link>
                </li>
              )
            })
          }
        </ul>
        <TabMenu current="movie" />
        <RenderToBody>
          {cityLayerVisible && <CityLayer onClose={this.hideCityLayer} onSelect={this.onChangeCity} />}
        </RenderToBody>
      </div>
    );
  }
}
