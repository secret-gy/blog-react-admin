import React from 'react';
import { Button } from 'antd';
import { BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'

import './pages/home/home'
import Home from "./pages/home/home";


function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route path='/' component={ Home } ></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
