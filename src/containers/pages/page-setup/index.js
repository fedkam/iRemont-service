import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { withDataService, ResetScroll } from '../../dev-helpers'
import { NavBar } from '../../navbar'
import Copyright from '../../../components/copyright'
import TransitionAnimationPages from '../../../components/transition-animation-pages'



const PageSetup = memo(({ generalInformation, resetScroll, navbar, copyright, children, transitionAnimationPages }) => {
    return (
        <>
            {resetScroll && <ResetScroll resetScroll />}
            {navbar && <NavBar />}
            {children &&
                transitionAnimationPages ? <TransitionAnimationPages children={children} /> : children
            }
            {copyright &&
                <Copyright
                    addCssClassName={'\tpages__copyright'}
                    title={generalInformation.copyright}
                />
            }
        </>
    )
})



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



export default withDataService(mapMethodsToProps)(PageSetup);