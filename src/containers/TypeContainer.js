import React from 'react';
import MovieCard from '../components/MovieCard';
import {
  Header,
  Card
} from 'semantic-ui-react';

const TypeContainer = ({movies, movieType}) => {
  const formatMovies = movies => movies.map(movie => <MovieCard movie={movie}/>)

  return (
    <React.Fragment>
      <Header as="h1">{movieType}</Header>
      <Card.Group>{formatMovies(movies)}</Card.Group>
    </React.Fragment>
  )
}

export default TypeContainer;
