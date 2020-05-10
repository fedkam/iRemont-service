import React from 'react';
import PropTypes from 'prop-types'
//import './details.scss'



const Detail = ({ className, title, info }) => (
    <div className={className}>
        <span className='detail__title'>{`${title} `}</span>
        <span className='detail__info'>{info}</span>
    </div>
)



Detail.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    info: PropTypes.string
}



export default Detail