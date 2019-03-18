import React from 'react';

// child of Herd
// creates a new list item to send to Herd displaying a new cowname when the db sends back data from a post request

class Cow extends React.Component {
  constructor(props) {
    super(props);

  }



  render() {
    return (
      <li onClick={/* handleClick */}>{this.props.cow.cowname}</li>
    );
  };
}

export default Cow;