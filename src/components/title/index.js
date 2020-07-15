//import './title.scss';
import React, { memo } from 'react';
import PropTypes, { string } from 'prop-types'



const Title = ({ title, subtitle, className }) => (
  <div className={className}>
    {title && (
      <div className='title__title'>
        {title}
      </div>
    )}
    {subtitle && (
      <div className='title__subtitle'>
        {subtitle}
      </div>
    )}
  </div>
);



Title.propTypes = {
  className: string,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  subtitle: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ])
}



export default memo(Title);


//аккуратнее при оптимизации при передаче сложных PropTypes.element
