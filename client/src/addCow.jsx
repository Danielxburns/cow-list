import React from 'react';

// child of App
// contains a text input for a cowname and another for descript, plus a submit button
// on submit, cowname and descript must be sent to the database, then returned, and sent to cow.jsx to be rendered in the Herd
// handleChange and handleClick are defined in App

class AddCow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cowname: '',
      descript: ''
    }
  }

  onChange(e) {
    if(e.target.id === "cowname") {
      this.setState ({
        cowname: e.target.value,
      })
    }
    if(e.target.id === "descript") {
      this.setState ({
        descript: e.target.value
      })
    }
  }

  handleSubmit(e, state) {
    e.preventDefault();
    console.log(`NEWCOW =${JSON.stringify(this.state)}`)

    // this.setState({
    //   /*
    //   addCow needs to send data to db and reset the text fields
    //   */
    // })
  }

  render(props) {
    return (
    <div>
      <h2>Add a cow to your herd</h2>
      <form>
        <input type="text" id="cowname" placeholder="Name of your new cow" value={this.state.cowname} onChange={this.onChange.bind(this)} />
        <input type="text" id="descript" placeholder="Description of your new cow" value={this.state.descript} onChange={this.onChange.bind(this)} />
        <input type="submit" name="submitCow" value="Add a cow, man!" onClick={this.handleSubmit.bind(this)} />
      </form>
    </div>
    )
  }
}


export default AddCow;