import React from 'react';
//import './header.scss'
import { Breakpoint } from 'react-socks';
import NavBar from '../navbar';

const Header = (props) => {
  return (
    <>
      <Breakpoint small down>
        <h6>Breakpoint small</h6>
      </Breakpoint>

      <Breakpoint medium up>
        <h6>Breakpoint medium</h6>
        <NavBar/>
      </Breakpoint>
    </>
  );
}

export default Header;
