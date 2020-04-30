// import './repair-page.scss';
import React from 'react';
import { withDataService } from '../../hoc-helpers';
import Title from '../../../components/title';
import Device from '../../../components/device';
import iPhone8_1x from '../../../assets/images/iphones/iphone-8-1x.png';
import iPhone8Plus_1x from '../../../assets/images/iphones/iphone-8-Plus-1x.png';
import iPhone8Plus_2x from '../../../assets/images/iphones/iphone-8-Plus-2x.png';

const RepairPage = () => (
  <div className='repair-page'>
    <Title
      className='repair-page__title'
      title='s'
      subtitle='d'
    />
    <div className='repair-page__list-devices'>
      <Device
        image_1x={iPhone8Plus_1x}
        image_2x={iPhone8Plus_2x}
        title='iPhone 11 Pro Max'
      />
      <Device
        image_1x={iPhone8Plus_1x}
        title='iPhone 11 Pro'
      />
      <Device
        image_1x={iPhone8Plus_1x}
        image_2x={iPhone8Plus_2x}
        title='sda'
      />
      <Device
        image_1x={iPhone8_1x}
        title='fgfg'
      />
      <Device
        image_1x={iPhone8Plus_1x}
        image_2x={iPhone8Plus_2x}
        title='sda'
      />
      <Device
        image_1x={iPhone8_1x}
        title='fgfg'
      />
    </div>
  </div>
)

const mapMethodsToProps = (classDataService) => {
  return {

  }
};

export default withDataService(mapMethodsToProps)(RepairPage);
