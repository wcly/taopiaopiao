import React from 'react'
import PropTypes from 'prop-types'
import './TagList.scss'

export default function TagList({ data, current, onClick }) {
    const onClickTag = value => {
        if(value !== current){
            onClick(value)
        }
    }


    return (
        <div className="togList">
            {
                data.map(tag =>
                    <div
                        key={tag.text}
                        className={`tagList__item ${current === tag.text && 'tagList__item--active'}`}
                        onClick={()=> onClickTag(tag.text)}
                    >
                        {tag.text} {tag.count}
                    </div>
                )
            }
        </div>
    )
}

TagList.propTypes = {
    data: PropTypes.array.isRequired,
    current: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}
