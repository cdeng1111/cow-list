import React from 'react';
import UpdateForm from './UpdateForm.jsx';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {cow: this.props.cow ,
                showUpdateForm: false};
    this.handleClick = this.handleClick.bind(this);
    this.handleShowUpdateForm = this.handleShowUpdateForm.bind(this);
    this.onCancelForm = this.onCancelForm.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.props.handleShowCow(this.props.cow);
  }

  handleShowUpdateForm(event) {
    event.preventDefault();
    this.setState({showUpdateForm:true})
  }
  onCancelForm() {
    this.setState({showUpdateForm:false})
  }

  handleDeleteClick(event) {
    event.preventDefault();
    this.props.handleDelete(this.props.cow);
  }

  render() {
    const {cow, handleUpdateSubmit, handleDelete} = this.props;
    const {showUpdateForm} = this.state;
    return (
      <div>
        {showUpdateForm?
        <UpdateForm cow={cow} handleUpdateSubmit={handleUpdateSubmit} handleShowUpdateForm={this.handleShowUpdateForm} onCancelForm={this.onCancelForm} />
          :
      <div>
       <li onClick={this.handleClick}  >{cow.name}    </li>
       <button onClick={this.handleShowUpdateForm}>Update</button>
        <button onClick={this.handleDeleteClick} >Delete</button>

        </div>
  }
      </div>
    );
  }
}

export default ListItem;