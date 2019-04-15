import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class Home extends React.Component {
  render() {
    const {currentUser} = this.props
    if (!currentUser.username) {
      return <Redirect to="/login"/>
    }
    return (
      <div>Hello</div>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.reducer.currentUser
})

export default connect(mapStateToProps)(Home);
