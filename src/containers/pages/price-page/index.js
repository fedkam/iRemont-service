// ОПТИМИЗИРОВАТЬ!
//import './price-page.scss'
import React, { useState } from 'react'
import { withDataService, ResetScroll, findUrlName } from '../../dev-helpers'
import { useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import BreadCrumbs from '../../../components/bread-crumbs'
import Title from '../../../components/title'
import PriceList from '../../price-list'
import { MotivationButtons, generateWhatsAppUrl, generateMessage } from '../../../containers/motivation-buttons'



const PricePage = ({ dataPricePage, dataLink, dataMotivationButtons }) => {
    const { header, priceLabel } = dataPricePage;
    const { pathname, state } = useLocation();
    const [price, setPrice] = useState(generatePrice());

    function generateHierarchyLinks() {
        let currentHierarchyLinks = findUrlName(pathname, dataLink);
        currentHierarchyLinks.push({ title: state.model });
        return currentHierarchyLinks;
    }

    function generatePrice() {
        let devicePrice = [];
        for (let label in state.priceCost) {
            if (priceLabel[label]) {
                devicePrice.push(
                    {
                        ...priceLabel[label],
                        cost: state.priceCost[label],
                        isActive: false
                    }
                );
            }
        }
        devicePrice[0].singleSelection = devicePrice[devicePrice.length - 1].singleSelection = true;
        return devicePrice;
    }

    const handleClick_Price = (id) => {
        let modifPrice = JSON.parse(JSON.stringify(price)); // глубокая копия state
        if (modifPrice[id].singleSelection) {
            let currentSelected = modifPrice[id].isActive; // запомнить значение
            modifPrice.map((priceItem) => priceItem.isActive = false); // сброс всех isActive, по нажатию "диагностика" или "нет в прайсе"
            modifPrice[id].isActive = currentSelected; // восстановить значение
        } else {
            modifPrice.map((priceItem) => priceItem.singleSelection && (priceItem.isActive = false)) // сброс всех singleSelection
        }
        modifPrice[id].isActive = !modifPrice[id].isActive; //инверсия значения
        setPrice(modifPrice);
    }

    const handleClick_MotivationButtons = (action) => {
        switch (action) {
            case 'write':
                let url = generateWhatsAppUrl(dataMotivationButtons.write.url, generateMessage(price, state.model));
                document.location.href = url;
                break;
            case 'call':
                break;
            default:
                console.error(`Error: function handleClick_MotivationButtons() doesn"t contain "${action}" argument`);
                break
        }
    }

    return (
        <div className='price-page_containder'>
            <button onClick={() => handleClick_MotivationButtons('writeц')}>test</button>
            <ResetScroll />
            <BreadCrumbs breadCrumbs={generateHierarchyLinks()} />
            <Title
                className='price-page__title_theme_indent'
                title={header.title}
                subtitle={
                    <>
                        <div className='price-page__subtitle_theme_size_r'>{header.subtitle_regular}</div>
                        <div className='price-page__subtitle_theme_size_b'>{header.subtitle_bold}</div>
                    </>
                }
            />
            <PriceList
                className='price-page__price-list_theme_indent'
                price={price}
                handleClick={handleClick_Price}
            />
            <MotivationButtons
                writeLabel={dataMotivationButtons.write.name}
                handleClick_Write={() => handleClick_MotivationButtons('write')}
                callLabel={dataMotivationButtons.call.name}
                callHoverLabel={dataMotivationButtons.call.tel}
            />
        </div>
    )
}



PricePage.propTypes = {
    dataPricePage: PropTypes.object,
    dataLink: PropTypes.object,
    dataMotivationButtons: PropTypes.object
}



const mapMethodsToProps = (classDataService) => {
    return {
        dataLink: classDataService.getLinkData(),
        dataPricePage: classDataService.getPricePageData(),
        dataMotivationButtons: classDataService.getMotivationButtonData()
    }
};



export default withDataService(mapMethodsToProps)(PricePage);
