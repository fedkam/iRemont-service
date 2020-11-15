//import './hamburger-button.scss';
import React, { useContext } from 'react';
import { NavBarContext } from '../navbar';



const HamburgerButton = () => {
  const { switcherHamburgerMenu, memoSetSwitcherHamburgerMenu } = useContext(NavBarContext);
  const classNameHambergerMenu = switcherHamburgerMenu ? 'hamburgerMenu_active' : 'hamburgerMenu_inactive';
  return (
    <div className='hamburgerMenu_wrapper' onClick={() => memoSetSwitcherHamburgerMenu(!switcherHamburgerMenu)}>
      <div className='hamburgerMenu'>
        <div className={`hamburgerMenu-line ${classNameHambergerMenu}`} />
        <div className={`hamburgerMenu-line ${classNameHambergerMenu}`} />
      </div>
    </div>
  );
}



export default HamburgerButton;
