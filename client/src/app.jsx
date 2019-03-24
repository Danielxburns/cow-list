import React from 'react';
import axios from 'axios';
import Spotlight from './spotlight.jsx';
import AddCow from './addCow.jsx';
import Herd from './herd.jsx';

// the parent
// contains the child modules Spotlight, AddCow, and Herd

class CowList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cows: [],
      newCowName: '',
      newCowDesript: ''
      /*
      addCow needs to send data to db and reset the text fields
      herd needs display clicked cows in the spotlight
      */
    }
  }


  componentDidMount() {
    axios({
      method: 'get',
      url: '/api/cows',
      responseType: 'application/json'
    })
    .then(res => {
      this.setState({ cows: res.data })
      console.log(`CowList.state.cows=${JSON.stringify(this.state.cows)}`)
    })
    .catch(err => {
      console.log(`GET error=${err}`);
    })
  }


  postCows() {
    return axios({
      method: 'post',
      url: '/api/cows',
      data: {
        "cowname": "" /* from input field */,
        "descript": ""/* from input field */
      },
      dataType: 'application/json'
    })
    .then(res => {
      console.log(`POST response=${res}`)
    })
    .catch(err => {
      console.log(`POST error=${err}`)
    })
  }


  handleClick(e) {

    this.setState({
      /*
      herd needs display clicked cows in the spotlight
      */
    })
  }

  render() {
    return (
      <div>
        <h1 style={{textAlign: "center"}}>Cow List</h1>
        <Spotlight />
        <AddCow /* handleSubmit={this.handleSubmit} *//>
        <Herd cows={this.state.cows}/>
      </div>
    )
  }
}


export default CowList;