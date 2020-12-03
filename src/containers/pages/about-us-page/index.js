// import './about-us-page.scss'
import React from 'react'
import PropTypes from 'prop-types'
import { withDataService, generateCanonicalUrl } from '../../dev-helpers'
import { useLocation } from 'react-router-dom'
import Social from '../../../components/social'
import Title from '../../../components/title'
import Detail from '../../../components/detail'
import { MapGoogle } from '../../../components/map'
import PageSetup from '../page-setup'



export const AboutUsPage = ({ dataAboutUsPage, generalInformation, dataLinks }) => {
    const {
        header,
        contacts,
        details_office,
        details_quality,
        details_efficiency,
        details_responsiveness,
    } = dataAboutUsPage;
    const {
        whatsApp,
        instagram,
        vk
    } = dataLinks;
    const { domainName } = generalInformation;
    const { pathname } = useLocation();

    return (
        <PageSetup
            copyright
            resetScroll
            transitionAnimationPages
            seo={generateCanonicalUrl(dataAboutUsPage.seo, domainName, pathname)}
        >
            <div className='about-us-page'>
                <Title
                    className='pages__title_theme_indent'
                    title={header.title}
                    subtitle={header.subtitle}
                />
                <div className='about-us-page__details'>
                    <Detail
                        className='about-us-page__detail'
                        title={details_quality.title}
                        info={details_quality.info}
                    />
                    <Detail
                        className='about-us-page__detail'
                        title={details_efficiency.title}
                        info={details_efficiency.info}
                    />
                    <Detail
                        className='about-us-page__detail'
                        title={details_responsiveness.title}
                        info={details_responsiveness.info}
                    />
                    <Detail
                        className='about-us-page__detail'
                        title={details_office.title}
                        info={details_office.info}
                    />
                </div>
                <MapGoogle
                    className='about-us-page__map'
                    url='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2398.589918351368!2d158.65046952889685!3d53.04570705495119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x58e1974a679aaaab%3A0x96bffc57d9b4355a!2si%20remont%2041!5e0!3m2!1sru!2sru!4v1588991540393!5m2!1sru!2sru'
                />
                <Title
                    className='about-us-page__title_theme_indent'
                    title={contacts.title}
                    subtitle={
                        <>
                            <div className='about-us-page__contact'>
                                <div>{contacts.email}</div>
                                <a
                                    className='about-us-page__contact_number-phone'
                                    href={"tel:" + contacts.phoneNumber}
                                >
                                    {contacts.phoneNumber}
                                </a>
                            </div>
                            <Social
                                whatsAppLink={whatsApp}
                                instagramLink={instagram}
                                vkLink={vk}
                            />
                        </>
                    }
                />
            </div>
        </PageSetup>
    )
}



AboutUsPage.propTypes = {
    dataAboutUsPage: PropTypes.object,
    dataLinks: PropTypes.object
}



const mapMethodsToProps = (classDataService) => {
    return {
        dataAboutUsPage: classDataService.getAboutUsPageData(),
        dataLinks: classDataService.getLinksData(),
        generalInformation: classDataService.getGeneralInformation()
    }
};



export default withDataService(mapMethodsToProps)(AboutUsPage);