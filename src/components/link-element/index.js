import React, { memo } from 'react';
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';



const LinkElement = ({ className, onClick, path = '/', children }) => (
  <NavLink className={className} to={path} onClick={onClick}>
    {children}
  </NavLink>
)



LinkElement.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  path: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])
}



export default memo(LinkElement);
