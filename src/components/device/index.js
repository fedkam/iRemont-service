//import './device.scss';
import React from 'react';



const Device = ({ image_1x, image_2x, title, className = 'device__wrap' }) => {
  image_2x && (image_2x+='\t2x');
  return (
    <div className={className}>
      <img
        className='device__image'
        src={image_1x}
        srcSet={image_2x}
        alt={title}
      />
      <div className='device__title'>
        {title}
      </div>
    </div>
  );
};



export default Device;
