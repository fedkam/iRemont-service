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
                frameBorder='0'
                tyle='border:0;'
                allowFullScreen=''
                aria-hidden='false'
                tabIndex='0'>
            </iframe>
        </div>
    )
}



MapGoogle.propTypes = {
    className: PropTypes.string,
    url: PropTypes.string
}