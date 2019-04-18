import React from 'react';
import {connect} from 'react-redux';
import {loadUser} from '../redux/actions';

class UserShow extends React.Component {
  componentDidMount() {
    const {id} = this.props.match.params
    this.props.loadUser(id)
  }

  render() {
    const {userShow} = this.props
    if (userShow.username) {
      return (
        <div>{userShow.username}</div>
      )
    } else {
      return <div>Loading...</div>
    }
  }
}

const mapStateToProps = state => ({
  userShow: state.reducer.userShow
})

const mapDispatchToProps = dispatch => ({
  loadUser: id => dispatch(loadUser(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);
