import React from 'react';
// import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './routes/Home';
import User from './routes/User';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/user" component={User} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
