import React from 'react';

class UpdateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {id: this.props.cow.id, name: this.props.cow.name,
    description:this.props.cow.description};
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleUpdateSubmit() {
    event.preventDefault();
    // update data to the database
    this.props.handleUpdateSubmit(this.state);
    this.props.onCancelForm();
  }

  render() {

    return (
      <form onSubmit={this.handleUpdateSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
      </label>
      <label>
        description:
        <input type="text" name="description" value={this.state.description} onChange={this.handleChange} />
      </label>
      <button>Update</button>
    </form>
    );
  }
}

export default UpdateForm;