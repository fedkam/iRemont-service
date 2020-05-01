// import './repair-page.scss';
import React from 'react';
import { withDataService } from '../../hoc-helpers';
import Title from '../../../components/title';
import IphoneList from '../../iphone-list';
import { MotivationLink } from '../../../components/motivation-links';


const RepairPage = ({ dataRepairPage, dataIphones, dataLink }) => (
  <div className='repair-page'>
    <Title
      className='repair-page__title'
      title={dataRepairPage.title}
      subtitle={dataRepairPage.subtitle}
    />
    <IphoneList
      className='repair-page__list-devices'
      dataIphones={dataIphones}
    />
    <MotivationLink className='repair-page__motivation-list' data={dataLink.other} />
  </div>
)



const mapMethodsToProps = (classDataService) => {
  return {
    dataRepairPage: classDataService.getRepairPageData(),
    dataIphones: classDataService.getIphoneList(),
    dataLink: classDataService.getLinkData()
  }
};



export default withDataService(mapMethodsToProps)(RepairPage);
