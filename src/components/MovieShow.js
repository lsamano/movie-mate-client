import React from 'react';
import {connect} from 'react-redux';
import {movieShowFetch} from '../redux/actions';

class MovieShow extends React.Component {
  componentDidMount() {
    const {id} = this.props.match.params
    this.props.movieShowFetch(id)
  }

  render() {
    const {title} = this.props.movie
    if (!this.props.movie.id) {
      return <div>Loading...</div>
    } else {
      return (
        <div>
          {title}

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
