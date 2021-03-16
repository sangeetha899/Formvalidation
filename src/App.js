import React from 'react';
import './App.css';
import Personaldetails from './personal';
import Companydetails from './company';
import Emailverify from './email';
import Successfulpage from './successfulpage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" ><Personaldetails /></Route>
            <Route path="/company" ><Companydetails /></Route>
            <Route path="/email"><Emailverify /></Route>
            <Route path="/success"><Successfulpage /></Route>
          </Switch>
        </Router>
      </>
    )
  }
}

export default App;
