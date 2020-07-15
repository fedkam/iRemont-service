//import './app.scss'
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { BreakpointProvider } from 'react-socks'
import DataService from '../../services/data-service'
import { DataServiceProvider } from '../service-context'
import ErrorBoundary from '../error-boundary'
import {
  OfferPage,
  RepairPage,
  OldModelPage,
  ModdingPage,
  SparePartsPage,
  AboutUsPage,
  PricePage,
  ErrorPage
} from '../pages'
import { NavBar } from '../navbar'



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
                <Switch>
                  <Route exact path='/' component={OfferPage} />
                  <Route exact path='/repair' component={RepairPage} />
                  <Route exact path='/repair/old-model' component={OldModelPage} />
                  <Route exact path='/repair/:id' component={PricePage} />
                  <Route exact path='/modding' component={ModdingPage} />
                  <Route exact path='/about-modding' component={SparePartsPage} />
                  <Route exact path='/about-us' component={AboutUsPage} />
                  <Route path='*' render={() => (<ErrorPage subtitle={'404 Страница не найдена.'} />)} />
                </Switch>
              </ErrorBoundary>
            </Router>
          </BreakpointProvider>
        </DataServiceProvider>
      </ErrorBoundary>
    </div>
  );
}

