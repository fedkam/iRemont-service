//import './price-item.scss'
import React from 'react'
import PropTypes from 'prop-types'



const Checkbox = ({ isActive = false }) => {
    const addCssClassName = isActive ? '\tcheckbox_theme_active' : '\tcheckbox_theme_inactive'
    return (
        <div className={`checkbox${addCssClassName}`} />
    )
}



const PriceItem = ({ id, title, subtitle, cost, currency, handleClick, isActive }) => {
    return (
        <div className='price-item' id={id} onClick={handleClick}>
            <div className='price-item__checkbox'>
                <Checkbox isActive={isActive} />
            </div>
            <div
                className={'price-item__wrapper-block ' + ((isActive && '\tprice-item__wrapper-block_theme_active') || '')}
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



export default React.memo(PriceItem);



// function memoComparison(prevProps, nextProps) {
//     /* Add in React.memo(PriceItem,memoComparison)*/
//     nextProps.id==0 && console.log('\n')
//     console.log("____id=", nextProps.id);
//     prevProps.id !== nextProps.id && console.log("\tid changed");
//     prevProps.isActive !== nextProps.isActive && console.log(`\tisActive changed for ${prevProps.isActive} --> ${nextProps.isActive}`);
//     prevProps.handleClick !== nextProps.handleClick && console.log("\thandleClick changed");
//     const ret = (
//         prevProps.id === nextProps.id &&
//         prevProps.title === nextProps.title &&
//         prevProps.subtitle === nextProps.subtitle &&
//         prevProps.cost === nextProps.cost &&
//         prevProps.currency === nextProps.currency &&
//         prevProps.handleClick === nextProps.handleClick &&
//         prevProps.isActive === nextProps.isActive
//     )
//     return ret;
// }