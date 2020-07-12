// как поддерживать все эти inline className непонятно => ~CssInJS или bem-react

//import './menu-list.scss';
import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Breakpoint } from 'react-socks';
import { CSSTransition } from 'react-transition-group';
import { useRouteMatch } from 'react-router-dom';
import Social from '../../components/social';
import { withDataService } from '../dev-helpers';
import HamburgerButton from '../hamburger-button';
import LinkElement from '../../components/link-element';
import { ReactComponent as LogoIcon } from '../../assets/images/logo-iRemont.svg';
import NavBarContext from './navbar-context';



const MenuList = ({ classNameElementMenu, isMobile = true }) => {
  const { dataNavBar, setSwitcherHamburgerMenu } = useContext(NavBarContext);
  (!isMobile) && setSwitcherHamburgerMenu(false); // если mobileMenu открыто, то закрыть при desktop
  return (
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
  const { switcherHamburgerMenu, setSwitcherHamburgerMenu } = useContext(NavBarContext);
  return (
    <>
      <LinkElement onClick={() => setSwitcherHamburgerMenu(false)}>
        <LogoIcon className={switcherHamburgerMenu ? 'navbar__logo_active' : 'navbar__logo_inactive'} />
      </LinkElement>
    </>
  );
};



const MenuTopRight = () => (
  <>
    <Breakpoint small down>
      <HamburgerButton />
    </Breakpoint>

    <Breakpoint medium up>
      <div className='navbar-desktop__links'>
        <MenuList
          classNameElementMenu='navbar-desktop__link navbar__link_theme_basic'
          isMobile={false}
        />
      </div>
    </Breakpoint>
  </>
);



const MenuTop = () => {
  const match = useRouteMatch({
    path: '/',
    exact: true
  });

  const addCssClassName = match ? '\tnavbar-wrap__menuTop_theme_clean' : ''; //только на главной странице offerPage

  return (
    <div className={'navbar-wrap__menuTop' + addCssClassName}>
      <div className='navbar-wrap__menuTop_size_base'>
        <MenuTopLeft />
        <MenuTopRight />
      </div>
    </div>
  );
};



const MenuBottom = () => {
  const { switcherHamburgerMenu } = useContext(NavBarContext);
  return (
    <CSSTransition
      in={switcherHamburgerMenu}
      timeout={1000}
      classNames='navbar-wrap__menuBottom navbar-mobile__csstransition'
      unmountOnExit
    >
      <div>
        <div className='navbar-mobile__links'>
          <MenuList classNameElementMenu='navbar-mobile__link navbar__link_theme_basic' />
        </div>
        <Social addCssClassNames={'\tnavbar-mobile__social_theme_indent'} />
      </div>
    </CSSTransition>
  );
};



const NavBar = ({ dataNavBar }) => {
  const [switcherHamburgerMenu, setSwitcherHamburgerMenu] = useState(false);
  return (
    <NavBarContext.Provider value={{ dataNavBar, switcherHamburgerMenu, setSwitcherHamburgerMenu }}>
      <MenuTop />
      <MenuBottom />
    </NavBarContext.Provider>
  );
};



MenuList.propTypes = {
  classNameElementMenu: PropTypes.string,
  isMobile: PropTypes.bool
}

NavBar.propTypes = {
  dataNavBar: PropTypes.array
}

NavBar.propTypes = {
  dataNavBar: PropTypes.array
}



const mapMethodsToProps = (classDataService) => {
  return {
    dataNavBar: classDataService.getMenuList()
  }
};



export default React.memo(withDataService(mapMethodsToProps)(NavBar));
