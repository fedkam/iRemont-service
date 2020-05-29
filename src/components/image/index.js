import React from 'react'
// import PropTypes from 'prop-types'
// import { LazyLoadImage } from 'react-lazy-load-image-component';


const Image = ({ className, model, image_1x, image_2x }) => {
    image_2x && (image_2x += '\t2x');
    return (
        <img
            className={className}
            src={image_1x}
            srcSet={image_2x}
            alt={model}
        />
    )
}



// Image.propTypes = {

// }



export default Image
