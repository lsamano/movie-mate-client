import React from 'react';
import {Route} from 'react-router-dom';
import UserShow from '../components/UserShow';
import {
  Container,
  Segment
} from 'semantic-ui-react';

class UserContainer extends React.Component {
  render() {
    return (
      <Container>
        <Segment>
          <Route path='/users/:id' component={UserShow}/>
        </Segment>
      </Container>
    )
  }
}

export default UserContainer;
