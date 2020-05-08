import React from 'react';
import { DataServiceConsumer } from '../service-context';



const withDataService = (mapMethodsToProps) => (Wrapped) => {
  return (props) => {
    return (
      <DataServiceConsumer>
        { //dataService - из Provider
          (dataService) => {
            const serviceProps = mapMethodsToProps(dataService);
            return (
              <Wrapped {...props} {...serviceProps} />
            );
          }
        }
      </DataServiceConsumer>
    );
  }
};



export default withDataService;
