import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {moviesIndexFetch} from '../redux/actions';
import MovieCard from './MovieCard';

import {
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
      <div>
        <Card.Group>
          {this.formatMovies(this.props.movies)}
        </Card.Group>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.reducer.currentUser,
  movies: state.reducer.movies
})

const mapDispatchToProps = dispatch => ({
  moviesIndexFetch: () => dispatch(moviesIndexFetch())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
