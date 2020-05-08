import React from 'react'
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


export default Element