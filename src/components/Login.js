import React, {Component} from 'react';
import {connect} from 'react-redux';
import {userLoginFetch} from '../redux/actions';

import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import FormLabel from '@material-ui/core/FormLabel';
import Typography from '@material-ui/core/Typography';

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
      <form onSubmit={this.handleSubmit}>
        <Typography component="h2" variant="h1">Login</Typography>

        <FormLabel>Username</FormLabel>
        <Input
          name='username'
          placeholder='Username'
          value={this.state.username}
          onChange={this.handleChange}
          /><br/>

        <FormLabel>Password</FormLabel>
        <Input
          type='password'
          name='password'
          placeholder='Password'
          value={this.state.password}
          onChange={this.handleChange}
          /><br/>

        <Button type='submit'>Submit</Button>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  userLoginFetch: userInfo => dispatch(userLoginFetch(userInfo))
})

export default connect(null, mapDispatchToProps)(Login);
