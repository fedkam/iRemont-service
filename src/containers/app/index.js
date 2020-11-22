//import './app.scss'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { BreakpointProvider } from 'react-socks'
import DataService from '../../services/data-service'
import { DataServiceProvider } from '../service-context'
import ErrorBoundary from '../error-boundary'
import { NavBar } from '../navbar'
import Routing from '../../routing'



export default function App() {
  const dataService = new DataService();
  return (
    <div className='App'>
      <ErrorBoundary motivationLink={null}>
        <DataServiceProvider value={dataService}>
          <BreakpointProvider>
            <Router>
              <ErrorBoundary>
                <NavBar />
                <Routing/>
              </ErrorBoundary>
            </Router>
          </BreakpointProvider>
        </DataServiceProvider>
      </ErrorBoundary>
    </div>
  );
}

