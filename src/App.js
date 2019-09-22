import React from 'react';
// import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './routes/Home';
import User from './routes/User';
import Detail from './routes/Detail';
import Seat from './routes/Seat';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/user" component={User} exact />
        <Route path="/detail" component={Detail} exact />
        <Route path="/seat" component={Seat} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
