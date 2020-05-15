import React from 'react'
import PropTypes from 'prop-types'

const PriceItem = ({ title, subtitle, cost, currency }) => {
    return (
        <div className='price-item'>
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

}

export default PriceItem
