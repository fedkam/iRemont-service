// import './spare-parts-page.scss'
import React from 'react'
import PropTypes from 'prop-types'
import { withDataService } from '../../dev-helpers'
import Title from '../../../components/title'
import Detail from '../../../components/detail'
import { MotivationLinks } from '../../../components/motivation-links'
import PageSetup from '../page-setup'


export const SparePartsPage = ({ dataSparePartsPage, dataLinks, generalInformation }) => {
    const { header, details_original, details_сhineseСounterpart, details_offer, motivation } = dataSparePartsPage;
    return (
        <PageSetup
            copyright
            resetScroll
            transitionAnimationPages
        >
            <div className='spare-parts-page'>
                <Title
                    className='pages__title_theme_indent'
                    title={header.title}
                    subtitle={header.subtitle}
                />
                <div className='spare-parts-page__details'>
                    <Detail
                        className='spare-parts-page__detail'
                        title={details_original.title}
                        info={details_original.info}
                    />
                    <Detail
                        className='spare-parts-page__detail'
                        title={details_сhineseСounterpart.title}
                        info={details_сhineseСounterpart.info}
                    />
                    <Detail
                        className='spare-parts-page__detail'
                        title={details_offer.title}
                        info={details_offer.info}
                    />
                </div>
                <Title
                    className='spare-parts-page__title_theme_indent'
                    title={motivation.title}
                />
                <MotivationLinks
                    addCssClassName={'\tspare-parts-page__motivation-links'}
                    dataLinks={dataLinks}
                />
            </div>
        </PageSetup>
    )
}



SparePartsPage.propTypes = {
    dataLinks: PropTypes.object,
    dataSparePartsPage: PropTypes.object
}



const mapMethodsToProps = (classDataService) => {
    return {
        dataLinks: classDataService.getLinksData(),
        dataSparePartsPage: classDataService.getSparePartsPageData(),
        generalInformation: classDataService.getGeneralInformation()
    }
};



export default withDataService(mapMethodsToProps)(SparePartsPage);