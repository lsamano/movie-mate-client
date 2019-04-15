import React from 'react'
import {
  Image,
  Card
} from 'semantic-ui-react';

const MovieCard = ({movie}) => {
  return (
    <Card>
      {movie.title}
      <Image src={`http://image.tmdb.org/t/p/w300/${movie.poster_path}`} />
    </Card>
  )
}

export default MovieCard;
