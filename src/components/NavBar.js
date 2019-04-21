import React, {Component} from 'react';
import {Menu} from 'semantic-ui-react';
import {logoutUser} from '../redux/actions';
import {connect} from 'react-redux';
import { push } from 'connected-react-router';
import {
  Image
} from 'semantic-ui-react';

class NavBar extends Component {
  state = {
    activeItem: this.props.location.pathname.slice(1)
  }

  handleItemClick = (e, { name }) => {
    this.setState({
      activeItem: name
    }, this.handleItem(name))
  }

  handlePfpClick = event => {
    this.props.push(`/users/${this.props.currentUser.id}`)
  }

  handleItem = name => {
    switch (name) {
      case 'logout':
      return this.handleLogOut()
      case 'login':
      return this.props.push('/login')
      case 'signup':
      return this.props.push('/signup')
      case 'home':
      return this.props.push('/')
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
    const { currentUser } = this.props
    return (
      <Menu inverted borderless>
        {currentUser.username
          ? <React.Fragment>
            <Menu.Item
              name='home'
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
            />
          <Menu.Menu position='right'>
            <Menu.Item>
              <Image avatar
                src={currentUser.avatar}
                onClick={this.handlePfpClick}/>
            </Menu.Item>
            <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={this.handleLogOut}
              />
          </Menu.Menu>
          </React.Fragment>
          : <React.Fragment>
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
            </React.Fragment>
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
