import React from 'react';

import { Breakpoint } from 'react-socks';
import MenuList from '../menu-list';

const Header = (props) => {
  const {getMenuList} = props;
  return (
    <>
      <Breakpoint small down>
        <h6>Breakpoint small</h6>
      </Breakpoint>

      <Breakpoint medium up>
        <h6>Breakpoint medium</h6>
        <MenuList/>
      </Breakpoint>
    </>
  );
}

export default Header;
