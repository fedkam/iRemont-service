//import './price-list.scss'
import React from 'react'
import PropTypes from 'prop-types'
import PriceItem from '../../components/price-item'



const PriceList = ({ className, price, handleClick }) => {
    return (
        <div className={className}>
            {price.map((priceItem, index) => (
                <PriceItem
                    key={index}
                    id={index}
                    title={priceItem.title}
                    subtitle={priceItem.subtitle}
                    cost={priceItem.cost}
                    currency='руб.'
                    handleClick={handleClick}
                    isActive={priceItem.isActive}
                />
            ))}
        </div>
    )
}



PriceList.propTypes = {
    className: PropTypes.string,
    price: PropTypes.array,
    handleClick: PropTypes.func
}



export default PriceList
