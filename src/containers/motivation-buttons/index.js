//import './motivation-buttons.scss';
import React, { useState, memo, useCallback } from 'react';
import PropTypes from 'prop-types'



export function generateMessage(price, model) {
  const hello = 'Здравствуйте,';
  let specialItems = 0; //для подсчета количества пунктов одиночного выделения 'Диагностика'(diagnostics),'Моей поломки нет в прайсе'(notFound).
  let selectedServices = [], lengthSelectedServices, selectedService;
  let allBroken = 'Телефон в хламину...';

  //парсинг priceItem и генерация selectedServices (массив с именами выделенных пунктов, с удаленными лишними словами и символами. Для генерации сообщения)
  price.map((priceItem) => {
    if (priceItem.singleSelection) { specialItems += 1; }
    if (priceItem.isActive && selectedServices.length === 0) {
      selectedServices.push(priceItem.title.toLowerCase()); //первое добавление
    } else if (priceItem.isActive && selectedServices.length !== 0) {
      selectedServices.push(priceItem.title.replace(/Замена/gi, "").toLowerCase()); //последующие добавления
    } else if (priceItem.singleSelection && priceItem.isActive && !priceItem.cost) {
      selectedService = priceItem.title.toLowerCase().replace(/\u00AB|\u00BB/gi, ""); //удаление кавычек "" 
    }
    return 0;
  })

  lengthSelectedServices = selectedServices.length;

  //генерация сообщения
  if (lengthSelectedServices) {
    let listSelectedServices;
    if ((price.length - specialItems) !== lengthSelectedServices) {
      allBroken = ''; //выбран ремонт некоторых деталей(не всех), т.е. -"телефон не в хламину" =)
    }
    if (lengthSelectedServices < 2) {
      listSelectedServices = selectedServices.join(',');
    } else {
      listSelectedServices = `${selectedServices.slice(0, lengthSelectedServices - 1).join(',')} и ${selectedServices[lengthSelectedServices - 1]}`;
    }
    return (`${hello} для ${model} требуется ${listSelectedServices}. ${allBroken}`);
  } else if (selectedService) {
    return (`${hello} ${selectedService} для ${model}. Описание поломки:`);
  } else if (!lengthSelectedServices && !selectedService) {
    return (`${hello} интересует ремонт ${model}.`);
  }
}



export function generateWhatsAppUrl(url, message) {
  if (message) {
    return (url + '?text=' + encodeURIComponent(message));
  } else {
    return url;
  }
}



export const HoverWrapper = memo(function HoverWrapper({ children }) {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {children({ hover: isHover })}
    </div>
  )
});



export const MotivationButton = memo(function MotivationButton(props) {
  const {
    classNameButtonStyle = 'motivation-button_theme_primary',
    handleClick,
    children
  } = props;
  const classNameTheme = 'motivation-button\t' + classNameButtonStyle;
  return (
    <div className={classNameTheme} onClick={handleClick}>
      {children}
    </div>
  )
})



export const MotivationButtons = memo(function MotivationButtons(props) {
  const {
    addCssClassName = '',
    writeLabel,
    handleClick_Write,
    callLabel,
    callHoverLabel,
    handleClick_Call = () => document.location.href = 'tel:' + callHoverLabel
  } = props;

  const memoHandleClick_Call = useCallback(handleClick_Call, [callHoverLabel])

  const memoHoverMotivationButton = useCallback(({ hover }) => (
    <MotivationButton
      classNameButtonStyle='motivation-button_theme_outline'
      handleClick={memoHandleClick_Call}
    >
      {hover ? callHoverLabel : callLabel}
    </MotivationButton>
  ), [callHoverLabel, callLabel, memoHandleClick_Call])

  return (
    <div className={'motivation-buttons' + addCssClassName}>
      <MotivationButton handleClick={handleClick_Write}>
        {writeLabel}
      </MotivationButton>
      <HoverWrapper>
        {memoHoverMotivationButton}
      </HoverWrapper>
    </div>
  )
})



generateWhatsAppUrl.propTypes = {
  url: PropTypes.string,
  message: PropTypes.string
}

HoverWrapper.propTypes = {
  children: PropTypes.func
}

MotivationButton.propTypes = {
  classNameButtonStyle: PropTypes.string,
  link: PropTypes.string,
  children: PropTypes.node
}

MotivationButtons.propTypes = {
  write: PropTypes.object,
  call: PropTypes.object
}

