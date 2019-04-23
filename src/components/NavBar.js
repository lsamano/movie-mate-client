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
      case 'discover':
      return this.props.push('/movies/discover')
      case 'upcoming':
      return this.props.push('/movies/upcoming')
      case 'popular':
      return this.props.push('/movies/popular')
      case 'now_playing':
      return this.props.push('/movies/now_playing')
      case 'top_rated':
      return this.props.push('/movies/top_rated')
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
            <Menu.Menu>
              <Menu.Item
                name='home'
                active={activeItem === 'home'}
                onClick={this.handleItemClick}
                />
              <Menu.Item
                name='discover'
                active={activeItem === 'discover'}
                onClick={this.handleItemClick}
                />
              <Menu.Item
                name='upcoming'
                active={activeItem === 'upcoming'}
                onClick={this.handleItemClick}
                />
              <Menu.Item
                name='popular'
                active={activeItem === 'popular'}
                onClick={this.handleItemClick}
                />
              <Menu.Item
                name='now_playing'
                active={activeItem === 'now_playing'}
                onClick={this.handleItemClick}
                />
              <Menu.Item
                name='top_rated'
                active={activeItem === 'top_rated'}
                onClick={this.handleItemClick}
                />
            </Menu.Menu>
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
