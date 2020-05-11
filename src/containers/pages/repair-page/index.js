// import './repair-page.scss';
import React from 'react';
import PropTypes from 'prop-types'
import { withDataService, ResetScroll} from '../../dev-helpers';
import Title from '../../../components/title';
import IphoneList from '../../iphone-list';
import { MotivationLink } from '../../../components/motivation-links';



const RepairPage = ({ dataRepairPage, dataIphones, dataLink }) => (
  <div className='repair-page'>
    <ResetScroll />
    <Title
      className='pages__title_theme_indent'
      title={dataRepairPage.title}
      subtitle={dataRepairPage.subtitle}
    />
    <IphoneList dataIphones={dataIphones} />
    <MotivationLink
      addCssClassName={'\trepair-page__motivation-list'}
      data={dataLink.other} />
  </div>
)



RepairPage.propTypes = {
  dataLink: PropTypes.object,
  dataIphones: PropTypes.array,
  dataRepairPage: PropTypes.object
}



const mapMethodsToProps = (classDataService) => {
  return {
    dataLink: classDataService.getLinkData(),
    dataIphones: classDataService.getIphoneList(),
    dataRepairPage: classDataService.getRepairPageData()
  }
};



export default withDataService(mapMethodsToProps)(RepairPage);
