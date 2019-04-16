import React from 'react';
import {connect} from 'react-redux';
import {Switch, Route} from 'react-router-dom';
import TypeContainer from './TypeContainer';

const MovieContainer = ({discover, nowPlaying, upcoming, topRated, popular}) => {
  return (
    <div>
      <Switch>
        <Route path="/movies/discover" render={routerProps => <TypeContainer movies={discover} routerProps={routerProps}/> }/>
        <Route path="/movies/upcoming" render={routerProps => <TypeContainer movies={upcoming} routerProps={routerProps}/> }/>
        <Route path="/movies/now_playing" render={routerProps => <TypeContainer movies={nowPlaying} routerProps={routerProps}/> }/>
        <Route path="/movies/top_rated" render={routerProps => <TypeContainer movies={topRated} routerProps={routerProps}/> }/>
        <Route path="/movies/popular" render={routerProps => <TypeContainer movies={popular} routerProps={routerProps}/> }/>

      </Switch>
    </div>
  )
}

const mapStateToProps = state => ({
  currentUser: state.reducer.currentUser,
  discover: state.reducer.discover,
  nowPlaying: state.reducer.nowPlaying,
  upcoming: state.reducer.upcoming,
  popular: state.reducer.popular,
  topRated: state.reducer.topRated
})

export default connect(mapStateToProps)(MovieContainer);
