import React, {Component} from 'react';
import {Menu} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {logoutUser} from '../redux/actions';

class NavBar extends Component {
  state = {
    activeItem: 'home'
  }

  handleItemClick = (e, { name }) => {
    this.setState({
      activeItem: name
    })
  }

  handleLogOut = event => {
    event.preventDefault()
    // Remove the token from localStorage
    localStorage.removeItem("token")
    // Remove the user object from the Redux store
    this.props.logoutUser()
  }

  render() {
    const { activeItem } = this.state

    return (
      <Menu inverted>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick} />
        <Menu.Item
          name='messages'
          active={activeItem === 'messages'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='friends'
          active={activeItem === 'friends'}
          onClick={this.handleItemClick}
        />
        {this.props.currentUser.username
          ? <Menu.Item
            name='Log Out'
            active={activeItem === 'logout'}
            onClick={this.handleLogOut}
          />
          : null
        }
      </Menu>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.reducer.currentUser
})

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
