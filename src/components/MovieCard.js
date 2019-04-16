import React from 'react'
import {
  Image,
  Card
} from 'semantic-ui-react';
import {connect} from 'react-redux';
import { push } from 'connected-react-router';

const MovieCard = ({movie, push}) => {
  const handleClick = _ => {
    push(`/movies/${movie.id}`)
  }

  return (
    <Card
    link
    image={`http://image.tmdb.org/t/p/w300/${movie.poster_path}`}
    header={movie.title}
    onClick={handleClick}/>
  )
}

export default connect(null, {push})(MovieCard);
