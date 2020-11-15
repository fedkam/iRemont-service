import React from 'react';
import PropTypes from 'prop-types'
//import './details.scss'



const Detail = ({ className, title, info }) => (
    <div className={className}>
        <h3 className='detail__title'>{`${title} `}</h3>
        <h4 className='detail__info'>{info}</h4>
    </div>
)



Detail.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    info: PropTypes.string
}



export default Detail