import React from 'react'
import PropTypes from 'prop-types'



const Copyright = ({ addCssClassName = '', title }) => {
    return (
        <h5 className={'copyright' + addCssClassName}>
            {title}
        </h5>
    )
}



Copyright.propTypes = {
    addCssClassName: PropTypes.string,
    title: PropTypes.string
}



export default React.memo(Copyright);
