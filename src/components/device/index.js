//import './device.scss';
import React from 'react';
import PropTypes from 'prop-types';



const Device = (props) => {
  let {
    className = 'device__wrap',
    device = 'iPhone',
    model,
    image_1x,
    image_2x
  } = props;
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



Device.propTypes = {
  className: PropTypes.string,
  device: PropTypes.string,
  model: PropTypes.string,
  image_1x: PropTypes.string,
  image_2x: PropTypes.string
}



export default Device;
