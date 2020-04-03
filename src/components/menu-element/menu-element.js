import React from 'react';
import {NavLink} from 'react-router-dom';

const LinkElement = ({ className='', onClick='', path='/', children}) => {
  return (
    <div className={className} onClick={onClick}>
      <NavLink to={path}>
        {children}
      </NavLink>
    </div>
  );
}

export default LinkElement;
