//import './title.scss';
import React from 'react';

const Title = ({title, subtitle}) => (
    <div>
      <div className='title__title'>
        {title}
      </div>
      <div className='title__subtitle'>
        {subtitle}
      </div>
    </div>
);


export default Title;
