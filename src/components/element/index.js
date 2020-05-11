import React from 'react';
import PropTypes from 'prop-types'
//import './element.scss'



const Element = ({ className, image_svg, title, subtitle }) => (
    <div className={className}>
        <div className='element__image'>
            {image_svg}
        </div>
        <div className='element__title'>
            {title}
        </div>
        <div className='element__subtitle'>
            {subtitle}
        </div>
    </div>
)



Element.propTypes = {
    className: PropTypes.string,
    image_svg: PropTypes.element,
    title: PropTypes.string,
    subtitle: PropTypes.string
}



export default Element