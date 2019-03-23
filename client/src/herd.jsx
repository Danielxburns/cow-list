import React from 'react';
// import AddCow from './src/addCow.jsx/index.js';
// import Cow from './cow.jsx'

// child of App
// parent of Cow
// displays list of cows

class Herd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      testCows: ['John', 'Paul', 'George', 'Ringo']
    }
  }

  render() {
    return (
    <div>
      <h4>The Herd</h4>
      <ul>
      {this.state.testCows.map((cowName) => (
        <li>{cowName}</li>
      ))}
      </ul>
    </div>
    )
  }
}

export default Herd;
