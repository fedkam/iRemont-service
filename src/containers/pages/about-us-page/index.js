// import './about-us-page.scss'
import React from 'react'
import PropTypes from 'prop-types'
import { withDataService, ResetScroll } from '../../dev-helpers'
import Social from '../../../components/social'
import Title from '../../../components/title'
import Detail from '../../../components/detail'
import { MapGoogle } from '../../../components/map'
import Copyright from '../../../components/copyright'
import { NavBar } from '../../navbar'


export const AboutUsPage = ({ dataAboutUsPage, generalInformation }) => {
    const {
        header,
        contacts,
        details_office,
        details_quality,
        details_efficiency,
        details_responsiveness,
    } = dataAboutUsPage;
    const { copyright } = generalInformation;
    return (
        <>
            <ResetScroll />
            <NavBar/>
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
                            <div className='about-us-page__email-contact'>{contacts.email}</div>
                            <Social />
                        </>
                    }
                />
            </div>
            <Copyright
                addCssClassName={'\tpages__copyright'}
                title={copyright}
            />
        </>
    )
}



AboutUsPage.propTypes = {
    dataAboutUsPage: PropTypes.object,
    dataLink: PropTypes.object
}



const mapMethodsToProps = (classDataService) => {
    return {
        dataAboutUsPage: classDataService.getAboutUsPageData(),
        dataLink: classDataService.getLinkData(),
        generalInformation: classDataService.getGeneralInformation()
    }
};



export default withDataService(mapMethodsToProps)(AboutUsPage);