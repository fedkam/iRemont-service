import React from 'react';
import PropTypes from 'prop-types'
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



withDataService.propTypes = {
  mapMethodsToProps: PropTypes.func
}



export default withDataService;
