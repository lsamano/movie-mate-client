import React, {Component} from 'react';
import {connect} from 'react-redux';
import {userLoginFetch} from '../redux/actions';
import {
  Form,
  Button
} from 'semantic-ui-react';

class Login extends Component {
  state = {
    username: "",
    password: ""
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.userLoginFetch(this.state)
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <h1>Login</h1>

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

        <Button type='submit'>Submit</Button>
      </Form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  userLoginFetch: userInfo => dispatch(userLoginFetch(userInfo))
})

export default connect(null, mapDispatchToProps)(Login);
