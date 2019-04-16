import React from 'react';
import {connect} from 'react-redux';
import {Switch, Route} from 'react-router-dom';
import TypeContainer from './TypeContainer';
import MovieShow from '../components/MovieShow';
import {
  Container,
  Segment
} from 'semantic-ui-react';

const MovieContainer = ({discover, nowPlaying, upcoming, topRated, popular}) => {
  return (
    <Container>
      <Segment>
        <Switch>
          <Route
            path="/movies/discover"
            render={() => <TypeContainer movies={discover} movieType={"Discover"}/> }/>
          <Route
            path="/movies/upcoming"
            render={() => <TypeContainer movies={upcoming} movieType={"Upcoming"}/> }/>
          <Route
            path="/movies/now_playing"
            render={() => <TypeContainer movies={nowPlaying} movieType={"Now Playing"}/> }/>
          <Route
            path="/movies/top_rated"
            render={() => <TypeContainer movies={topRated} movieType={"Top Rated"}/> }/>
          <Route
            path="/movies/popular"
            render={() => <TypeContainer movies={popular} movieType={"Popular"}/> }/>
          <Route path="/movies/:id" component={MovieShow} />
        </Switch>
      </Segment>
    </Container>
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
