// ОПТИМИЗИРОВАТЬ!
//import './price-page.scss'
import React, { useState } from 'react'
import { withDataService, ResetScroll, findUrlName } from '../../dev-helpers'
import { useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import BreadCrumbs from '../../../components/bread-crumbs'
import Title from '../../../components/title'
import PriceList from '../../price-list'
import { MotivationButtons } from '../../../containers/motivation-buttons'



const PricePage = ({ dataPricePage, dataLink, dataMotivationButtons }) => {
    const { header, priceLabel } = dataPricePage;
    const { pathname, state } = useLocation();
    const [price, setPrice] = useState(generatePrice());
    dataMotivationButtons.write.message = 'Здравствуйте,';

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

    const handleClick = (id) => {
        let modifPrice = JSON.parse(JSON.stringify(price));
        if (modifPrice[id].singleSelection) {
            let currentSelected = modifPrice[id].isActive; // сохранить значение
            modifPrice.map((priceItem) => priceItem.isActive = false); // сброс всех isActive, по нажатию "диагностика" или "нет в прайсе"
            modifPrice[id].isActive = currentSelected; // восстановить значение
        } else {
            modifPrice.map((priceItem) => priceItem.singleSelection && (priceItem.isActive = false)) // сброс всех singleSelection
        }
        modifPrice[id].isActive = !modifPrice[id].isActive;
        setPrice(modifPrice);
    }

    return (
        <div className='price-page_containder'>
            <button onClick={() => (document.location.href = "https://yandex.ru/")}>test</button>
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
                handleClick={handleClick}
            />
            <MotivationButtons
                write={dataMotivationButtons.write}
                call={dataMotivationButtons.call}
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
