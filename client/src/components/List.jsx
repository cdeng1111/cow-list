import React from 'react';
import ListItem from './ListItem.jsx';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

  }



  render() {
    const {cows, handleShowCow,handleUpdateSubmit, handleDelete} = this.props;
    return (
      <div>
        {cows.map(cow => (
          <ListItem cow={cow} key={cow.id} handleShowCow={handleShowCow} handleUpdateSubmit={handleUpdateSubmit} handleDelete={handleDelete} />
        ))}
      </div>
    );
  }
}

export default List;