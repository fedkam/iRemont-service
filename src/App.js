import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BreakpointProvider } from "react-socks";
import Header from "./containers/header";
//import DataService from './services/data-service'
//import DataServiceProvider from './services/data-service'

function App() {
  //const dataService = new DataService();
  return (
    <div className="App">
      //<DataServiceProvider value={dataService}>
        <BreakpointProvider>
          <Router>
            <Header/>
            <Switch>
              <Route exact path="/" render={()=>(<h1>Home</h1>)} />
            </Switch>
          </Router>
        </BreakpointProvider>
    //  </DataServiceProvider>
    </div>
  );
}

export default App;
