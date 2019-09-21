import React, { Component } from 'react'
import './ScoreDistrubute.scss'
import Star from './../../../components/Star'

export default class ScoreDistrubute extends Component {
    render() {
        return (
            <div className="scoreDistrubute">
                <div className="score">
                    <div className="score__value">9.3</div>
                    <div className="score__desc">1000人评论</div>
                </div>
                <div className="distribute">
                    <div className="distribute__item">
                        <Star value={10} size={8}/>
                        <div className="distribute__btn">
                            <div className="distribute__top" style={{width: '100%'}}></div>
                        </div>
                    </div>
                    <div className="distribute__item">
                        <Star value={8} size={8}/>
                        <div className="distribute__btn">
                            <div className="distribute__top" style={{width: '80%'}}></div>
                        </div>
                    </div>
                    <div className="distribute__item">
                        <Star value={6} size={8}/>
                        <div className="distribute__btn">
                            <div className="distribute__top" style={{width: '60%'}}></div>
                        </div>
                    </div>
                    <div className="distribute__item">
                        <Star value={4} size={8}/>
                        <div className="distribute__btn">
                            <div className="distribute__top" style={{width: '40%'}}></div>
                        </div>
                    </div>
                    <div className="distribute__item">
                        <Star value={2} size={8}/>
                        <div className="distribute__btn">
                            <div className="distribute__top" style={{width: '20%'}}></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
