import React from 'react'
//import './details.scss'


const Detail = ({ className, title, info }) => (
    <div className={className}>
        <div className='detail'>
            <span className='detail__title'>{`${title} `}</span>
            <span className='detail__info'>{info}</span>
        </div>
    </div>
)


export default Detail