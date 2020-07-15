import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <React.Fragment>
      {/* {props.auth.currentUser.name} */}
      <h1>Portfolioh-No-You-Di'int</h1>
        <Link className='homeLink' to='/'>Home</Link><br></br>
        <Link className='signInLink' to='/signIn'>Sign In</Link>
    </React.Fragment>
  );
}

export default Header;