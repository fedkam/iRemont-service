// как поддерживать все эти inline className непонятно => ~CssInJS или bem-react

//import './menu-list.scss';
import React, {useState,useContext} from 'react';
import {Breakpoint} from 'react-socks';
import {withDataService} from '../hoc-helpers';
import {CSSTransition} from 'react-transition-group';
import Social from '../../components/social';
import HamburgerButton from '../hamburger-button';
import LinkElement from '../../components/link-element';
import {ReactComponent as LogoIcon} from '../../assets/images/logo-iRemont.svg';
import NavBarContext from './navbar-context';



const MenuList = ({classNameElementMenu}) => {
  const {dataNavBar, setSwitcherHamburgerMenu} = useContext(NavBarContext);
  return(
    dataNavBar && dataNavBar.map((row, index) => (
      <LinkElement
        className={classNameElementMenu}
        onClick={() => setSwitcherHamburgerMenu(false)}
        path={row.path}
        key={index}
      >
        {row.name}
      </LinkElement>))
  );
};



const MenuTopLeft = () => {
  const {switcherHamburgerMenu, setSwitcherHamburgerMenu} = useContext(NavBarContext);
  return (
    <LinkElement onClick={() => setSwitcherHamburgerMenu(false)}>
        <LogoIcon className={switcherHamburgerMenu ? 'navbar__logo_active' : 'navbar__logo_inactive'}/>
    </LinkElement>
  );
};



const MenuTopRight = () => (
  <>
    <Breakpoint small down>
      <HamburgerButton/>
    </Breakpoint>

    <Breakpoint medium up>
      <div className='navbar-desktop__links'>
        <MenuList classNameElementMenu='navbar-desktop__link' />
      </div>
    </Breakpoint>
  </>
);



const MenuTop = () => {
  return (
    <div className='navbar-wrap__menuTop'>
      <MenuTopLeft/>
      <MenuTopRight/>
    </div>
  );
};



const MenuBottom = () => {
  const {switcherHamburgerMenu} = useContext(NavBarContext);
  return(  
    <CSSTransition
      in={switcherHamburgerMenu}
      timeout={1000}
      classNames='navbar-wrap__menuBottom navbar-mobile__csstransition'
      unmountOnExit
    >
      <div>
        <MenuList classNameElementMenu='navbar-mobile__link'/>
        <Social />
      </div>
    </CSSTransition>
  );
};



const NavBar = ({dataNavBar}) => {
  const [switcherHamburgerMenu, setSwitcherHamburgerMenu] = useState(false);

  return (
    <NavBarContext.Provider value={{dataNavBar, switcherHamburgerMenu, setSwitcherHamburgerMenu}}>
      <MenuTop/>
      <MenuBottom/>
    </NavBarContext.Provider>
  );
};



const mapMethodsToProps = (classDataService) => {
  return {
    dataNavBar: classDataService.getMenuList()
  }
};



export default withDataService(mapMethodsToProps)(NavBar);
