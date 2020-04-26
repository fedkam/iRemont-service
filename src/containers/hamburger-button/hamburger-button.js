import React, {useContext} from 'react';
import {NavBarContext} from '../navbar';

const HamburgerButton = () => {
  const {switcherHamburgerMenu, setSwitcherHamburgerMenu} = useContext(NavBarContext);
  const classNameHambergerMenu = switcherHamburgerMenu ? 'hamburgerMenu_active' : 'hamburgerMenu_inactive';

  return(
    <div className='hamburgerMenu' onClick={() => setSwitcherHamburgerMenu(!switcherHamburgerMenu)}>
      <div className={`hamburgerMenu-line ${classNameHambergerMenu}`}/>
      <div className={`hamburgerMenu-line ${classNameHambergerMenu}`}/>
    </div>
  );
}

export default HamburgerButton;
