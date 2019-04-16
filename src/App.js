import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import {connect} from 'react-redux';
import {getProfileFetch, moviesIndexFetch} from './redux/actions';
import MovieContainer from './containers/MovieContainer';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import NoRouteMatch from './components/NoRouteMatch';
import NavBar from './components/NavBar';

class App extends Component {
  componentDidMount = () => {
    // Auto-login for returning User
    this.props.getProfileFetch()
    this.props.moviesIndexFetch()
  }

  render() {
    return (
      <div className="App">

        <Route component={NavBar}/>

        <Switch>
          <Route path="/movies" component={MovieContainer}/>
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
  moviesIndexFetch: () => dispatch(moviesIndexFetch())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
