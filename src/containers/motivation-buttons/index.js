//import './motivation-buttons.scss';
import React, { useState } from 'react';



function createWhatsAppUrl(url, message) {
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
    link,
    children
  } = props;
  const classNameTheme = 'motivation-button\t' + classNameButtonStyle;
  return (
    <a className={classNameTheme} href={link}>
      {children}
    </a>
  )
}



export const MotivationButtons = ({ write, call }) => {
  let url = createWhatsAppUrl(write.url, write.message);
  return (
    <div className='motivation-buttons'>
      <MotivationButton link={url}>
        {write.name}
      </MotivationButton>
      <HoverWrapper>
        {({ hover }) => (
          <MotivationButton
            classNameButtonStyle='motivation-button_theme_outline'
            link={'tel:' + call.tel}
          >
            {hover ? call.tel : call.name}
          </MotivationButton>
        )}
      </HoverWrapper>
    </div>
  )
};

