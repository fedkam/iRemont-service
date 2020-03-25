import React from 'react';
import './Header.scss';
import { withDataService } from '../hoc-helpers';

const Header = (props) => {
  const name = props.getMenuList()[0].name;
  return (
    <h1>Name {name}</h1>
  );
}

const mapMethodsToProps = (classDataService) => {
  return {
    getMenuList: classDataService.getMenuList
  }
};

export default withDataService(mapMethodsToProps)(Header);
