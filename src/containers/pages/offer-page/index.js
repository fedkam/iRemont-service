// import './offer-page.scss';
import React from 'react';
import {withDataService} from '../../hoc-helpers';
import Title from '../../../components/title';
import {MotivationLinks} from '../../../components/motivation-links';
import {ReactComponent as LogoIphone} from '../../../assets/images/logo-iPhone.svg';
import {ReactComponent as IconApple} from '../../../assets/images/icon-apple.svg';

const OfferPage = ({dataOfferPage, dataLink}) => (
  <>
    <div className='offer-page__motivation'>
      <Title
        title={<LogoIphone/>}
        subtitle={dataOfferPage.subtitle}
      />
      <MotivationLinks dataLink={dataLink}/>
    </div>
    <div className='offer-page__background-wrap'>
      <IconApple className='offer-page__background'/>
    </div>
  </>
)

const mapMethodsToProps = (classDataService) => {
  return {
    dataOfferPage: classDataService.getOfferPageData(),
    dataLink: classDataService.getLinkData()
  }
};

export default withDataService(mapMethodsToProps)(OfferPage);
