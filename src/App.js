import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import {connect} from 'react-redux';
import {getProfileFetch, logoutUser} from './redux/actions';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import NoRouteMatch from './components/NoRouteMatch';

import Button from '@material-ui/core/Button';

class App extends Component {
  componentDidMount = () => {
    this.props.getProfileFetch()
  }

  handleClick = event => {
    event.preventDefault()
    // Remove the token from localStorage
    localStorage.removeItem("token")
    // Remove the user object from the Redux store
    this.props.logoutUser()
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/signup" component={Signup}/>
          <Route path="/login" component={Login}/>
          <Route exact path="/" component={Home}/>
          <Route component={NoRouteMatch}/>
        </Switch>
          {this.props.currentUser.username
            ? <Button onClick={this.handleClick}>Log Out</Button>
            : null
          }
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
