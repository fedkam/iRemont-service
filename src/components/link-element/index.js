import React from 'react';
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';



const LinkElement = ({ className, onClick, path = '/', children }) => (
  <div className={className} onClick={onClick}>
    <NavLink to={path}>
      {children}
    </NavLink>
  </div>
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



export default React.memo(LinkElement);
