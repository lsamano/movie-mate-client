import React, {Component} from 'react';
import {connect} from 'react-redux';
import {userPostFetch} from '../redux/actions';
import {Redirect} from 'react-router-dom';
import {
  Form,
  Button
} from 'semantic-ui-react';

class Signup extends Component {
  state = {
    username: "",
    password: "",
    email: "",
    avatar: "",
    bio: ""
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.userPostFetch(this.state)
  }

  render() {
    const {currentUser} = this.props
    if (currentUser.username) {
      return <Redirect to="/"/>
    }
    return (
      <Form onSubmit={this.handleSubmit}>
        <h1>Sign Up For An Account</h1>
        <Form.Field>
          <label>Username</label>
          <input
            name='username'
            placeholder='Username'
            value={this.state.username}
            onChange={this.handleChange}
          />
        </Form.Field>

        <Form.Field>
          <label>Password</label>
          <input
            type='password'
            name='password'
            placeholder='Password'
            value={this.state.password}
            onChange={this.handleChange}
          />
        </Form.Field>

        <Form.Field>
          <label>Email</label>
          <input
            type='email'
            name='email'
            placeholder='Email'
            value={this.state.email}
            onChange={this.handleChange}
          />
        </Form.Field>

        <Form.Field>
          <label>Avatar</label>
          <input
            name='avatar'
            placeholder='Avatar (URL)'
            value={this.state.avatar}
            onChange={this.handleChange}
          />
        </Form.Field>

        <Form.Field>
          <label>Bio</label>
          <textarea
            name='bio'
            placeholder='Bio'
            value={this.state.bio}
            onChange={this.handleChange}
          />
        </Form.Field>
        
        <Button type='submit'>Submit</Button>
      </Form>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.reducer.currentUser
})

const mapDispatchToProps = dispatch => ({
  userPostFetch: userInfo => dispatch(userPostFetch(userInfo))
})

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
