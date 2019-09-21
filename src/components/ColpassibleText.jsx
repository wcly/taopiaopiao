import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import './ColpassibleText.scss'

export default class ColpassibleText extends Component {
    state = {
        isCollpase: false,
        isNeedCollapse: false,
    }

    static propTypes = {
        children: PropTypes.any,
        height: PropTypes.number,
    }

    static defaultProps = {
        height: 84
    }

    componentDidMount() {
        const dom = ReactDOM.findDOMNode(this)
        const value = this.props.height
        if (dom.clientHeight > value) {
            this.setState({
                isCollpase: true,
                isNeedCollapse: true,
            })
        }
    }

    toggleStatus = () => {
        if (this.state.isNeedCollapse) {
            this.setState((prevState) => ({
                isCollpase: !prevState.isCollpase
            }))
        }
    }

    render() {
        const { isCollpase } = this.state
        const cls = isCollpase ? 'collapsibleText--collpase' : '';
        const maxHeight = isCollpase ? this.props.height : 'none';

        return (
            <div className={`collapsibleText ${cls}`} onClick={this.toggleStatus} style={{ maxHeight: maxHeight }} >
                {this.props.children}
                {this.state.isCollpase && <div className="collapsibleText__label">展开</div>}
            </div>
        )
    }
}
