import React from 'react';
// import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './routes/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
