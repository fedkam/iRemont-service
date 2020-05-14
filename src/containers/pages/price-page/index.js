//import './price-page.scss'
import React from 'react'
import { withDataService, ResetScroll, findUrlName } from '../../dev-helpers';
import { useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import BreadCrumbs from '../../../components/bread-crumbs'
import Title from '../../../components/title';

const PricePage = ({ dataPricePage, dataLink }) => {
    const { header } = dataPricePage;
    const { pathname, state } = useLocation();
    const currentHierarchyLinks = findUrlName(pathname, dataLink);
    currentHierarchyLinks.push({ title: state.model });

    return (
        <div className='price-page_containder'>
            <ResetScroll />
            <BreadCrumbs breadCrumbs={currentHierarchyLinks} />
            <Title
                className='price-page__title_theme_indent'
                title={header.title}
                subtitle={
                    <>
                        <div className='price-page__subtitle_theme_size_r'>{header.subtitle_regular}</div>
                        <div className='price-page__subtitle_theme_size_b'>{header.subtitle_bold}</div>
                    </>
                }
            />
        </div>
    )
}



PricePage.propTypes = {
    dataPricePage: PropTypes.object,
    dataLink: PropTypes.object
}



const mapMethodsToProps = (classDataService) => {
    return {
        dataPricePage: classDataService.getPricePageData(),
        dataLink: classDataService.getLinkData()
    }
};



export default withDataService(mapMethodsToProps)(PricePage);
