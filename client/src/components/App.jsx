import React from 'react';
import axios from 'axios';
import data from '../dummy_data.js';
import AddForm from './AddForm.jsx';
import List from './List.jsx';
import Header from './Header.jsx';
import DescriptionForm from './DescriptionForm.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {cows: [],
                  showCow:[]
    };
    this.handleSubmitData = this.handleSubmitData.bind(this);
    this.handleShowCow = this.handleShowCow.bind(this);
    this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    axios.get('/api/cows')
        .then(response => {
          this.setState({cows: response.data});
        })
        .catch(err => {
          console.log('error reading cows list');
        })
  }

  handleSubmitData(newItem) {
    console.log('from app newitem:', newItem);
    axios.post('api/cows', newItem)
        .then(response => {
          this.setState({cows: response.data})
        })
        .catch(err=>{
          console.log('err', err);
        })
  }

    handleUpdateSubmit(cow) {
      axios.patch(`/api/cows/${cow.id}`, cow)
          .then((response) => {
            this.setState({cows: response.data })
          })
          .catch(err => {
            console.log('error updating data', err);
          })
    }

    handleDelete(cow) {
      axios.delete(`/api/cows/${cow.id}`, cow)
          .then(response => {
            this.setState({cows: response.data})
          })
          .catch(err => {
            console.log('error deleting data:', err);
          })
    }


  handleShowCow(cow) {
    const newcow = [];
    newcow.push(cow);
    this.setState({showCow: newcow})
  }

  render() {
    const count = this.state.cows.length;
    return (
      <div>
        {this.state.showCow.length>0 && <DescriptionForm showCow={this.state.showCow} />}
        <Header count={count} />

        <List cows={this.state.cows}  handleShowCow={this.handleShowCow} handleUpdateSubmit={this.handleUpdateSubmit} handleDelete={this.handleDelete} />
        <AddForm handleSubmitData={this.handleSubmitData} />
      </div>
    );
  }
}

export default App;