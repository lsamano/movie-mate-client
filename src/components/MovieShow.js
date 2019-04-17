import React from 'react';
import {connect} from 'react-redux';
import {movieShowFetch} from '../redux/actions';
import {Image, Header, Segment} from 'semantic-ui-react';

class MovieShow extends React.Component {
  componentDidMount() {
    const {id} = this.props.match.params
    this.props.movieShowFetch(id)
  }

  render() {
    const {title, tagline, release_date, poster_path, overview} = this.props.movie
    if (!this.props.movie.id) {
      return <div>Loading...</div>
    } else {
      return (
        <div>
          <Image src={`http://image.tmdb.org/t/p/w300/${poster_path}`}/>
          <Header as='h1' content={title} subheader={tagline} attached='top'/>
          <Segment attached>
            {release_date}
            <p>{overview}</p>
          </Segment>
        </div>
      )
    }
  }
}

const mapStateToProps = state => ({
  movie: state.reducer.movieShow
})

const mapDispatchToProps = dispatch => ({
  movieShowFetch: id => dispatch(movieShowFetch(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieShow);
