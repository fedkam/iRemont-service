//import './device.scss';
import React from 'react';



const Device = ({
  className = 'device__wrap',
  device = 'iPhone',
  model,
  image_1x,
  image_2x
}) => {
  image_2x && (image_2x += '\t2x');
  return (
    <div className={className}>
      <img
        className='device__image'
        src={image_1x}
        srcSet={image_2x}
        alt={model}
      />
      <div className='device__model'>
        {device} {model}
      </div>
    </div>
  );
};



export default Device;
