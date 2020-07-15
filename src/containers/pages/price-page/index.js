//import './price-page.scss'
import React, { useState, useMemo, useCallback } from 'react'
import { withDataService } from '../../dev-helpers'
import { useLocation, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { BreadCrumbs, generateHierarchyLinks } from '../../../components/bread-crumbs'
import Title from '../../../components/title'
import PriceList from '../../price-list'
import { MotivationButtons, generateWhatsAppUrl, generateMessage } from '../../../containers/motivation-buttons'
import PageSetup from '../page-setup'



const CustomTitle = React.memo(({ title, subtitleRegular, subtitleBold }) => {
    const subtitle = useMemo(() => (
        <>
            <div className='price-page__subtitle_theme_size_r'>{subtitleRegular}</div>
            <div className='price-page__subtitle_theme_size_b'>{subtitleBold}</div>
        </>
    ), [subtitleRegular, subtitleBold]); //подготовка для React.memo(Title) 
    return (
        <Title
            className='price-page__title_theme_indent'
            title={title}
            subtitle={subtitle}
        />
    )
})



const PricePage = ({ dataPricePage, dataLink, dataMotivationButtons }) => {
    const { header, priceLabel } = dataPricePage;
    const { pathname, state } = useLocation();
    const [price, setPrice] = useState(generatePrice());

    function generatePrice() {
        let devicePrice = [];
        if (state) {
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
        }
        return devicePrice;
    }

    const handleClick_Price = useCallback(e => {
        const id = e.currentTarget.id;
        if (id) {
            setPrice(prevPrice => {
                let newPrice = JSON.parse(JSON.stringify(prevPrice));
                if (newPrice[id].singleSelection) {
                    const currentSelected = newPrice[id].isActive; // запомнить значение
                    newPrice.map((priceItem) => priceItem.isActive = false); // сброс всех isActive, по нажатию "диагностика" или "нет в прайсе"
                    newPrice[id].isActive = currentSelected; // восстановить значение
                } else {
                    newPrice.map((priceItem) => priceItem.singleSelection && (priceItem.isActive = false)) // сброс всех singleSelection
                }
                newPrice[id].isActive = !newPrice[id].isActive;
                return newPrice;
            });
        }
    }, [])

    const handleClick_MotivationButtons = (action) => () => {
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

    const hierarchyLinks = useMemo(() => {
        if (state) {
            return generateHierarchyLinks(dataLink, pathname, state.model)
        }
    }, [dataLink, pathname, state])

    return (
        (pathname && state) ?
            <PageSetup
                copyright
                resetScroll
                transitionAnimationPages
            >
                <div className='price-page_container'>
                    <BreadCrumbs breadCrumbs={hierarchyLinks} />
                    <CustomTitle
                        title={header.title}
                        subtitleRegular={header.subtitle_regular}
                        subtitleBold={header.subtitle_bold}
                    />
                    <PriceList
                        className='price-page__price-list_theme_indent'
                        price={price}
                        handleClick={handleClick_Price}
                    />
                    <MotivationButtons
                        writeLabel={dataMotivationButtons.write.name}
                        handleClick_Write={handleClick_MotivationButtons('write')}
                        callLabel={dataMotivationButtons.call.name}
                        callHoverLabel={dataMotivationButtons.call.tel}
                    />
                </div>
            </PageSetup >
            :
            <Redirect to="/repair" />
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
        dataMotivationButtons: classDataService.getMotivationButtonData(),
        generalInformation: classDataService.getGeneralInformation()
    }
};



export default withDataService(mapMethodsToProps)(PricePage);
