import React, {Component} from 'react';
import {Menu} from 'semantic-ui-react';
import {logoutUser} from '../redux/actions';
import {connect} from 'react-redux';
import { push } from 'connected-react-router';

class NavBar extends Component {
  state = {
    activeItem: 'home'
  }

  handleItemClick = (e, { name }) => {
    this.setState({
      activeItem: name
    }, this.handleItem(name))
  }

  handleItem = name => {
    switch (name) {
      case 'logout':
      return this.handleLogOut()
      case 'login':
      return this.props.push('/login')
      case 'signup':
      return this.props.push('/signup')
      default:
      return
    }
  }

  handleLogOut = _ => {
    // Remove the token from localStorage
    localStorage.removeItem("token")
    // Remove the user object from the Redux store
    this.props.logoutUser()
    // change location
    this.props.push('/login')
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
          name='login'
          active={activeItem === 'login'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='signup'
          active={activeItem === 'signup'}
          onClick={this.handleItemClick}
        />
        {this.props.currentUser.username
          ? <Menu.Item
            name='logout'
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
  logoutUser: () => dispatch(logoutUser()),
  push: (location) => dispatch(push(location))
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
