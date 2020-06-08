import React from 'react'
import PropTypes from 'prop-types'



const Copyright = ({ addCssClassName = '', title }) => {
    return (
        <div className={'copyright' + addCssClassName}>
            {title}
        </div>
    )
}



Copyright.propTypes = {
    addCssClassName: PropTypes.string,
    title: PropTypes.string
}



export default React.memo(Copyright);
