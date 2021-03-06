import React from 'react'
import ErrorPage from '../pages/error-page'



export default class ErrorBoundary extends React.Component {

  state = {
    hasError: false
  };

  componentDidCatch() {
    this.setState({
      hasError: true
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.motivationLink ?
          <ErrorPage motivationLink={this.props.motivationLink} />
          :
          <ErrorPage />
      )
    }
    return this.props.children;
  }
}