import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Guide from './pages/guide'
import Room from './pages/room'



class App extends React.Component {
  constructor(porps) {
    super(porps)
  }

  state = {}



  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">guide</Link>
              </li>
              <li>
                <Link to="/room">room</Link>
              </li>
            </ul>
            <hr />
            <Switch>
              <Route exact path="/">
                <Guide />
              </Route>
              <Route path="/room/:id/:name">
                <Room />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>

    )
  }
}


export default App;
