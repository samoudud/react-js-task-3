import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Registration from './Component/Registration/Registration';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/register'>
            <Registration></Registration>
          </Route>
        </Switch>
      </BrowserRouter>
    </div >
  );
}



export default App;
