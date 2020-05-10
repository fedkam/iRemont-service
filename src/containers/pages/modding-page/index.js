// import './modding-page.scss';
import React from 'react';
import PropTypes from 'prop-types'
import { withDataService } from '../../hoc-helpers';
import Title from '../../../components/title';
import Detail from '../../../components/detail';
import Element from '../../../components/element';
import { MotivationButtons } from '../../motivation-buttons'
import { ReactComponent as IphonesIcon } from '../../../assets/images/icon-iPhones.svg';
import { ReactComponent as LightAppleIcon } from '../../../assets/images/icon-lightApple.svg';



const ModdingPage = ({ dataModdingPage }) => {
  const {
    header,
    details,
    elements,
    motivatilonButtons
  } = dataModdingPage;
  return (
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
        write={motivatilonButtons.write}
        call={motivatilonButtons.call}
      />
    </div>
  )
}



ModdingPage.propTypes = {
  dataModdingPage: PropTypes.object,
}



const mapMethodsToProps = (classDataService) => {
  return {
    dataModdingPage: classDataService.getModdingPageData()
  }
};



export default withDataService(mapMethodsToProps)(ModdingPage);
