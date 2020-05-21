//import './motivation-buttons.scss';
import React, { useState } from 'react';
import PropTypes from 'prop-types'



export function generateMessage(price, model) {
  const hello = 'Здравствуйте,';
  let selectedServices = [], lengthSelectedServices, selectedService;
  price.map((priceItem) => {
    if (priceItem.isActive && priceItem.cost && selectedServices.length === 0) {
      selectedServices.push(priceItem.title.toLowerCase());
    } else if (priceItem.isActive && priceItem.cost && selectedServices.length !== 0) {
      selectedServices.push(priceItem.title.replace(/Замена/gi, ""));
    } else if (priceItem.singleSelection && priceItem.isActive && !priceItem.cost) {
      selectedService = priceItem.title.toLowerCase().replace(/\u00AB|\u00BB/gi, "");
    }
    return 0;
  })
  lengthSelectedServices = selectedServices.length;
  if (lengthSelectedServices) {
    let listSelectedServices;
    if (lengthSelectedServices < 2) {
      listSelectedServices = selectedServices.join(',');
    } else {
      listSelectedServices = `${selectedServices.slice(0, lengthSelectedServices - 1).join(',')} и ${selectedServices[lengthSelectedServices - 1]}`;
    }
    return (`${hello} для ${model} требуется ${listSelectedServices}.`);
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



export const HoverWrapper = ({ children }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {children({ hover: isHover })}
    </div>
  )
};



export const MotivationButton = (props) => {
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
}



export const MotivationButtons = (props) => {
  const {
    addCssClassName = '',
    writeLabel,
    handleClick_Write,
    callLabel,
    callHoverLabel,
    handleClick_Call = (() => document.location.href = 'tel:' + callHoverLabel)
  } = props;
  return (
    <div className={'motivation-buttons' + addCssClassName}>
      <MotivationButton handleClick={handleClick_Write}>
        {writeLabel}
      </MotivationButton>
      <HoverWrapper>
        {({ hover }) => (
          <MotivationButton
            classNameButtonStyle='motivation-button_theme_outline'
            handleClick={handleClick_Call}
          >
            {hover ? callHoverLabel : callLabel}
          </MotivationButton>
        )}
      </HoverWrapper>
    </div>
  )
};



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
