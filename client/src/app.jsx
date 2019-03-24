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
      testCows: ['John', 'Paul', 'George', 'Ringo'],
      cows: []
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
      console.log(`GET response=${JSON.parse(res.body)}`);
      // this.setState({ cows: JSON.parse(res.body)})
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


  handleSubmit(e){

    this.setState({
      /*
      addCow needs to send data to db and reset the text fields
      */
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
        <AddCow />
        <Herd testCows={this.state.testCows}/>
      </div>
    )
  }
}


export default CowList;