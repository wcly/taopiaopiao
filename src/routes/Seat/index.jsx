import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import './index.scss'
import MovieInfo from './components/MovieInfo'
import SeatSelected from './components/SeatSelected'
import SeatSelector from './container/SeatSelector'
import selectSeat from './reducers'

let store = createStore(selectSeat)

export default class Seat extends Component {
    static propTypes = {
        prop: PropTypes
    }

    // state = {
    //     selectSeat: []
    // }

    // addSeat = seat => {
    //     this.setState(prevState => ({
    //         selectSeat: [...prevState.selectSeat, seat]
    //     }))
    // }

    // removeSeat = id => {
    //     this.setState({
    //         selectSeat: this.state.selectSeat.filter(seat => seat.id !== id)
    //     })
    // }

    render() {
        // const { selectSeat } = this.state

        return (
            <Provider store={store}>
                <div className="seat">
                    <div className="tOperator">
                        <i className="tOperator__icon tOperator__icon--backBack" onClick={() => window.history.back()}/>
                        万达影院
                    <i className="tOperator__icon tOperator__icon--blackShare" />
                    </div>
                    <MovieInfo />
                    <div className="seat_main">
                        <div className="seat__tip"></div>
                        <div className="seat__graph">
                            <div className="seat__screen">B13频幕</div>
                            <div className="seat__map"><SeatSelector /></div>
                        </div>
                    </div>
                    <SeatSelected />
                </div>
            </Provider>
        )
    }
}
