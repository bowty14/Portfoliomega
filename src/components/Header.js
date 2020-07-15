import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <React.Fragment>
      {/* {props.auth.currentUser.name} */}
      <h1>Portfolioh-No-You-Di'int</h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/signIn'>Sign In</Link>
        </li>
      </ul>
    </React.Fragment>
  );
}

export default Header;