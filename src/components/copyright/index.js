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

}

export default Copyright
