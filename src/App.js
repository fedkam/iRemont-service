import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BreakpointProvider } from "react-socks";
import Header from "./containers/header";


function App() {
  return (
    <div className="App">
      <BreakpointProvider>
        <Router>
          <Header/>
          <Switch>
            <Route exact path="/" render={()=>(<h1>Home</h1>)} />
          </Switch>
        </Router>
      </BreakpointProvider>
    </div>
  );
}

export default App;
