import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {moviesIndexFetch} from '../redux/actions';
import MovieCard from './MovieCard';

import {
  Container,
  Header,
  Segment,
  Image,
  Card
} from 'semantic-ui-react';

class Home extends React.Component {
  componentDidMount = () => {
    this.props.moviesIndexFetch();
  }

  formatMovies = movies => {
    return movies.map(movie => <MovieCard key={movie.id} movie={movie}/>)
  }

  render() {
    const {currentUser} = this.props
    if (!localStorage.token) {
      return <Redirect to="/login"/>
    }
    return (
      <Container>
        <Segment>
          <Header as="h1">Discover</Header>
          <Card.Group centered>
            {this.formatMovies(this.props.discover)}
          </Card.Group>
        </Segment>
        <Segment>
          <Header as="h1">Now Playing</Header>
          <Card.Group centered>
            {this.formatMovies(this.props.nowPlaying)}
          </Card.Group>
        </Segment>
        <Segment>
          <Header as="h1">Upcoming</Header>
          <Card.Group centered>
            {this.formatMovies(this.props.upcoming)}
          </Card.Group>
        </Segment>
        <Segment>
          <Header as="h1">Popular</Header>
          <Card.Group centered>
            {this.formatMovies(this.props.upcoming)}
          </Card.Group>
        </Segment>
        <Segment>
          <Header as="h1">Top Rated</Header>
          <Card.Group centered>
            {this.formatMovies(this.props.upcoming)}
          </Card.Group>
        </Segment>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.reducer.currentUser,
  discover: state.reducer.discover.splice(0, 4),
  nowPlaying: state.reducer.nowPlaying.splice(0, 4),
  upcoming: state.reducer.upcoming.splice(0, 4),
  popular: state.reducer.popular.splice(0, 4),
  topRated: state.reducer.topRated.splice(0, 4),
})

const mapDispatchToProps = dispatch => ({
  moviesIndexFetch: () => dispatch(moviesIndexFetch())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
