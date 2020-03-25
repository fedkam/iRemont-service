import React from 'react';
import './Header.scss'
import { withDataService } from '../hoc-helpers';

const Header = (props) => {
  return (
    <h1>header</h1>
  )
}

const mapMethodsToProps = (dataService) => {
  return {
    getMenuList: dataService.getMenunList
  }
};

export default withDataService(mapMethodsToProps)(Header);
