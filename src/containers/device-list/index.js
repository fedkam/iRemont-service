// import './repair-page.scss';
import React from 'react';
import PropTypes from 'prop-types'
import { useLocation } from "react-router-dom";
import Device from '../../components/device';
import LinkElement from '../../components/link-element'



const DeviceList = ({ dataDevices, deviceName }) => {
  const curentUrl = useLocation();
  return (
    <div className='device-list__list-devices'>
      {dataDevices.map((device, index) => (
        <LinkElement
          path={{
            pathname: `${curentUrl.pathname}/${device.model.replace(/ /gi, "").toLowerCase()}`
          }}
          key={index}
        >
          <Device
            model={device.model}
            image_1x={device.image_1x}
            image_2x={device.image_2x}
          />
        </LinkElement>
      ))}
    </div>
  );
}



DeviceList.propTypes = {
  dataDevices: PropTypes.array,
  deviceName: PropTypes.string
}



export default DeviceList;