import React from 'react';
import {withDataService} from '../../../containers/hoc-helpers';
import Title from '../../title';
import OfferLinks from '../../offer-links';
import {ReactComponent as LogoIphone} from '../../../assets/images/logo-iPhone.svg';

const OfferPage = ({dataOffer, dataLink}) => (

  <div>
    <Title
      title={<LogoIphone/>}
      subtitle={dataOffer.subtitle}
    />
    <OfferLinks dataLink={dataLink}/>
  </div>
)

const mapMethodsToProps = (classDataService) => {
  return {
    dataOffer: classDataService.getOfferData(),
    dataLink: classDataService.getLinkData()
  }
};

export default withDataService(mapMethodsToProps)(OfferPage);
