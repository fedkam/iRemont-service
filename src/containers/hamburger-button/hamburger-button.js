import React from 'react';

const HamburgerButton = ({setSwitcherHamburgerMenu, switcherHamburgerMenu}) => {
  const classNameHambergerMenu = switcherHamburgerMenu ? 'hamburgerMenu_active' : 'hamburgerMenu_inactive';

  return(
    <div className='hamburgerMenu' onClick={() => setSwitcherHamburgerMenu(!switcherHamburgerMenu)}>
      <div className={`hamburgerMenu-line ${classNameHambergerMenu}`}/>
      <div className={`hamburgerMenu-line ${classNameHambergerMenu}`}/>
    </div>
  );
}

export default HamburgerButton;
