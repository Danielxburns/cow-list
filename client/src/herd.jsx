import React from 'react';
import AddCow from './src/addCow.jsx/index.js';
import Cow from './cow.jsx'

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