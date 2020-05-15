import React from 'react'
import PropTypes from 'prop-types'
import PriceItem from '../../components/price-item'

const PriceList = ({className, priceLabel, priceCost }) => {
    const generatePrice = (priceLabel, priceCost) => {
        let devicePrice = [];
        for (let label in priceLabel) {
            if (priceCost[label]) {
                devicePrice.push(
                    <PriceItem
                        title={priceLabel[label].title}
                        subtitle={priceLabel[label].subtitle}
                        cost={priceCost[label]}
                        currency='руб.'
                    />
                )
            }
        }
        return (devicePrice)
    }

    return (
        <div className={className}>
            <PriceItem
                title='Диагностика'
                subtitle='Бесплатно, в случае ремонта'
                cost='500'
                currency='руб.'
            />
            {generatePrice(priceLabel, priceCost)}
            <PriceItem
                title={'\u00ABМоей поломки нет в прайсе\u00BB'}
                subtitle='Уточните в чате или по телефону'
            />
        </div>
    )
}

PriceList.propTypes = {

}

export default PriceList
