//import './device.scss';
import React from 'react';
import PropTypes from 'prop-types';
import Image from '../image'


const Device = (props) => {
  let {
    className = 'device__wrap',
    device = 'iPhone',
    model,
    image_1x,
    image_2x
  } = props;
  return (
    <div className={className}>
      <Image
        image_1x={image_1x}
        image_2x={image_2x}
        model={model}
      />
      <h3 className='device__model'>
        {device} {model}
      </h3>
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
