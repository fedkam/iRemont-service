//import './price-item.scss'
import React from 'react'
import PropTypes from 'prop-types'

const PriceItem = ({ id, title, subtitle, cost, currency, handleClick, isActive }) => {
    return (
        <div
            className={'price-item' + ((isActive && '\tprice-item_theme_active') || '')}
            onClick={() => handleClick(id)}
        >
            <div className='price-item__description-block'>
                {title && (
                    <div className='price-item__title'>
                        {title}
                    </div>
                )}
                {subtitle && (
                    <div className='price-item__subtitle'>
                        {subtitle}
                    </div>
                )}
            </div>
            <div className='price-item__cost-block'>
                {cost && (
                    <>
                        <div className='price-item__cost'>
                            {cost}
                        </div>
                        <div className='price-item__currency'>
                            {currency}
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

PriceItem.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    cost: PropTypes.number,
    currency: PropTypes.string,
    handleClick: PropTypes.func,
    isActive: PropTypes.bool
}

export default PriceItem
