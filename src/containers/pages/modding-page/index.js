// import './modding-page.scss';
import React from 'react'
import PropTypes from 'prop-types'
import { withDataService } from '../../dev-helpers'
import Title from '../../../components/title'
import Detail from '../../../components/detail'
import Element from '../../../components/element'
import { MotivationButtons, generateWhatsAppUrl } from '../../motivation-buttons'
import { ReactComponent as IphonesIcon } from '../../../assets/images/icon-iPhones.svg'
import { ReactComponent as LightAppleIcon } from '../../../assets/images/icon-lightApple.svg'
import PageSetup from '../page-setup'



const ModdingPage = ({ dataModdingPage, dataMotivationButtons, generalInformation }) => {
  const {
    header,
    details,
    elements,
  } = dataModdingPage;
  const handleClick_MotivationButtons = (action) => {
    switch (action) {
      case 'write':
        let url = generateWhatsAppUrl(dataMotivationButtons.write.url, 'Здравствуйте, хочу сделать моддинг iPhone');
        document.location.href = url;
        break;

      default:
        console.error(`Error: function handleClick_MotivationButtons() doesn"t contain "${action}" argument`);
        break;
    }
  }
  return (
    <PageSetup
      copyright
      resetScroll
      transitionAnimationPages
    >
      <div className='modding-page'>
        <Title
          className='pages__title_theme_indent'
          title={header.title}
          subtitle={header.subtitle}
        />
        <Detail
          className='modding-page__detail'
          title={details.title}
          info={details.info}
        />
        <div className='modding-page__list-elements'>
          <Element
            className='modding-page__element'
            image_svg={<IphonesIcon />}
            title={elements.materialAndColor.title}
            subtitle={elements.materialAndColor.subtitle}
          />
          <Element
            className='modding-page__element'
            image_svg={<LightAppleIcon />}
            title={elements.lightApple.title}
            subtitle={elements.lightApple.subtitle}
          />
        </div>
        <MotivationButtons
          writeLabel={dataMotivationButtons.write.name}
          handleClick_Write={() => handleClick_MotivationButtons('write')}
          callLabel={dataMotivationButtons.call.name}
          callHoverLabel={dataMotivationButtons.call.tel}
        />
      </div>
    </PageSetup>
  )
}



ModdingPage.propTypes = {
  dataModdingPage: PropTypes.object,
}



const mapMethodsToProps = (classDataService) => {
  return {
    dataModdingPage: classDataService.getModdingPageData(),
    dataMotivationButtons: classDataService.getMotivationButtonData(),
    generalInformation: classDataService.getGeneralInformation()
  }
};



export default withDataService(mapMethodsToProps)(ModdingPage);
