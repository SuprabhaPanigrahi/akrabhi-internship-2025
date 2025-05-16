import React from 'react';
import PropTypes from 'prop-types';

export function PropExample({ name, age }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>You are {age} years old.</p>
    </div>
  );
}

PropExample.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number
};


PropExample.defaultProps = {
  name: 'Guest',
  age: 18
};


