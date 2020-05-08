//import './title.scss';
import React from 'react';



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



export default Title;
