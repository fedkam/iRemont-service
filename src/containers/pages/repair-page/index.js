// import './repair-page.scss'
import React from 'react'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import { withDataService } from '../../dev-helpers'
import Title from '../../../components/title'
import DeviceList from '../../device-list'
import { MotivationLink } from '../../../components/motivation-links'
import PageSetup from '../page-setup'

const RepairPage = ({ dataRepairPage, dataIphones, dataLinks, generalInformation }) => {
  const { pathname } = useLocation();
  return (
    <PageSetup
      copyright
      resetScroll
      transitionAnimationPages
    >
      <div className='repair-page'>
        <Title
          className='pages__title_theme_indent'
          title={dataRepairPage.title}
          subtitle={dataRepairPage.subtitle}
        />
        <DeviceList
          deviceName='iPhone'
          dataDevices={dataIphones}
        />
        <MotivationLink
          addCssClassName={'\trepair-page__motivation-list'}
          name={dataLinks.other.name}
          path={pathname + dataLinks.other.path}
        />
      </div>
    </PageSetup>
  )
}



RepairPage.propTypes = {
  dataLinks: PropTypes.object,
  dataIphones: PropTypes.array,
  dataRepairPage: PropTypes.object
}



const mapMethodsToProps = (classDataService) => {
  return {
    dataLinks: classDataService.getLinksData(),
    dataIphones: classDataService.getIphoneList(),
    dataRepairPage: classDataService.getRepairPageData(),
    generalInformation: classDataService.getGeneralInformation()
  }
};



export default withDataService(mapMethodsToProps)(RepairPage);
