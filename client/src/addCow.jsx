import React from 'react';
import axios from 'axios';


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

  handleSubmit() {
    axios({
      method: 'post',
      url: '/api/cows',
      data: this.state,
      dataType: 'application/json'
    })
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