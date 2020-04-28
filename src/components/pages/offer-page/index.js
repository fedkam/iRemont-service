import React from 'react';
import {withDataService} from '../../../containers/hoc-helpers';
import Title from '../../title';
import OfferLinks from '../../offer-links';
import {ReactComponent as LogoIphone} from '../../../assets/images/logo-iPhone.svg';
import {ReactComponent as IconApple} from '../../../assets/images/icon-apple.svg';

const OfferPage = ({dataOffer, dataLink}) => (
  <>
    <div className='offer-page__motivation'>
      <Title
        title={<LogoIphone/>}
        subtitle={dataOffer.subtitle}
      />
      <OfferLinks dataLink={dataLink}/>
    </div>
    <div className='offer-page__background-wrap'>
      <IconApple className='offer-page__background'/>
    </div>
  </>
)

const mapMethodsToProps = (classDataService) => {
  return {
    dataOffer: classDataService.getOfferData(),
    dataLink: classDataService.getLinkData()
  }
};

export default withDataService(mapMethodsToProps)(OfferPage);
