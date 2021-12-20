
import React from 'react';



class DescriptionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name:'',description:''};
  }

  render() {
    const {showCow} = this.props
    return (
      <div>
        <li>
        <span>name: </span><span>{showCow[0].name}</span>
        </li>
        <li>
        <span>description: </span><span>{showCow[0].description}</span>
        </li>
      </div>
    );
  }
}

export default DescriptionForm;