// import './offer-page.scss'
import React from 'react'
import PropTypes from 'prop-types'
import { withDataService, ResetScroll } from '../../dev-helpers'
import Title from '../../../components/title'
import { MotivationLinks } from '../../../components/motivation-links'
import { ReactComponent as LogoIphone } from '../../../assets/images/logo-iPhone.svg'
import { ReactComponent as IconApple } from '../../../assets/images/icon-apple.svg'


const OfferPage = ({ dataOfferPage, dataLink }) => (
  <>
    <ResetScroll />
    <div className='offer-page__motivation'>
      <Title
        title={<LogoIphone />}
        subtitle={dataOfferPage.subtitle}
      />
      <MotivationLinks dataLink={dataLink} />
    </div>
    <div className='offer-page__background-wrap'>
      <IconApple className='offer-page__background' />
    </div>
  </>
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
