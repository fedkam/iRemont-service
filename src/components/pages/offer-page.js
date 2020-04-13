import React from 'react';
import {withDataService} from '../hoc-helpers';

const OfferPage = ({dataOffer}) => (
  <div>
    
  </div>
)



const mapMethodsToProps = (classDataService) => {
  return {
    dataOffer: classDataService.getOfferData()
  }
};



export default withDataService(mapMethodsToProps)(NavBar);
