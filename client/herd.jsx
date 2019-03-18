import React from 'react';
import AddCow from './addCow.jsx';
import Cow from './cow.js'

// child of App
// parent of Cow
// displays list of cows

const Herd = (props) => (
  <div>
    {props./* array of cows */.map((cow) => (
      <Cow name={cowname} />
    ))}
  </div>
)

export default CowList;
