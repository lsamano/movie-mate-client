import React from 'react';
import {Link} from 'react-router-dom';

const NoRouteMatch = () => {
  return (
    <div>The URL does not exist. Please navigate to the <Link to="/">Home</Link> page.</div>
  )
}

export default NoRouteMatch;
