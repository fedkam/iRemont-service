import React from 'react'
import PropTypes from 'prop-types'
import LinkElement from '../link-element'
import { findUrlName } from '../../containers/dev-helpers'

export function generateHierarchyLinks(dataLink, pathname, currentPage) {
    let currentHierarchyLinks = findUrlName(pathname, dataLink);
    currentHierarchyLinks.push({ title: currentPage });
    return currentHierarchyLinks;
}

const BreadCrumbsItem = ({ breadCrumbsItem }) => {
    if (breadCrumbsItem.path) {
        return (
            <>
                <LinkElement
                    className='bread-crumbs-item__link'
                    path={breadCrumbsItem.path}
                >
                    {breadCrumbsItem.name}
                </LinkElement>
                <div className='bread-crumbs-item__link'>/</div>
            </>
        )
    } else {
        return (
            <div className='bread-crumbs-item__link bread-crumbs-item__link_theme_active'>
                {breadCrumbsItem.title}
            </div>
        )
    }
}



export const BreadCrumbs = React.memo(({ addCssClassName = '', breadCrumbs }) => {
    if (breadCrumbs.length >= 2) {
        return (
            <div className={'bread-crumbs' + addCssClassName}>
                {breadCrumbs.map((breadCrumbsItem, index) => (
                    <BreadCrumbsItem
                        breadCrumbsItem={breadCrumbsItem}
                        key={index}
                    />
                ))}
            </div>
        );
    } else {
        return null;
    }
})



BreadCrumbsItem.propTypes = {
    title: PropTypes.string
}



BreadCrumbs.propTypes = {
    addCssClassName: PropTypes.string,
    breadCrumbs: PropTypes.array
}
