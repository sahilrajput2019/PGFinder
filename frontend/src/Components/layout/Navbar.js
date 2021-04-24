import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ title }) => {
  const home = (
    <Fragment>
      <li></li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </Fragment>
  );
  return (
    <div>
      <div className='navbar bg-primary'>
        <h1>{title}</h1>
        <ul>{home}</ul>
      </div>
      <div></div>
    </div>
  );
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: 'PG-Finder',
};

export default Navbar;
