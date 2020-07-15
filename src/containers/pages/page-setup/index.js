import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { withDataService, ResetScroll } from '../../dev-helpers'
import Copyright from '../../../components/copyright'
import TransitionAnimationPages from '../../../components/transition-animation-pages'



const PageSetup = ({ generalInformation, resetScroll, copyright, children, transitionAnimationPages }) => {
    return (
        <>
            {resetScroll && <ResetScroll resetScroll />}
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
}



PageSetup.propTypes = {
    resetScroll: PropTypes.bool,
    copyright: PropTypes.bool,
    children: PropTypes.node,
    transitionAnimationPages: PropTypes.bool 
}



const mapMethodsToProps = (classDataService) => {
    return {
        generalInformation: classDataService.getGeneralInformation()
    }
};



export default memo(withDataService(mapMethodsToProps)(PageSetup));