import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1>404 page</h1>
      <Link to="/">click to go home</Link>
    </div>
  );
}

export default NotFound