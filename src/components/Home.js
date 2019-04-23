import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import MovieCard from './MovieCard';
import {Link} from 'react-router-dom';
import {
  Container,
  Header,
  Segment,
  Card
} from 'semantic-ui-react';

const Home = ({currentUser, nowPlaying, upcoming, topRated, discover, popular}) => {
  const formatMovies = movies => {
    return movies.map(movie => <MovieCard movie={movie}/>)
  }

  if (!localStorage.token) {
    return <Redirect to="/login"/>
  } else {
    return (
      <Container>
        <Segment>
          <Header as="h1"><Link to="/movies/now_playing">Now Playing</Link></Header>
          <Card.Group centered>
            {formatMovies(nowPlaying)}
          </Card.Group>
        </Segment>
        <Segment>
          <Header as="h1"><Link to="/movies/upcoming">Upcoming</Link></Header>
          <Card.Group centered>
            {formatMovies(upcoming)}
          </Card.Group>
        </Segment>
        <Segment>
          <Header as="h1"><Link to="/movies/popular">Popular</Link></Header>
          <Card.Group centered>
            {formatMovies(popular)}
          </Card.Group>
        </Segment>
        <Segment>
          <Header as="h1"><Link to="/movies/discover">Discover</Link></Header>
          <Card.Group centered>
            {formatMovies(discover)}
          </Card.Group>
        </Segment>
        <Segment>
          <Header as="h1"><Link to="/movies/top_rated">Top Rated</Link></Header>
          <Card.Group centered>
            {formatMovies(topRated)}
          </Card.Group>
        </Segment>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.reducer.currentUser,
  discover: state.reducer.discover.slice(0, 3),
  nowPlaying: state.reducer.nowPlaying.slice(0, 3),
  upcoming: state.reducer.upcoming.slice(0, 3),
  popular: state.reducer.popular.slice(0, 3),
  topRated: state.reducer.topRated.slice(0, 3),
})

export default connect(mapStateToProps)(Home);
