// import './modding-page.scss';
import React from 'react';
import PropTypes from 'prop-types'
import { withDataService, ResetScroll } from '../../dev-helpers';
import Title from '../../../components/title';
import Detail from '../../../components/detail';
import Element from '../../../components/element';
import { MotivationButtons } from '../../motivation-buttons'
import { ReactComponent as IphonesIcon } from '../../../assets/images/icon-iPhones.svg';
import { ReactComponent as LightAppleIcon } from '../../../assets/images/icon-lightApple.svg';



const ModdingPage = ({ dataModdingPage, dataMotivationButtons }) => {
  const {
    header,
    details,
    elements,
  } = dataModdingPage;
  dataMotivationButtons.write.message='Здравствуйте, хочу сделать моддинг iPhone';
  return (
    <div className='modding-page'>
      <ResetScroll />
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
        write={dataMotivationButtons.write}
        call={dataMotivationButtons.call}
      />
    </div>
  )
}



ModdingPage.propTypes = {
  dataModdingPage: PropTypes.object,
}



const mapMethodsToProps = (classDataService) => {
  return {
    dataModdingPage: classDataService.getModdingPageData(),
    dataMotivationButtons: classDataService.getMotivationButtonData()
  }
};



export default withDataService(mapMethodsToProps)(ModdingPage);
