import React from 'react';
import PropTypes from 'prop-types'



export const MapGoogle = ({ className, url }) => {
    return (
        <div className={className}>
            <iframe
                title="Google Map"
                src={url}
                width='100%'
                height='100%'
                frameborder='0'
                tyle='border:0;'
                allowfullscreen=''
                aria-hidden='false'
                tabindex='0'>
            </iframe>
        </div>
    )
}



MapGoogle.propTypes = {
    className: PropTypes.string,
    url: PropTypes.string
}