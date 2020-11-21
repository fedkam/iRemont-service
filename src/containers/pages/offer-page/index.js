// import './offer-page.scss'
import React from 'react'
import PropTypes from 'prop-types'
import { withDataService, generateCanonicalUrl } from '../../dev-helpers'
import { useLocation } from 'react-router-dom'
import Title from '../../../components/title'
import { MotivationLinks } from '../../../components/motivation-links'
import { ReactComponent as LogoIphone } from '../../../assets/images/logo-iPhone.svg'
import { ReactComponent as IconApple } from '../../../assets/images/icon-apple.svg'
import LottieAnimation from '../../lottie-animation'
import appleJSON from '../../../assets/json-animation/apple.json'
import PageSetup from '../page-setup'



const iconApple = (
  <div className='offer-page__background-wrap'>
    <IconApple className='offer-page__background' />
  </div>
)



const OfferPage = ({ dataOfferPage, dataLinks, generalInformation }) => {
  const { domainName } = generalInformation;
  const { pathname } = useLocation();
  return (
    <PageSetup
      resetScroll
      transitionAnimationPages
      seo={generateCanonicalUrl(dataOfferPage.seo, domainName, pathname)}
    >
      <div className='offer-page__motivation'>
        <Title
          title={<LogoIphone />}
          subtitle={dataOfferPage.subtitle}
        />
        <MotivationLinks dataLinks={dataLinks} />
      </div>
      <div className='offer-page__background-wrap'>
        <LottieAnimation
          className='offer-page__background'
          bodymovinAnimation={appleJSON}
          reserveStaticIcon={iconApple}
          setLoop
        />
      </div>
    </PageSetup >
  )
}



OfferPage.propTypes = {
  dataOfferPage: PropTypes.object,
  dataLinks: PropTypes.object
}



const mapMethodsToProps = (classDataService) => {
  return {
    dataOfferPage: classDataService.getOfferPageData(),
    dataLinks: classDataService.getLinksData(),
    generalInformation: classDataService.getGeneralInformation()
  }
};



export default withDataService(mapMethodsToProps)(OfferPage);
