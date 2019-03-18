import React from 'react';
import Spotlight from './spotlight.jsx';
import AddCow from './addCow.jsx';
import Herd from './herd.jsx';

// the parent
// contains the child modules Spotlight, AddCow, and Herd

class CowList extends React.Component {
  constuctor(props) {
    super(props);
    this.state = {
      /*
      addCow needs to send data to db and reset the text fields
      herd needs display clicked cows in the spotlight
      */
    }
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
        <Spotlight />
        <AddCow />
        <Herd />
      </div>
    )
  }
}


export default CowList;