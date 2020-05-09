import React from 'react'

export const MapGoogle = ({ className, url }) => {
    return (
        <div className={className}>
            <iframe
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
