import React, { Component } from 'react'
import './index.scss'
import BaseInfo from './components/BaseInfo'
import ScoreSummary from './components/ScoreSummary'
import Artist from './components/Artist'
import CollpasibleText from './../../components/ColpassibleText'
import request from './../../utils/request'
import Comment from './container/Comment'
import LineLink from './../../components/LineLink'
import { Link } from 'react-router-dom'
import ImageSlider from './container/ImageSlider'

export default class Detail extends Component {
    state = {
        artist: [],
        showImage: false
    }

    componentDidMount() {
        this.getArtist()
    }

    getArtist = async () => {
        const data = await request('/artist');
        if (data && data.length) {
            this.setState({
                artist: data
            })
        }
    }

    toggleIamge = () => {
        this.setState({
            showImage: !this.state.showImage
        })
    }

    render() {
        const { artist, showImage } = this.state

        return (
            <div className="detail">
                <div className="detail__top">
                    <div className="tOperator">
                        <div className="tOperator__icon tOperator__icon--back" onClick={() => window.history.back()}></div>
                        <div className="tOperator__icon tOperator__icon--share"></div>
                    </div>
                    <BaseInfo onShowImage={this.toggleIamge} />
                </div>
                <div className="detail__content">
                    <div className="detail__module">
                        <ScoreSummary />
                    </div>
                    <div className="detail__module">
                        <CollpasibleText>
                            <div className="detail__overview">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore tempore atque incidunt ad praesentium asperiores consequatur culpa odio quia! Distinctio veritatis eveniet sit ducimus ipsa. Magnam repellat ea architecto nobis?
                            </div>
                        </CollpasibleText>
                    </div>
                    <div className="detail__module">
                        <h3 className="detail__moduleTitle">演职员表</h3>
                        <Artist data={artist} />
                    </div>
                    <div className="detail__module">
                        <h3 className="detail__moduleTitle">热门评论</h3>
                        <Comment />
                    </div>
                    <div className="detail__module">
                        <h3 className="detail__moduleTitle">影片资料</h3>
                        <div>
                            <LineLink href="xxx" title="幕后花絮" />
                            <LineLink href="xxx" title="台词精选" />
                            <LineLink href="xxx" title="出品发行" />
                        </div>
                    </div>
                </div>
                <Link to="/seat" className="detail__buyBtn">选座购票</Link>
                {showImage && <ImageSlider onClose={this.toggleIamge} />}
            </div>
        )
    }
}
