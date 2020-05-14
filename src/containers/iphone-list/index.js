// import './repair-page.scss';
import React from 'react';
import PropTypes from 'prop-types'
import { useLocation } from "react-router-dom";
import Device from '../../components/device';
import LinkElement from '../../components/link-element'



const IphoneList = ({ dataIphones }) => {
  const curentUrl = useLocation();
  return (
    <div className='iphone-list__list-devices'>
      {dataIphones.map((iphone, index) => (
        <LinkElement
          path={{
            pathname: `${curentUrl.pathname}/${iphone.model.replace(/ /gi, "")}`,
            state: {
              model: `iPhone ${iphone.model}`,
              price: iphone.price
            }
          }}
          key={index}
        >
          <Device
            model={iphone.model}
            image_1x={iphone.image_1x}
            image_2x={iphone.image_2x}
          />
        </LinkElement>
      ))}
    </div>
  );
}



IphoneList.propTypes = {
  dataIphones: PropTypes.array
}



export default IphoneList;