import React from 'react'
import PropTypes from 'prop-types'
import { withDataService, ResetScroll } from '../../dev-helpers'
import { NavBar } from '../../navbar'
import Copyright from '../../../components/copyright'


const PageSetup = ({ generalInformation, resetScroll, navbar, copyright, children }) => {
    return (
        <>
            {resetScroll && <ResetScroll />}
            {navbar && <NavBar />}
            {children && children}
            {copyright &&
                <Copyright
                    addCssClassName={'\tpages__copyright'}
                    title={generalInformation.copyright}
                />
            }
        </>
    )
}



PageSetup.propTypes = {
    resetScroll: PropTypes.bool,
    navbar: PropTypes.bool,
    copyright: PropTypes.bool,
    children: PropTypes.node
}



const mapMethodsToProps = (classDataService) => {
    return {
        generalInformation: classDataService.getGeneralInformation()
    }
};



export default React.memo(withDataService(mapMethodsToProps)(PageSetup));