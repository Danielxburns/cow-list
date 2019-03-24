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

    }
  }

  render() {
    return (
    <div>
      <h4>The Herd</h4>
      <ul>{this.props.cows.map((cow) => (
        <li key={cow.id}>{cow.cowname}</li>
      ))}
      </ul>
    </div>
    )
  }
}

export default Herd;
