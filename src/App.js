import React from 'react';
import Header from './Header';
import './App.css';
import './firebase/config';

import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Signup from './Pages/Signup';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <div className="app">
        <div className="ui grid container">
          <Switch>
            <Route exact path="/signup" component={Signup} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
