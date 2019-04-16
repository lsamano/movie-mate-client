import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
// import {moviesIndexFetch} from '../redux/actions';
import MovieCard from './MovieCard';
import {Link} from 'react-router-dom';
import {
  Container,
  Header,
  Segment,
  Card
} from 'semantic-ui-react';

class Home extends React.Component {
  componentDidMount = () => {
    // this.props.moviesIndexFetch();
  }

  formatMovies = movies => {
    return movies.map(movie => <MovieCard movie={movie}/>)
  }

  render() {
    const {currentUser} = this.props
    if (!localStorage.token) {
      return <Redirect to="/login"/>
    }
    console.log("Listen, this is what's your Home props", this.props);
    return (
      <Container>
        <Segment>
          <Header as="h1"><Link to="/movies/discover">Discover</Link></Header>
          <Card.Group centered>
            {this.formatMovies(this.props.discover)}
          </Card.Group>
        </Segment>
        <Segment>
          <Header as="h1"><Link to="/movies/now_playing">Now Playing</Link></Header>
          <Card.Group centered>
            {this.formatMovies(this.props.nowPlaying)}
          </Card.Group>
        </Segment>
        <Segment>
          <Header as="h1"><Link to="/movies/upcoming">Upcoming</Link></Header>
          <Card.Group centered>
            {this.formatMovies(this.props.upcoming)}
          </Card.Group>
        </Segment>
        <Segment>
          <Header as="h1"><Link to="/movies/popular">Popular</Link></Header>
          <Card.Group centered>
            {this.formatMovies(this.props.popular)}
          </Card.Group>
        </Segment>
        <Segment>
          <Header as="h1"><Link to="/movies/top_rated">Top Rated</Link></Header>
          <Card.Group centered>
            {this.formatMovies(this.props.topRated)}
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

const mapDispatchToProps = dispatch => ({
  // moviesIndexFetch: () => dispatch(moviesIndexFetch())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
