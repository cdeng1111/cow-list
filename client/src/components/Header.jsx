import React from 'react';

const Header = function(props) {
  const {count} = props;
  return (
    <div>
    <h1>Cow List</h1>
    <h4>There are {count} cows in the list</h4>
    </div>
  );
}

export default Header;