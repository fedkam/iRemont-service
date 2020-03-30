import React, {useState} from 'react';
//import './menu-list.scss';
import { withDataService } from '../hoc-helpers';
import { NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import {ReactComponent as LogoIcon} from '../../assets/images/logo-iRemont.svg';
import {ReactComponent as HamburgerButtonIcon} from '../../assets/images/icon-hamburgerMenu.svg';
import {ReactComponent as VkontakteIcon} from '../../assets/images/icon-vkontakte.svg';
import {ReactComponent as InstagramIcon} from '../../assets/images/icon-instagram.svg';
import {ReactComponent as WhatsAppIcon} from '../../assets/images/icon-whatsapp.svg';


const MenuElement = ({ className='', onClick='', path='/', children}) => {
  return (
    <div className={className} onClick={onClick}>
      <NavLink to={path}>
        {children}
      </NavLink>
    </div>
  );
}


const NavBar = ({getMenuList, typeMenuDesktop=true}) => {
  const [switcherHamburgerMenu, setSwitcherHamburgerMenu] = useState(false);
  const classNameElementMenu = typeMenuDesktop ? 'navbar-desktop-link' : 'navbar-mobile-link';
  const dataNavBar = getMenuList();

  const menuLogo = (
    <MenuElement
      onClick={() => setSwitcherHamburgerMenu(false)}
    >
      <LogoIcon className='navbar-logo'/>
    </MenuElement>
  );

  const menuHamburgerButton = (
    <MenuElement
      onClick={() => setSwitcherHamburgerMenu(!switcherHamburgerMenu)}
    >
      <HamburgerButtonIcon className='navbar-mobile-hamburgerButton'/>
    </MenuElement>
  );

  const menuList = dataNavBar && dataNavBar.map((row, index) => (
    <MenuElement
      className={classNameElementMenu}
      onClick={() => setSwitcherHamburgerMenu(false)}
      path={row.path}
      key={index}
    >
      {row.name}
    </MenuElement>
  ));

  const socialIcons = (
    <div>
      <VkontakteIcon />
      <InstagramIcon />
      <WhatsAppIcon />
    </div>
  )

  return (
    <>
      <div className='navbar-container-menuTop'>
        <div className='navbar-wrap-menuTop'>
          {menuLogo}
          <div className='navbar-links'>
            {typeMenuDesktop ? menuList : menuHamburgerButton}
          </div>
        </div>
      </div>
      <CSSTransition
        in={switcherHamburgerMenu}
        timeout={1000}
        classNames="navbar-mobile-csstransition"
        unmountOnExit
      >
        <div>
          <div className="navbar-wrap-menuBottom"> {menuList}</div>
        </div>
      </CSSTransition>
    </>
  );
};


const mapMethodsToProps = (classDataService) => {
  return {
    getMenuList: classDataService.getMenuList
  }
};


export default withDataService(mapMethodsToProps)(NavBar);
