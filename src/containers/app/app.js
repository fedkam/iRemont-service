import React from 'react';
import './app.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BreakpointProvider } from "react-socks";
import Header from "../header";
import DataService from '../../services/data-service';
import { DataServiceProvider } from '../service-context';

function App() {
  const dataService = new DataService();
  return (
    <div className="App">
      <DataServiceProvider value={dataService}>
        <BreakpointProvider>
          <Router>
            <Header/>
            <Switch>
              <Route exact path="/" render={()=>(<h1>Home</h1>)} />
              <Route exact path="/repair" render={()=>(<h1>Ремонт</h1>)} />
              <Route exact path="/modding" render={()=>(<h1>Моддинг</h1>)} />
              <Route exact path="/about-modding" render={()=>(<h1>Все о запчастях</h1>)} />
              <Route exact path="/about-us" render={()=>(<h1>О нас</h1>)} />
            </Switch>
          </Router>
          <h1>Home</h1>
          <h1>Home</h1>
          <h1>Home</h1>
          <h1>Home</h1>
          <h1>Home</h1>
          <h1>Home</h1>
          <h1>Home</h1>
          <h1>Home</h1>
          <h1>Home</h1>
          <h1>Home</h1>
          <h1>Home</h1>
          <h1>Home</h1>
          <h1>Home</h1>
          <h1>Home</h1>
          <h1>Home</h1>
          <h1>Home</h1>
          <h1>Home</h1>
          <h1>Home</h1>
          <h1>Home</h1>
          <h1>Home</h1>
          <h1>Home</h1>
          <h1>Home</h1>
          <h1>Home</h1>
          <h1>Home</h1>

        </BreakpointProvider>
      </DataServiceProvider>
    </div>
  );
}

export default App;
