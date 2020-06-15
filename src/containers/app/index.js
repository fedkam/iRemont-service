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



export default function App() {
  const dataService = new DataService();
  return (
    <div className='App'>
      <ErrorBoundary>
        <DataServiceProvider value={dataService}>
          <BreakpointProvider>
            <Router>
              <Switch>
                <Route exact path='/' render={() => (<OfferPage />)} />
                <Route exact path='/repair' render={() => (<RepairPage />)} />
                <Route exact path='/repair/old-model' render={() => (<OldModelPage />)} />
                <Route exact path='/repair/:id' render={() => (<PricePage />)} />
                <Route exact path='/modding' render={() => (<ModdingPage />)} />
                <Route exact path='/about-modding' render={() => (<SparePartsPage />)} />
                <Route exact path='/about-us' render={() => (<AboutUsPage />)} />
                <Route path='*' render={() => (<ErrorPage subtitle={'404 Страница не найдена.'}/>)} />
              </Switch>
            </Router>
          </BreakpointProvider>
        </DataServiceProvider>
      </ErrorBoundary>
    </div>
  );
}

