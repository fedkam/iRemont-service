//import './app.scss';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BreakpointProvider } from "react-socks";
import { NavBar } from '../navbar';
import DataService from '../../services/data-service';
import { DataServiceProvider } from '../service-context';
import { OfferPage, RepairPage, ModdingPage, SparePartsPage, AboutUsPage } from '../pages';



export default function App() {
  const dataService = new DataService();
  return (
    <div className="App">
      <DataServiceProvider value={dataService}>
        <BreakpointProvider>
          <Router>
            <NavBar />
            <Switch>
              <Route exact path="/" render={() => (<OfferPage />)} />
              <Route exact path="/repair" render={() => (<RepairPage />)} />
              <Route exact path="/modding" render={() => (<ModdingPage/>)} />
              <Route exact path="/about-modding" render={() => (<SparePartsPage/>)} />
              <Route exact path="/about-us" render={() => (<AboutUsPage/>)} />
            </Switch>
          </Router>
        </BreakpointProvider>
      </DataServiceProvider>
    </div>
  );
}

