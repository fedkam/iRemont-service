import React from 'react';
import './header.scss';
import { Breakpoint } from 'react-socks';
import MenuList from '../menu-list';

const Header = (props) => {
  const {getMenuList} = props;
  return (
    <>
      <Breakpoint small down>
        <h1>2</h1>
      </Breakpoint>

      <Breakpoint medium up>
        <h1>1</h1>
        <MenuList/>
      </Breakpoint>
    </>
  );
}

export default Header;
