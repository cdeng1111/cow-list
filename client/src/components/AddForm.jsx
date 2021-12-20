import React from 'react';

class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '',
                  description: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleChange(event) {
      this.setState({[event.target.name]:event.target.value})
   }

   handleSubmit(event) {
     event.preventDefault();
     this.props.handleSubmitData(this.state)
     this.setState({name:'',description:''});
   }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
      </label>
      <label>
        description:
        <input type="text" name="description" value={this.state.description} onChange={this.handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
    );
  }
}

export default AddForm;