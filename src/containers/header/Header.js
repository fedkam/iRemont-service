import React from 'react';
//import './header.scss'
import { Breakpoint } from 'react-socks';
import NavBar from '../navbar';

const Header = (props) => {
  return (
    <>
      <Breakpoint small down>
        <NavBar typeMenuDesktop={false}/>
      </Breakpoint>

      <Breakpoint medium up>
        <NavBar/>
      </Breakpoint>
    </>
  );
}

export default Header;
