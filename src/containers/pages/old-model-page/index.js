// import './old-model-page.scss';
import React from 'react'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import { withDataService } from '../../dev-helpers'
import { MotivationButtons, generateWhatsAppUrl } from '../../motivation-buttons'
import { BreadCrumbs, generateHierarchyLinks } from '../../../components/bread-crumbs'
import Title from '../../../components/title'
import Detail from '../../../components/detail'
import PageSetup from '../page-setup'

export const OldModelPage = ({ dataOldModelPage, dataMotivationButtons, dataLink, generalInformation }) => {
    const { header, details_more_time } = dataOldModelPage;
    const { pathname } = useLocation();
    const handleClick_MotivationButtons = (action) => {
        switch (action) {
            case 'write':
                let url = generateWhatsAppUrl(dataMotivationButtons.write.url, 'Здравствуйте, интересует ремонт устаревшей модели.\nМодель:\nОписание проблемы:');
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
            <div className='old-model-page_container'>
                <BreadCrumbs breadCrumbs={generateHierarchyLinks(dataLink, pathname, header.title)} />
                <Title
                    className='old-model-page__title_theme_indent'
                    title={header.title}
                    subtitle={header.subtitle}
                />
                <div className='old-model-page__details'>
                    <Detail
                        className='old-model-page__detail'
                        title={details_more_time.title}
                        info={details_more_time.info}
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



OldModelPage.propTypes = {
    dataOldModelPage: PropTypes.object,
    dataMotivationButtons: PropTypes.object,
    dataLink: PropTypes.object,
    generalInformation: PropTypes.object
}



const mapMethodsToProps = (classDataService) => {
    return {
        dataLink: classDataService.getLinkData(),
        dataOldModelPage: classDataService.getOldModelPageData(),
        dataMotivationButtons: classDataService.getMotivationButtonData(),
        generalInformation: classDataService.getGeneralInformation()
    }
};



export default withDataService(mapMethodsToProps)(OldModelPage);