// import './spare-parts-page.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { withDataService, ResetScroll } from '../../dev-helpers';
import Title from '../../../components/title';
import Detail from '../../../components/detail';
import { MotivationLinks } from '../../../components/motivation-links';
import Copyright from '../../../components/copyright'


export const SparePartsPage = ({ dataSparePartsPage, dataLink, generalInformation  }) => {
    const { header, details_original, details_сhineseСounterpart, details_offer, motivation } = dataSparePartsPage;
    const { copyright } = generalInformation;
    return (
        <>
            <ResetScroll />
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
                dataLink={dataLink}
            />
        </div>
        <Copyright
                addCssClassName={'\tpages__copyright'}
                title={copyright}
            />
        </>
    )
}



SparePartsPage.propTypes = {
    dataLink: PropTypes.object,
    dataSparePartsPage: PropTypes.object
}



const mapMethodsToProps = (classDataService) => {
    return {
        dataLink: classDataService.getLinkData(),
        dataSparePartsPage: classDataService.getSparePartsPageData(),
        generalInformation: classDataService.getGeneralInformation()
    }
};



export default withDataService(mapMethodsToProps)(SparePartsPage);