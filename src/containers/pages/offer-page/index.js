// import './offer-page.scss'
import React from 'react'
import PropTypes from 'prop-types'
import { withDataService } from '../../dev-helpers'
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



const OfferPage = ({ dataOfferPage, dataLink }) => (
  <PageSetup
    navbar
    resetScroll
    transitionAnimationPages
  >
    <div className='offer-page__motivation'>
      <Title
        title={<LogoIphone />}
        subtitle={dataOfferPage.subtitle}
      />
      <MotivationLinks dataLink={dataLink} />
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



OfferPage.propTypes = {
  dataOfferPage: PropTypes.object,
  dataLink: PropTypes.object
}



const mapMethodsToProps = (classDataService) => {
  return {
    dataOfferPage: classDataService.getOfferPageData(),
    dataLink: classDataService.getLinkData()
  }
};



export default withDataService(mapMethodsToProps)(OfferPage);
