import React from 'react';

// child of App
// contains a text input for a cowname and another for descript, plus a submit button
// on submit, cowname and descript must be sent to the database, then returned, and sent to cow.jsx to be rendered in the Herd
// handleChange and handleClick are defined in App

var AddCow = (props) => (
  <div>
    <h2>Add a cow to the herd</h2>
    <form>
      <input type="text" /* handle change *//>
      <input type="submit" /* handle click */name="ADD A COW, MAN!" />
    </form>
  </div>
)

export default AddCow;