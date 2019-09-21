import React from 'react'
import './ScoreSummary.scss'
import Star from './../../../components/Star'

export default function ScoreSummary() {
    return (
        <div className="scoreSummary">
            <div className="scoreSummary__top">
                <div className="summaryItem">
                    <div className="summaryItem__value">9.3<Star value={9.3} /></div>
                    <div className="summaryItem__title">观众评分1531人</div>
                </div>
                <div className="summaryItem">
                    <div className="summaryItem__value">88%</div>
                    <div className="summaryItem__title">v淘推荐度</div>
                </div>
                <div className="summaryItem">
                    <div className="summaryItem__value">8773</div>
                    <div className="summaryItem__title">想看人数</div>
                </div>
            </div>
            <div className="summaryBtn">
                <button className="summaryBtn__item summaryBtn__item--want"><i/>想看</button>
                <button className="summaryBtn__item summaryBtn__item--seen"><i/>看过</button>
            </div>
        </div>
    )
}
