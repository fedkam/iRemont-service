import React from 'react'
import PropTypes from 'prop-types'
import LinkElement from '../link-element'



const BreadCumbsItem = ({ breadCrumbsItem }) => {
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



const BreadCumbs = ({ addCssClassName = '', breadCrumbs }) => {
    if (breadCrumbs.length >= 2) {
        return (
            <div className={'bread-crumbs' + addCssClassName}>
                {breadCrumbs.map((breadCrumbsItem, index) => (
                    <BreadCumbsItem
                        breadCrumbsItem={breadCrumbsItem}
                        key={index}
                    />
                ))}
            </div>
        );
    } else {
        return null;
    }
}



BreadCumbsItem.propTypes = {
    title: PropTypes.string
}



BreadCumbs.propTypes = {
    breadCrumbs: PropTypes.array
}



export default BreadCumbs
