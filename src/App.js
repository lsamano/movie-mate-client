import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import {connect} from 'react-redux';
import {getProfileFetch, logoutUser} from './redux/actions';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import NoRouteMatch from './components/NoRouteMatch';
import NavBar from './components/NavBar';

import { Button } from 'semantic-ui-react';

class App extends Component {
  componentDidMount = () => {
    this.props.getProfileFetch()
  }



  render() {
    return (
      <div className="App">
        <Route component={NavBar}/>
        <Switch>
          <Route path="/signup" component={Signup}/>
          <Route path="/login" component={Login}/>
          <Route exact path="/" component={Home}/>
          <Route component={NoRouteMatch}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.reducer.currentUser
})

const mapDispatchToProps = dispatch => ({
  getProfileFetch: () => dispatch(getProfileFetch()),
  logoutUser: () => dispatch(logoutUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
