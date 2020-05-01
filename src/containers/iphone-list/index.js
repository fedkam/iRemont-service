// import './repair-page.scss';
import React from 'react';
import Device from '../../components/device';
import LinkElement from '../../components/link-element'


const IphoneList = ({ className, dataIphones}) => {
  return (
    <div className={className}>
      {dataIphones.map((iphone, index)=>(
        <LinkElement 
          path={{
            pathname: `/repair/${iphone.model.replace(/ /gi, "")}`,
            state: iphone.price
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



export default IphoneList;